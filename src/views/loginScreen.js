import React from 'react';
import { ImageBackground, Image, StyleSheet, View, Text, TextInput, Button} from 'react-native';
import { LoginScreenStyle } from '../styles/loginScreenStyles';
import LinearGradient from 'react-native-linear-gradient';
import {  RoundedButton, RoundedInput } from '../components/formElements';
import {  Navigate } from '../utils/navigator';

class LoginScreen extends React.PureComponent {
  constructor(props){
    super(props);
  }
  render () {
  return (
          <ImageBackground  style={LoginScreenStyle.imgBackground}
                            resizeMode='cover'
                            source={require('../resurces/guy.jpg')}>
            <LinearGradient colors={['rgba(192,192,170,0.85)', 'rgba(28,239,255,0.95)']}
                            style={LoginScreenStyle.linearGradient}>
              <View style={LoginScreenStyle.container}>
              <Image resizeMode='center'
              style={{
                width: 150,
                height: 150,
              }}
              source={require('../resurces/Logo.png')} />
                <RoundedInput placeholderText='Username'
                isBorder='true'
                isShadowComponent='true' />  
                <RoundedInput placeholderText='Password'
                isBorder='true'
                isPasswordField={true} />
                <RoundedButton style={{ backgroundColor: '#5799a6' }}
                buttonText='Најави се'
                onSubmit={() => { Navigate("Home") }}
              /> 
              <RoundedButton style={{ backgroundColor: '#5777a6', marginTop: '2%'}}
                buttonText='Регистрирај се'
                isSmall='false'
                onSubmit={() => { Navigate("SignUpScreen") }}
              />          
              </View>
            </LinearGradient>
          </ImageBackground>
    )
  }
}

export default LoginScreen;
