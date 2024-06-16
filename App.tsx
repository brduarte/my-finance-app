/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {StatusBar} from 'react-native';
import {MStyles} from './src/views/style';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Login from './src/views/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

function App(): React.JSX.Element {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: MStyles.colors.defaultBackgroundColor}}>
      <StatusBar
        backgroundColor={MStyles.colors.defaultBackgroundColor}
        barStyle={'dark-content'}
      />
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Init" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
