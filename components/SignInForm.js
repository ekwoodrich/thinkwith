import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text, Image, Alert } from 'react-native';
import { Button, TextInput, Subheading, Divider } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { withNavigation } from "react-navigation";

class SignInForm extends Component {

    state = {
        email: '',
        password: ''
    };
    
    componentDidUpdate(prevProps) {
        const { error, logged } = this.props;

        if (!prevProps.error && error) Alert.alert('error', error);

        if (logged) {
            this.props.navigation.navigate('Profile');
        }
    };

    _signInEmail = () => {
        this.props.navigation.navigate('Home');
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

                    <Button  contentStyle={styles.emailButton} mode="contained" color="#ed6b18" onPress={this._signInEmail}>
                        Sign in
                    </Button>
                </View>
            </View>
        )
    }
}

export default withNavigation(SignInForm);

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginLeft: 30,
        marginRight: 30
    },
    divider: {
        color: "black",
        marginTop: 15,
        marginBottom: 15
    },
    login: {
        marginTop: 15,
    },
    google: {
        marginTop: 5,
    },
    label: {
        color: "black"
    },
    logo: {
        alignItems: "center",
        justifyContent: "center"
    },
    logoImage: {

    },
    emailButton: {
        height:48
    
    }
});