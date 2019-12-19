import React from "react";
import {View, Text, Button, ActivityIndicator} from "react-native";
import {Container} from "native-base";

import firebase from "firebase";
import Fire from "../utils/fire";

import {  Navigate } from '../utils/navigator';
import ViewWrap  from '../components/viewWrap';

class LoadingScreen extends React.Component {
    componentDidMount() {
        if (Fire.shared.uid) {
            Navigate("Main");
        } else {
            firebase.auth().onAuthStateChanged(user => {
                Navigate(user ? "Main" : "Auth") 
            });
        }
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