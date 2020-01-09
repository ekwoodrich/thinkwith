import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation, SafeAreaView } from 'react-navigation';
import MainNavbar from '../../components/home/MainNavbar';
import NoteFeed from '../../components/home/NoteFeed';
import ThinkFab from '../../components/home/ThinkFab';

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
        <NoteFeed />
        <ThinkFab />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  appbar: {
    color: 'white'
  },
  homeContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  }
});

export default withNavigation(HomeScreen);
