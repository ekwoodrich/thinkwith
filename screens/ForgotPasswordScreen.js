import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button, TextInput, Subheading, Divider } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import SignInCreateForm from '../components/SignInCreateForm';
import SignInGoogle from '../components/SignInGoogle';
import SignInApple from '../components/SignInApple';
import SignInAnon from '../components/SignInAnon';
import SignInCreate from '../components/SignInCreate';
import SignInForgot from '../components/SignInForgot';

class ForgotPasswordScreen extends React.Component {
  state = {
    email: ''
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            style={styles.logoImage}
            source={require('../assets/img/thinkwith_icon.png')}
          />
        </View>
        <View>
          <Text style={styles.forgotPrompt}>Forgot your password?</Text>
          <Text style={styles.forgotBlurb}>We've all been there.</Text>
          <Text style={styles.forgotBlurb}>
            Just enter your email address and we'll help you get a new one right
            away.
          </Text>
          <TextInput
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            autoCapitalize="none"
          />
          <SignInForgot />
        </View>
      </View>
    );
  }
}

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    flex: 1
  },
  forgotBlurb: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10
  },
  forgotPrompt: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImage: {},
  googleButton: {
    width: 28,
    height: 28,
    padding: 0
  }
});
