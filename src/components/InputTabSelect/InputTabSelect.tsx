import {
  LayoutChangeEvent,
  Pressable,
  Text,
  TextProps,
  View,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {MStyles} from '../../views/style';
import Animated, {
  Easing,
  measure,
  MeasuredDimensions,
  ReduceMotion,
  runOnJS,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {styles} from './styles';
import {ro} from 'date-fns/locale';
import {TextStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

export type TabOptionType = {
  title: string;
  value: string | number;
};

type TabButtonProps = {
  buttons: TabOptionType[];
  selectedTab?: TabOptionType;
  setSelectedTab: (index: TabOptionType) => void;
};

const MyText = React.forwardRef(
  (props: TextProps, ref: React.LegacyRef<View>) => {
    // some additional logic
    return <Text ref={ref} {...props} />;
  },
);

const MyTextComponent = Animated.createAnimatedComponent(MyText);

export function InputTabSelect({
  buttons,
  setSelectedTab,
}: TabButtonProps): React.JSX.Element {
  const [dimensions, setDimensions] = React.useState({height: 20, width: 100});
  const tabPositionX = useSharedValue(0);

  const buttonWidth = dimensions.width / buttons.length;

  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const handlePress = (index: TabOptionType) => {
    setSelectedTab(index);
  };

  const onTabPress = (value: TabOptionType, index: number) => {
    tabPositionX.value = withTiming(
      buttonWidth * index,
      {
        duration: 300,
        easing: Easing.out(Easing.quad),
        reduceMotion: ReduceMotion.System,
      },
      () => {
        runOnJS(handlePress)(value);
      },
    );
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: tabPositionX.value}],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          animatedStyles,
          styles.backgroundSelect,
          {
            height: dimensions.height - 10,
            width: buttonWidth - 20,
          },
        ]}
      />
      <View onLayout={onTabbarLayout} style={{flexDirection: 'row'}}>
        {buttons.map((button, index) => {
          return (
            <Pressable
              key={index}
              style={styles.pressable}
              onPress={() => {
                onTabPress(button, index);
              }}>
              <MyTextComponent style={[styles.textTab]}>
                {button.title}
              </MyTextComponent>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
