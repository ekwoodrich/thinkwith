import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button, TextInput, Subheading, Divider } from 'react-native-paper';

export default class SignInApple extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.apple}>
            <Button mode="contained" color="black" onPress={()=>{console.log("sign in with apple")}}>
                Sign in with Apple
            </Button>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    divider: {
        color: "black",
        marginTop: 15,
        marginBottom: 15
    },
    login: {
        marginTop: 15
    },
    google: {

    },
    label: {
        color: "black"
    },
    signInGoogle: {
    },
    logo: {
        alignItems: "center",
        justifyContent: "center"
    },
    logoImage: {

    },
    googleButton : {
        width:28,
        height:28,
        padding:0
    }
});