import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Avatar, Divider, Button } from 'react-native-paper';
import SettingsForm from '../components/SettingsForm';
import MainNavbar from '../components/MainNavbar';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes
} from '@react-native-community/google-signin';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _logoutUser = () => {
    const nav = this.props.navigation;
    auth()
      .signOut()
      .then(function() {
        GoogleSignin.revokeAccess().then(function() {
          nav.navigate('SignIn');
        });
      });
  };
  render() {
    return (
      <SafeAreaView>
        <MainNavbar current="profile" />

        <View style={styles.container}>
          <Avatar.Icon style={styles.avatar} size={180} icon="account" />
          <Text style={styles.email}>walterbship@gmail.com</Text>
          <Divider />

          <Button
            mode="contained"
            color="black"
            style={styles.button}
            onPress={this._logoutUser}
          >
            Log Out
          </Button>
          <SettingsForm />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  avatar: {
    marginTop: 20
  },
  button: {
    width: 400,
    height: 36
  },
  email: {
    fontSize: 20,
    marginTop: 10
  }
});
