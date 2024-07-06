import {Layout} from './Layout.tsx';
import {ImageSourcePropType} from 'react-native';

type HeaderProfileProps = {
  name: string;
  image?: ImageSourcePropType;
};

export function HeaderProfile(props: HeaderProfileProps) {
  const image = props.image
    ? props.image
    : require('../../assets/imgs/profile.jpeg');

  return <Layout {...props} image={image} />;
}
