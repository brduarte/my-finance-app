import {LayoutChangeEvent, Pressable, Text, View} from 'react-native';
import React from 'react';
import {MStyles} from '../../views/style';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {styles} from './styles';

export type TabButtonType = {
  title: string;
  value: string | number;
};

type TabButtonProps = {
  buttons: TabButtonType[];
  selectedTab: number;
  setSelectedTab: (index: number) => void;
};

export function InputTabSelect({
  buttons,
  setSelectedTab,
  selectedTab,
}: TabButtonProps): React.JSX.Element {
  const [dimensions, setDimensions] = React.useState({height: 20, width: 100});

  const buttonWidth = dimensions.width / buttons.length;

  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const tabPositionX = useSharedValue(0);

  const handlePress = (index: number) => {
    setSelectedTab(index);
  };

  const onTabPress = (index: number) => {
    tabPositionX.value = withTiming(buttonWidth * index, {}, () => {
      runOnJS(handlePress)(index);
    });
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
          const color =
            selectedTab === index
              ? MStyles.colors.greyColorBackground
              : MStyles.colors.blackColor;

          return (
            <Pressable
              key={index}
              style={styles.pressable}
              onPress={() => {
                onTabPress(index);
              }}>
              <Text style={[styles.textTab]}>{button.title}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
