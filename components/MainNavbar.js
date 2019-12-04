import React from 'react';
import { Appbar } from 'react-native-paper';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Searchbar } from 'react-native-paper';

const styles = StyleSheet.create({
  appbar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    color: 'white',
    backgroundColor: 'transparent'
  },
  search: {
    width: '60%',
    backgroundColor: 'transparent',
    fontSize: 22
  }
});
const MainNavbar = ({ navigation, current }) => {
  return (
    <Appbar style={styles.appbar}>
      <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
      <TextInput style={styles.search} placeholder="Search notes" />

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
