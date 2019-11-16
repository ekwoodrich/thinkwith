import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-paper';
class HomeScreen extends Component {
  static navigationOptions = {
    header: null
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

export default withNavigation(HomeScreen);
