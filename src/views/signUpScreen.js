import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import {Container, Icon} from "native-base";
import {  Navigate } from '../utils/navigator';
import {  SignUpScreenStyle } from '../styles/signUpScreenStyles';

import * as firebase from "firebase";

//import Fire from '../utils/fire'


export default class SignUpScreen extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    };

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                });
            })
            .catch(error => this.setState({ errorMessage: error.message }));
    };

    render() {
        return (
            <View style={SignUpScreenStyle.container}>
                 <Image resizeMode='center'
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                //marginTop: 20
              }}
              source={require('../resurces/drivee.png')} />
              <View style={{  alignItems: "center", width: "100%" }}>
                    <Text style={SignUpScreenStyle.greeting}>{'Здраво!\nРегистрирај се овде'}</Text>
                    <TouchableOpacity style={SignUpScreenStyle.avatar}>
                        <Icon
                            name="ios-add"
                            size={40}
                            color="#FFF"
                        ></Icon>
                    </TouchableOpacity>
                </View>

                <View style={SignUpScreenStyle.errorMessage}>
                    {this.state.errorMessage && <Text style={SignUpScreenStyle.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={SignUpScreenStyle.form}>
                    <View>
                        <Text style={SignUpScreenStyle.inputTitle}>Корисничко Име</Text>
                        <TextInput
                            style={SignUpScreenStyle.input}
                            autoCapitalize="none"
                            onChangeText={name => this.setState({ name })}
                            value={this.state.name}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={SignUpScreenStyle.inputTitle}>Е-маил Адреса</Text>
                        <TextInput
                            style={SignUpScreenStyle.input}
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={SignUpScreenStyle.inputTitle}>Лозинка</Text>
                        <TextInput
                            style={SignUpScreenStyle.input}
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={SignUpScreenStyle.button} onPress={this.handleSignUp}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Регистрирај се</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }} 
                                    onPress={() => { Navigate("Login") }}>
                    <Text style={{ color: "#414959", fontSize: 13 }}>
                        Веќе имаш кориснички профил? <Text style={{ fontWeight: "500", color: "#5799a6" }}>Најави се</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
