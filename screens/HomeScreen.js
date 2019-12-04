import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-paper';
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
      <View>
        <MainNavbar />

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

export default withNavigation(HomeScreen);
