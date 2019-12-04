import React from 'react';
import { Appbar } from 'react-native-paper';
import { View, Text, StyleSheet, Image } from 'react-native';
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
  appbar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    color: 'white'
  }
});
const MainNavbar = ({ navigation, current }) => {
  return (
    <Appbar style={styles.appbar}>
      <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
      {!current && (
        <Appbar.Action
          icon="account"
          onPress={() => navigation.navigate('Profile')}
        />
      )}
      {current == 'profile' && (
        <Appbar.Action
          icon="home"
          onPress={() => navigation.navigate('Home')}
        />
      )}
    </Appbar>
  );
};

export default withNavigation(MainNavbar);
