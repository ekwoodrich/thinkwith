import React from 'react';
import { StatusBar } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AuthLoadingScreen from './screens/AuthLoadingScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import FingerScreen from './screens/FingerScreen';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import CreateAccountScreen from './screens/CreateAccountScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import NewPostScreen from './screens/NewPostScreen';

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen,
  NewPost: NewPostScreen
});
const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
  Finger: FingerScreen,
  CreateAccount: CreateAccountScreen,
  ForgotPassword: ForgotPasswordScreen
});

const App = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);

export default () => {
  console.disableYellowBox = true;

  return (
    <PaperProvider theme={theme}>
      <StatusBar />
      <App />
    </PaperProvider>
  );
};
const theme = {
  ...DefaultTheme,
  roundness: 2,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f'
  }
};
