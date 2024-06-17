import Layout from './Layout.tsx';
import {NativeSyntheticEvent} from 'react-native';
import {TextInputChangeEventData} from 'react-native/Libraries/Components/TextInput/TextInput';
import {useState} from 'react';
import {EmailHelper} from '../../helpers/EmailHelper.ts';

export default function Login() {
  const [email, setEmail] = useState<string>('');

  function handleEmail(email: string) {
    setEmail(email);
  }

  function validateEmail(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    const emailIsValid = EmailHelper.validate(email);

    console.log(emailIsValid);
  }

  return (
    <Layout
      onBlurEmail={validateEmail}
      emailState={{set: setEmail, value: email}}
    />
  );
}
