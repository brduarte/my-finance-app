import Layout from './Layout.tsx';
import React, {useState} from 'react';
import AuthModel from '../../services/core/models/AuthModel.ts';
import {EmailHelper} from '../../helpers/EmailHelper.ts';
import {showMessage} from 'react-native-flash-message';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAuthProfileContext} from '../../contexts/AuthProfileContext.tsx';
import {useActiveIndicator} from '../../contexts/ActiveIndicatorContext.tsx';

type Error = {
  isError: boolean;
  text?: string;
};

export default function Login({
  navigation,
}: NativeStackScreenProps<any>): React.JSX.Element {
  const [errorInputEmail, setErrorInputEmail] = useState<Error>();
  const [errorInputPassword, setErrorInputPassword] = useState<Error>();

  const [authModel, setAuthModel] = useState<AuthModel>({
    email: '',
    password: '',
  });

  const useAuthProfile = useAuthProfileContext();
  const activeIndicator = useActiveIndicator();

  function handleForm(text: string, key: string) {
    if (key === 'email') {
      setErrorInputEmail({isError: false});
    } else if (key === 'password') {
      setErrorInputPassword({isError: false});
    }

    setAuthModel({...authModel, [key]: text});
  }

  function validateEmail() {
    let result = true;

    if (!authModel.email) {
      setErrorInputEmail({
        isError: true,
        text: 'Por favor, insira um endereço de e-mail.',
      });

      result = false;
    } else if (!EmailHelper.validate(authModel.email)) {
      setErrorInputEmail({
        isError: true,
        text: 'Por favor, insira um endereço de e-mail válido.',
      });

      result = false;
    }

    return result;
  }

  function validatePassword() {
    let result = true;

    if (!authModel.password) {
      setErrorInputPassword({
        isError: true,
        text: 'Por favor, insira uma senha valida.',
      });

      result = false;
    } else if (authModel.password.length < 4) {
      setErrorInputPassword({
        isError: true,
        text: 'A senha deve ter pelo menos 4 dígitos.',
      });

      result = false;
    }

    return result;
  }

  async function handleOnFormSubmit() {
    if (!validateEmail() || !validatePassword()) {
      return;
    }

    try {
      activeIndicator.active();
      await useAuthProfile.signIn(authModel);
      navigation.navigate('Main');
    } finally {
      activeIndicator.disabled();
    }
  }

  return (
    <Layout
      handleForm={handleForm}
      onFormSubmit={handleOnFormSubmit}
      inputEmail={{
        isError: errorInputEmail?.isError,
        errorMessage: errorInputEmail?.text,
      }}
      inputPassword={{
        isError: errorInputPassword?.isError,
        errorMessage: errorInputPassword?.text,
      }}
    />
  );
}
