import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';

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
const MainNavbar = ({ navigation, screen }) => {
  return (
    <Appbar style={styles.appbar}>
      <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />

      {(!screen || screen === 'home') && (
        <TextInput style={styles.search} placeholder="Search" />
      )}

      {screen === 'notes' && (
        <TextInput style={styles.search} placeholder="Search notes" />
      )}
      {screen === 'tasks' && (
        <TextInput style={styles.search} placeholder="Search tasks" />
      )}
      {screen === 'goals' && (
        <TextInput style={styles.search} placeholder="Search tasks" />
      )}
      {screen === 'calendar' && (
        <TextInput style={styles.search} placeholder="Search" />
      )}
      {(!screen || screen !== 'profile') && (
        <Appbar.Action
          icon="account-circle"
          onPress={() => navigation.navigate('Profile')}
        />
      )}
    </Appbar>
  );
};

export default withNavigation(MainNavbar);
