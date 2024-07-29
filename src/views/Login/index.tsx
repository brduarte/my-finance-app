import Layout from './Layout.tsx';
import React, {useState} from 'react';
import AuthModel from '../../services/core/models/AuthModel.ts';
import {EmailHelper} from '../../helpers/EmailHelper.ts';
import {showMessage} from 'react-native-flash-message';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAuthProfileContext} from '../../contexts/AuthProfileContext.tsx';
import {useActiveIndicator} from '../../contexts/ActiveIndicatorContext.tsx';

export default function Login({
  navigation,
}: NativeStackScreenProps<any>): React.JSX.Element {
  const [authModel, setAuthModel] = useState<AuthModel>({
    email: '',
    password: '',
  });

  const useAuthProfile = useAuthProfileContext();
  const activeIndicator = useActiveIndicator();

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
    activeIndicator.active();
    if (!authModel.email || !authModel.password) {
      return showMessage({
        message: 'Falha ao entrar',
        description: 'Verifique se seu usuário ou senha estão corretos.',
        type: 'danger',
      });
    }

    await useAuthProfile.signIn(authModel);
    activeIndicator.disabled();
    navigation.navigate('Main');
  }

  return (
    <Layout
      handleForm={handleForm}
      onBlurEmail={validateEmail}
      onFormSubmit={handleOnFormSubmit}
    />
  );
}
