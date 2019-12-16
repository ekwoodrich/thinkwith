import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';

import { StyleSheet } from 'react-native';

class FingerScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  _logoutUser = () => {
    const nav = this.props.navigation;
    auth()
      .signOut()
      .then(function() {
        GoogleSignin.revokeAccess().then(function() {
          nav.navigate('SignIn');
        });
      });
  };

  componentDidMount() {
    auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.navigation.navigate('SignIn');
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            style={styles.logoImage}
            source={require('../../assets/img/thinkwith_icon.png')}
          />
        </View>
        <View style={styles.logo}>
          <Icon name="fingerprint" size={120} color="#808080" />
        </View>
        <View style={styles.logo}>
          <Text>Touch fingerprint sensor to enter</Text>
        </View>
        <View style={styles.fingerLog}>
          <Button
            mode="outlined"
            compact={true}
            color="#ed6b18"
            onPress={() => {
              this.props.navigation.navigate('SignIn');
            }}
          >
            Enter PIN
          </Button>
          <Button
            mode="outlined"
            compact={true}
            color="#ed6b18"
            onPress={this._logoutUser}
          >
            Log Out
          </Button>
        </View>
      </View>
    );
  }
}

export default FingerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  divider: {
    color: 'black',
    marginTop: 15,
    marginBottom: 15
  },
  login: {
    marginTop: 15
  },
  google: {},
  label: {
    color: 'black'
  },
  signInGoogle: {},

  social: {
    marginLeft: 30,
    marginRight: 30
  },
  or: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  logo: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImage: {},
  googleButton: {
    width: 28,
    height: 28,
    padding: 0
  },
  fingerLog: {
    marginTop: 10,
    alignItems: 'center'
  }
});
