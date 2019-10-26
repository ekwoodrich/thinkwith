import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button, TextInput, Subheading, Divider } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import SignInForm from "../components/SignInForm";
import SignInGoogle from '../components/SignInGoogle';
import SignInApple from '../components/SignInApple';
import SignInAnon from '../components/SignInAnon';

class SignInScreen extends React.Component {


    _signInWithEmail = () => {
        console.log("email sign in");
    }
    _signInWithGoogle = () => {
        console.log("google sign in");
    }
    _signInWithApple = () => {
        console.log("apple sign in");
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image style={styles.logoImage} source={require('../assets/img/thinkwith_icon.png')} />
                </View>
                <SignInForm />

                <View style={styles.or}>
                    <Text>
                        or
                    </Text>
                </View>
                <View style={styles.social}>
                <SignInGoogle/>
                <SignInApple/>
                <SignInAnon/>
                </View>
            </View>
        );
    }
}

export default SignInScreen;


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

    social: {
        marginLeft: 30,
        marginRight: 30,

    },
    or: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10
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