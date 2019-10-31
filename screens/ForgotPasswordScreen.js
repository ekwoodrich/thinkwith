import React from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { Button, TextInput, Subheading, Divider } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import SignInCreateForm from '../components/SignInCreateForm';
import SignInGoogle from '../components/SignInGoogle';
import SignInApple from '../components/SignInApple';
import SignInAnon from '../components/SignInAnon';
import SignInCreate from '../components/SignInCreate';
import SignInForgot from '../components/SignInForgot';
import { firebase } from '@react-native-firebase/auth';

class ForgotPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      passwordSent: false
    };
  }

  forgotPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(this.state.email)
      .then(() => {
        this.setState({ passwordSent: true });
      });
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
        {this.state.passwordSent && (
          <View>
            <Text style={styles.forgotPrompt}>Email sent!</Text>
            <Text style={styles.forgotBlurb}>
              We've sent you an email at {this.state.email} with instructions to
              reset your password.
            </Text>
            <Button
              contentStyle={styles.passwordButton}
              mode="outlined"
              color="#ed6b18"
              onPress={() => {
                this.props.navigation.navigate('SignIn');
              }}
            >
              Sign In
            </Button>
          </View>
        )}
        {!this.state.passwordSent && (
          <View>
            <Text style={styles.forgotPrompt}>Forgot your password?</Text>
            <Text style={styles.forgotBlurb}>We've all been there.</Text>
            <Text style={styles.forgotBlurb}>
              Just enter your email address and we'll help you get a new one
              right away.
            </Text>
            <TextInput
              label="Email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              autoCapitalize="none"
            />
            <SignInForgot forgotPassword={this.forgotPassword} />
          </View>
        )}
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
