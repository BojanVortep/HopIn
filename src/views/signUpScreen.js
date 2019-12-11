import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import {Container} from "native-base";
import {  Navigate } from '../utils/navigator';
import {  RoundedButton, RoundedInput } from '../components/formElements';
import ViewWrap  from '../components/viewWrap';

import * as firebase from "firebase";

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
            <View style={styles.container}>
                 <Image resizeMode='center'
              style={{
                width: 150,
                height: 150,
                alignSelf: "center",
                marginTop: 20
              }}
              source={require('../resurces/drivee.png')} />
                <Text style={styles.greeting}>{`Здраво!\nРегистрирај се овде.`}</Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Корисничко Име</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={name => this.setState({ name })}
                            value={this.state.name}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Е-маил Адреса</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Лозинка</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#5799a6",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});








/* 
class SignUpScreen extends React.PureComponent {

    render() {
        let {navigation} = this.props;
        return (
            <ViewWrap>
            <Container style={{felx: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{ alignSelf: 'flex-start', fontSize: 16, fontWeight: '400', marginBottom: '20%'}}>  Sign Up </Text> 
                <RoundedInput placeholderText='Име и Презиме'
                            isBorder='true'
                            isShadowComponent='true' />  
                <RoundedInput placeholderText='Email'
                            isBorder='true'
                            isShadowComponent='true' />  
                <RoundedInput placeholderText='Потврди Email'
                            isBorder='true'
                            isShadowComponent='true' />  
                <RoundedInput placeholderText='Корисничко име'
                            isBorder='true'
                            isShadowComponent='true' />
                <RoundedInput placeholderText='Главна Локација'
                            isBorder='true'
                            isPasswordField={true} />
                <RoundedInput placeholderText='Лозинка'
                            isBorder='true'
                            isPasswordField={true} />
                <RoundedInput placeholderText='Потврди лозинка'
                            isBorder='true'
                            isPasswordField={true} />  
                <Text> Избери слика:  |Browse|</Text>
                <Button 
                      title="Потврди"
                      onPress ={() => { Navigate("LoginScreen") } }/>
            </Container>
            </ViewWrap>
        );
     
    }
}

export default SignUpScreen; */