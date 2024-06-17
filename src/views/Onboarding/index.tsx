import Layout from './Layout.tsx';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export default function Onboarding({navigation}: NativeStackScreenProps<any>) {
  function navigateToLoginForm() {
    navigation.navigate('Login');
  }

  return <Layout navigation={navigateToLoginForm} />;
}
