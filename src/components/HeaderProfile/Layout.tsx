import {Image, Text, View} from 'react-native';
import {styles} from './styles';

export function Layout() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageSession}
        resizeMode="stretch"
        source={require('../../assets/imgs/profile.jpeg')}
      />
      <View style={styles.sectionText}>
        <Text style={styles.subText}>Bom Dia!</Text>
        <Text style={styles.textName}>Bruno Duarte</Text>
      </View>
    </View>
  );
}
