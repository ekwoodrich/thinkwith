import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation, SafeAreaView } from 'react-navigation';
import { FAB } from 'react-native-paper';
import MainNavbar from '../components/MainNavbar';
import NoteFeed from '../components/NoteFeed';

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
        <FAB
          style={styles.fab}
          icon="plus"
          color="#ed6b18"
          onPress={() => {
            this.props.navigation.navigate('NewPost');
          }}
          theme={{ colors: { accent: 'white' } }}
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
