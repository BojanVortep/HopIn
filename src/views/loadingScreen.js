import React from "react";
import {View, Text, Button, ActivityIndicator} from "react-native";
import {Container, Icon} from "native-base";

import * as firebase from 'firebase';

import {  Navigate } from '../utils/navigator';
//import {  RoundedButton, RoundedInput } from '../components/formElements';

//import {DetailsScreenStyles}  from '../styles/detailsScreenStyles';
import ViewWrap  from '../components/viewWrap';

class LoadingScreen extends React.Component {
    componentDidMount () {
        firebase.auth().onAuthStateChanged(user => {
            Navigate(user ? "Main" : "Auth") 
        })
    }

    render() {
        return (
          <ViewWrap>
            <Container style={{felx: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text> Loading... </Text>
                <ActivityIndicator size="large"></ActivityIndicator>
            </Container>
            </ViewWrap>
        );
     
    }
}

export default LoadingScreen;