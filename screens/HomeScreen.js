import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { createDrawerNavigator } from 'react-navigation-drawer';

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home'
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Button
          mode="contained"
          color="#ed6b18"
          onPress={() => {
            this.props.navigation.navigate('Finger');
          }}
        >
          Fingerprint
        </Button>
        <Button
          mode="contained"
          color="#ed6b18"
          onPress={() => {
            this.props.navigation.navigate('Profile');
          }}
        >
          Profile
        </Button>
        <Button
          mode="contained"
          color="#ed6b18"
          onPress={() => {
            this.props.navigation.navigate('NewPost');
          }}
        >
          New Post
        </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  appbar: {
    color: 'white'
  }
});
const HomeDrawer = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default withNavigation(HomeScreen);
