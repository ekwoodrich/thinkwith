import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation, SafeAreaView } from 'react-navigation';
import { FAB } from 'react-native-paper';
import MainNavbar from '../../components/home/MainNavbar';
import NoteFeed from '../../components/home/NoteFeed';

class ViewScreen extends Component {
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

export default withNavigation(ViewScreen);
