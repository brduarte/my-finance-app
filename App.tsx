/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {MStyles} from './src/views/style';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Onboarding from './src/views/Onboarding';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/views/Login';
import FlashMessage from 'react-native-flash-message';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/views/Home';
import {HomeIcon, ListChecks, PlusIcon} from 'lucide-react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetProvider} from './src/contexts/BottomSheetContext.tsx';
import {ModalSheet} from './src/components/ModalSheet';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from './src/helpers/MetricsHelper.ts';
import InputSelectModal from './src/modals/InputSelectModal';
import {
  AuthProfileProvider,
  useAuthProfileContext,
} from './src/contexts/AuthProfileContext.tsx';
import CreateAccountForm from './src/modals/CreateAccountForm';
import {ActivityIndicator} from './src/components/ActivityIndicator/ActivityIndicator.tsx';
import {
  ActiveIndicatorProvider,
  useActiveIndicator,
} from './src/contexts/ActiveIndicatorContext.tsx';
import {Transaction} from './src/views/Transaction';

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
          display: 'none',
        },
        tabBarStyle: {
          paddingVertical: verticalScale(5),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Inicio',
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

      <Tab.Screen
        name="Transaction"
        component={Transaction}
        options={{
          tabBarIcon: () => (
            <ListChecks
              strokeWidth={3}
              color={MStyles.colors.blackColor}
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function Main(): React.JSX.Element {
  return (
    <ActiveIndicatorProvider>
      <AuthProfileProvider>
        <NavigationContainer theme={MyTheme}>
          <App />
        </NavigationContainer>
        <FlashMessage accessible={true} position="top" />
      </AuthProfileProvider>
    </ActiveIndicatorProvider>
  );
}

function App(): React.JSX.Element {
  const useAuth = useAuthProfileContext();
  const activeIndicator = useActiveIndicator();

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}>
      <BottomSheetProvider>
        {activeIndicator.isActive() ? <ActivityIndicator /> : <></>}

        <Stack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Group>
            {useAuth.isLogged() ? (
              <>
                <Stack.Screen name="Main" component={LoggedArea} />
                <Stack.Screen
                  options={{
                    animation: 'slide_from_bottom',
                  }}
                  name="CreateAccountForm"
                  component={CreateAccountForm}
                />
              </>
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
              headerShown: false,
            }}>
            <Stack.Screen
              options={{
                headerShown: false,
                headerShadowVisible: false,
              }}
              name="InputSelectModal"
              component={InputSelectModal}
            />
          </Stack.Group>
        </Stack.Navigator>

        <ModalSheet />
      </BottomSheetProvider>
    </GestureHandlerRootView>
  );
}
