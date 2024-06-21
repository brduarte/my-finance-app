/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {StatusBar} from 'react-native';
import {MStyles} from './src/views/style';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Onboarding from './src/views/Onboarding';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/views/Login';
import FlashMessage from 'react-native-flash-message';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/views/Home';
import {LayoutGrid} from 'lucide-react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

function LoggedArea() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 13,
          color: '#585858',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <LayoutGrid color={MStyles.colors.blackColor} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: MStyles.colors.defaultBackgroundColor,
        }}>
        <StatusBar
          backgroundColor={MStyles.colors.blackColor}
          barStyle={'light-content'}
        />
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator
            initialRouteName="Onboarding"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Main" component={LoggedArea} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
        <FlashMessage accessible={true} position="top" />
      </SafeAreaView>
    </>
  );
}

export default App;
