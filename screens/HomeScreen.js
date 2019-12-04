import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { withNavigation, SafeAreaView } from 'react-navigation';
import { Button, FAB } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import ProfileScreen from './ProfileScreen';
import MainNavbar from '../components/MainNavbar';

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',

    header: null
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.homeContainer}>
        <MainNavbar />
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => {
            this.props.navigation.navigate('NewPost');
          }}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  appbar: {
    color: 'white'
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20
  },
  homeContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  }
});

export default withNavigation(HomeScreen);
