import {Image, ImageSourcePropType, Text, View} from 'react-native';
import {styles} from './styles';

type LayoutProps = {
  name: string;
  image: ImageSourcePropType;
};

export function Layout({name, image}: LayoutProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.imageSession} resizeMode="stretch" source={image} />
      <View style={styles.sectionText}>
        <Text style={styles.subText}>Bom Dia!</Text>
        <Text style={styles.textName}>{name}</Text>
      </View>
    </View>
  );
}
