import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text, Image, Alert } from 'react-native';
import { Button, TextInput, Subheading, Divider } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import auth from '@react-native-firebase/auth';

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidUpdate() {
    if (auth().currentUser) {
      this.props.navigation.navigate('Home');
    }
  }
  _signInEmail = () => {
    try {
      auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(res => {
          console.log(res.user.email);
        });
    } catch (error) {
      Alert.alert('error', error.toString(error));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          label="Email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          autoCapitalize="none"
        />
        <TextInput
          label="Password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          secureTextEntry={true}
        />
        <View style={styles.login}>
          <Button
            contentStyle={styles.emailButton}
            mode="contained"
            color="#ed6b18"
            onPress={this._signInEmail}
          >
            Sign in
          </Button>
        </View>
      </View>
    );
  }
}

export default withNavigation(SignInForm);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginLeft: 30,
    marginRight: 30
  },
  divider: {
    color: 'black',
    marginTop: 15,
    marginBottom: 15
  },
  login: {
    marginTop: 15
  },
  google: {
    marginTop: 5
  },
  label: {
    color: 'black'
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImage: {},
  emailButton: {
    height: 48
  }
});
