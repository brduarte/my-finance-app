import Layout from './Layout.tsx';
import React, {useState} from 'react';
import AuthModel from '../../services/core/models/AuthModel.ts';
import {EmailHelper} from '../../helpers/EmailHelper.ts';
import {showMessage} from 'react-native-flash-message';

export default function Login(): React.JSX.Element {
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

  return <Layout handleForm={handleForm} onBlurEmail={validateEmail} />;
}
