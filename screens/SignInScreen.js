import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button, TextInput, Subheading, Divider } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import SignInForm from "../components/SignInForm";

class SignInScreen extends React.Component {


    _signInWithEmail = () => {
        console.log("email sign in");
    }
    _signInWithGoogle = () => {
        console.log("google sign in");
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image style={styles.logoImage} source={require('../assets/img/thinkwith_icon.png')} />
                </View>
                <SignInForm />

                <Divider style={styles.divider} inset={true} />

                <View style={styles.google}>
                    <Button mode="outlined" color="#ed6b18" onPress={this._signInWithGoogle}>
                        Sign in with Google
                    </Button>
                </View>
            </View>
        );
    }
}

export default SignInScreen;


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30
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
        marginTop: 5,
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

    }
});