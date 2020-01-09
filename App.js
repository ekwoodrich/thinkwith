import React from 'react';
import { StatusBar } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import AuthLoadingScreen from './screens/auth/AuthLoadingScreen';
import ProfileScreen from './screens/profile/ProfileScreen';
import HomeScreen from './screens/home/HomeScreen';
import TasksScreen from './screens/home/TasksScreen';
import GoalsScreen from './screens/home/GoalsScreen';

import CreateAccountScreen from './screens/auth/CreateAccountScreen';
import ForgotPasswordScreen from './screens/auth/ForgotPasswordScreen';
import SignInScreen from './screens/auth/SignInScreen';
import FingerScreen from './screens/auth/FingerScreen';

import NewPostScreen from './screens/new/NewPostScreen';
import CalendarScreen from './screens/home/CalendarScreen';
import NotesScreen from './screens/home/NotesScreen';

const NoteStack = createStackNavigator({
  Home: HomeScreen,
  NewPost: NewPostScreen
});
const AppDrawer = createDrawerNavigator({
  Home: NoteStack,
  Calendar: CalendarScreen,
  Notes: NotesScreen,
  Tasks: TasksScreen,
  Medications: TasksScreen,
  Profile: ProfileScreen
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
      App: AppDrawer,
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
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f'
  }
};
