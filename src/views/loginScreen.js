import React from 'react';
import { ImageBackground, Image, StyleSheet, View, Text, TextInput, Button} from 'react-native';
import { LoginScreenStyle } from '../styles/loginScreenStyles';

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
            <View style={styles.container}>
              <Text style={styles.text}>Login Page</Text>
              <TextInput 
                style={styles.inputStyle}
                placeholder='Username'>
              </TextInput>
              <TextInput 
                style={styles.inputStyle}
                placeholder='Username'
                secureTextEntry={true}>
              </TextInput>
              <Text>dfgfdg</Text>
              <Button 
                      title="Go to Home Page"
                      onPress ={() => {
                                    //this.props.navigation.toggleDrawer();
                                    Navigate("Home")
                                }
                                }/>
            </View>
          </ImageBackground>
   
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent:'center',
    //backgroundColor: 'cyan'
   
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  inputStyle: {
    marginLeft: 18,
    marginRight: 18,
    marginBottom: 18,
    backgroundColor: 'white',
    borderRadius: 10,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#1f3659',
    height: 32,
    width: 250,
    alignSelf: 'center'

  },
  roundedInput: {
    textAlign: 'center',
    //height: 43
    color: 'blue'
},
});

export default LoginScreen;
