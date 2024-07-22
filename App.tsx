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
import {HomeIcon, PlusIcon, X} from 'lucide-react-native';
import CreateAccountForm from './src/modals/CreateAccountForm';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetProvider} from './src/contexts/BottomSheetContext.tsx';
import {ModalSheet} from './src/components/ModalSheet';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from './src/helpers/MetricsHelper.ts';
import InputSelectModal from './src/modals/InputSelectModal';
import {ModalHeader} from './src/navigate/modal/ModalHeader.tsx';
import {
  AuthProfileProvider,
  useAuthProfileContext,
} from './src/contexts/AuthProfileContext.tsx';

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
          fontSize: moderateScale(13),
          color: '#585858',
        },
        tabBarStyle: {
          paddingBottom: verticalScale(5),
          paddingVertical: verticalScale(5),
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
            marginHorizontal: horizontalScale(2),
            backgroundColor: MStyles.colors.blackColor,
            borderWidth: 1,
            width: moderateScale(45),
            borderRadius: 10,
            justifyContent: 'center',
          },
          tabBarIcon: () => (
            <PlusIcon
              strokeWidth={3}
              color={MStyles.colors.whiteColor}
              size={moderateScale(25)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function Main(): React.JSX.Element {
  return (
    <AuthProfileProvider>
      <App />
    </AuthProfileProvider>
  );
}

function App(): React.JSX.Element {
  const useAuth = useAuthProfileContext();

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
                {useAuth.isLogged() ? (
                  <Stack.Screen name="Main" component={LoggedArea} />
                ) : (
                  <>
                    <Stack.Screen name="Onboarding" component={Onboarding} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Main" component={LoggedArea} />
                  </>
                )}
              </Stack.Group>
              <Stack.Group
                screenOptions={{
                  presentation: 'modal',
                  animation: 'slide_from_bottom',
                  headerShown: true,
                  headerShadowVisible: false,
                  headerBackTitleVisible: false,
                  headerBackVisible: false,
                  headerTitle: ModalHeader,
                }}>
                <Stack.Screen
                  name="CreateAccountForm"
                  options={{
                    title: 'Novo Registro de Conta',
                  }}
                  component={CreateAccountForm}
                />
                <Stack.Screen
                  options={{
                    headerShadowVisible: false,
                  }}
                  name="InputSelectModal"
                  component={InputSelectModal}
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
