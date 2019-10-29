import React from 'react';
import { ImageBackground, Image, StyleSheet, View, Text, TextInput, Button} from 'react-native';
import { LoginScreenStyle } from '../styles/loginScreenStyles';
import LinearGradient from 'react-native-linear-gradient';

import {  Navigate } from '../utils/navigator';

class LoginScreen extends React.PureComponent {

  constructor(props){
    super(props);
  }
  render () {
  return (
          <ImageBackground style={LoginScreenStyle.imgBackground}
          resizeMode='cover'
          source={require('../resurces/guy.jpg')}>
            <LinearGradient colors={['rgba(192,192,170,0.85)', 'rgba(28,239,255,0.95)']}
          style={LoginScreenStyle.linearGradient}>
            <View style={LoginScreenStyle.container}>
              <Text style={LoginScreenStyle.text}>Login Page</Text>
              <TextInput 
                style={LoginScreenStyle.inputStyle}
                placeholder='Username'>
              </TextInput>
              <TextInput 
                style={LoginScreenStyle.inputStyle}
                placeholder='Password'
                secureTextEntry={true}>
              </TextInput>
              <Button 
                      title="Најави се"
                      onPress ={() => { Navigate("Home") } }/>
            </View>
            </LinearGradient>
          </ImageBackground>
   
    )
  }
}

export default LoginScreen;
