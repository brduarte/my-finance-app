import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {MStyles} from '../../../style';
import {ArrowDown, ArrowUp} from 'lucide-react-native';
import {MoneyHelper} from '../../../../helpers/MoneyHelper.ts';

type ResumeCardProps = {
  revenue?: number;
  expenditure?: number;
};

export function ResumeCard({
  revenue,
  expenditure,
}: ResumeCardProps): React.JSX.Element {
  return (
    <ImageBackground
      source={require('../../../../assets/imgs/resumeBackground.png')}
      resizeMode="stretch"
      borderRadius={9}
      style={styles.container}>
      <View style={styles.session}>
        <ArrowUp
          strokeWidth={3}
          size={24}
          color={MStyles.colors.greenColor}
          style={styles.icon}
        />
        <View>
          <Text style={styles.title}>Receita</Text>
          <Text style={styles.text}>{MoneyHelper.intToReal(revenue)}</Text>
        </View>
      </View>
      <Text style={styles.line} />
      <View style={styles.session}>
        <ArrowDown
          strokeWidth={3}
          size={24}
          color={MStyles.colors.redColor}
          style={styles.icon}
        />
        <View>
          <Text style={styles.title}>Despesa</Text>
          <Text style={styles.text}>{MoneyHelper.intToReal(expenditure)}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
