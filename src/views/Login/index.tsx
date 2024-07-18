import Layout from './Layout.tsx';
import React, {useState} from 'react';
import AuthModel from '../../services/core/models/AuthModel.ts';
import {EmailHelper} from '../../helpers/EmailHelper.ts';
import {showMessage} from 'react-native-flash-message';
import {IAuthService} from '../../services/core/interfaces/OauthServiceInterface.ts';
import {TokenModel} from '../../services/core/models/TokenModel.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {OAuthService} from '../../services/core/services/OauthService.ts';

export default function Login({
  navigation,
}: NativeStackScreenProps<any>): React.JSX.Element {
  const [authModel, setAuthModel] = useState<AuthModel>({
    email: '',
    password: '',
  });

  function handleForm(text: string, key: string) {
    setAuthModel({...authModel, [key]: text});
  }

  function validateEmail() {
    const emailIsValid = EmailHelper.validate(authModel.email);

    if (!emailIsValid) {
      showMessage({
        message: 'E-mail Inválido',
        description: 'Por favor, insira um e-mail válido para continuar.',
        type: 'danger',
      });
    }
  }

  async function handleOnFormSubmit() {
    const authServer: IAuthService = new OAuthService();

    if (!authModel.email || !authModel.password) {
      return showMessage({
        message: 'Falha ao entrar',
        description: 'Verifique se seu usuário ou senha estão corretos.',
        type: 'danger',
      });
    }

    authServer.token(authModel).then(async (token: TokenModel) => {
      await AsyncStorage.setItem('session', JSON.stringify(token));
      navigation.navigate('Main');
    });
  }

  return (
    <Layout
      handleForm={handleForm}
      onBlurEmail={validateEmail}
      onFormSubmit={handleOnFormSubmit}
    />
  );
}
