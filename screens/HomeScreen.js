import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import ProfileScreen from './ProfileScreen';

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
        <Appbar style={styles.bottom}>
          <Appbar.Action
            icon="archive"
            onPress={() => this.props.navigation.openDrawer()}
          />
          <Appbar.Action
            icon="mail"
            onPress={() => console.log('Pressed mail')}
          />
          <Appbar.Action
            icon="label"
            onPress={() => console.log('Pressed label')}
          />
          <Appbar.Action
            icon="delete"
            onPress={() => console.log('Pressed delete')}
          />
        </Appbar>

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

export default withNavigation(HomeScreen);
