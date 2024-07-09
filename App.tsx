/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {MStyles} from './src/views/style';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Onboarding from './src/views/Onboarding';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/views/Login';
import FlashMessage from 'react-native-flash-message';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/views/Home';
import {HomeIcon, PlusIcon} from 'lucide-react-native';
import CreateAccountForm from './src/views/CreateAccountForm';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetProvider} from './src/contexts/BottomSheetContext.tsx';
import {ModalSheet} from './src/views/Home/components/ModalSheet';

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
          tabBarItemStyle: {display: 'none'},
          tabBarIcon: () => (
            <HomeIcon
              strokeWidth={2.5}
              color={MStyles.colors.blackColor}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="add"
        component={Home}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('CreateAccountForm');
          },
        })}
        options={{
          tabBarLabelStyle: {
            display: 'none',
          },
          tabBarIconStyle: {
            marginTop: 2,
            backgroundColor: MStyles.colors.blackColor,
            borderWidth: 1,
            width: 45,
            borderRadius: 10,
            justifyContent: 'center',
          },
          tabBarIcon: () => (
            <PlusIcon
              strokeWidth={3}
              color={MStyles.colors.whiteColor}
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: MStyles.colors.whiteColor,
      }}>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetProvider>
          <NavigationContainer theme={MyTheme}>
            <Stack.Navigator
              initialRouteName="Onboarding"
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Group>
                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="Main" component={LoggedArea} />
                <Stack.Screen name="Login" component={Login} />
              </Stack.Group>
              <Stack.Group
                screenOptions={{
                  presentation: 'modal',
                  animation: 'slide_from_bottom',
                  title: 'Lançamentos ',
                  headerShown: true,
                  headerTitleStyle: {
                    fontSize: 18,
                    color: MStyles.colors.blackColor,
                    fontFamily: MStyles.fontFamilyInterSemiBold,
                  },
                  headerShadowVisible: false,
                }}>
                <Stack.Screen
                  name="CreateAccountForm"
                  component={CreateAccountForm}
                />
              </Stack.Group>
            </Stack.Navigator>
          </NavigationContainer>
          <ModalSheet />
        </BottomSheetProvider>
      </GestureHandlerRootView>

      <FlashMessage accessible={true} position="top" />
    </SafeAreaView>
  );
}

export default App;
