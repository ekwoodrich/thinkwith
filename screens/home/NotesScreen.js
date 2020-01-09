import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation, SafeAreaView } from 'react-navigation';
import MainNavbar from '../../components/home/MainNavbar';
import NoteFeed from '../../components/home/NoteFeed';
import ThinkFab from '../../components/home/ThinkFab';

class NotesScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Notes',
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.homeContainer}>
        <MainNavbar screen="notes" />
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

export default withNavigation(NotesScreen);
