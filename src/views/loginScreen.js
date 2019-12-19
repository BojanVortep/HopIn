import { LoginScreenStyle } from '../styles/loginScreenStyles';
//import {  RoundedButton, RoundedInput } from '../components/formElements';
import {  Navigate } from '../utils/navigator';

//////////////////////////////////

import React from "react";
import { Image, View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as firebase from "firebase";

//import Fire from '../utils/fire'

export default class LoginScreen extends React.Component {
  state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({ errorMessage: error.message }));
    };

    render() {
        return (
            <View style={LoginScreenStyle.container}>
                <Image resizeMode='center'
              style={{
                width: 150,
                height: 150,
                alignSelf: "center",
                marginTop: 20
              }}
              source={require('../resurces/Logo.png')} />
                <Text style={LoginScreenStyle.greeting}>{'Здраво.\nДобредојдове назад.'}</Text>

                <View style={LoginScreenStyle.errorMessage}>
                    {this.state.errorMessage && <Text style={LoginScreenStyle.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={LoginScreenStyle.form}>
                    <View>
                        <Text style={LoginScreenStyle.inputTitle}>Е-маил Адреса</Text>
                        <TextInput
                            style={LoginScreenStyle.input}
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={LoginScreenStyle.inputTitle}>Лозинка</Text>
                        <TextInput
                            style={LoginScreenStyle.input}
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={LoginScreenStyle.button} onPress={this.handleLogin}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Најави се</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ alignSelf: "center", marginTop: 32 }}
                    onPress={() => { Navigate("SignUp") }}
                >
                    <Text style={{ color: "#414959", fontSize: 13 }}>
                        Дали за прв пат ја користиш HopIn? <Text style={{ fontWeight: "500", color: "#5799a6" }}>Регистрирај се</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
