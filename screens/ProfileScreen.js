import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Divider } from 'react-native-paper';
import SettingsForm from '../components/SettingsForm';
import MainNavbar from '../components/MainNavbar';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <MainNavbar current="profile" />
        <View style={styles.container}>
          <Avatar.Icon style={styles.avatar} size={180} icon="account" />
          <Text style={styles.email}>walterbship@gmail.com</Text>
          <Divider />
          <SettingsForm />
        </View>
      </View>
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
  email: {
    fontSize: 20,
    marginTop: 10
  }
});
