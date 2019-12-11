import React from "react";
import {View, Text, Button, TouchableOpacity, StyleSheet} from "react-native";
import {Container, Icon} from "native-base";
import {  Navigate } from '../utils/navigator';
import {  RoundedButton, RoundedInput } from '../components/formElements';

import {DetailsScreenStyles}  from '../styles/detailsScreenStyles';
import ViewWrap  from '../components/viewWrap';

import * as firebase from "firebase";


class Home extends React.Component {

    constructor(props){
        super(props);
    }

    state = {
        email: "",
        displayName: ""
    };

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    };

    render() {
        return (
          <ViewWrap>
            <Container style={{felx: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text> Hello {this.state.displayName}! </Text>
                <View style= {{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                <RoundedButton style={{ backgroundColor: '#5799a6' }}
                buttonText='Патник'
                onSubmit={() => { Navigate("Passangers") }}
              /> 
              <RoundedButton style={{ backgroundColor: '#5777a6'}}
                buttonText='Возач'
                isSmall='false'
                onSubmit={() => { Navigate("Driver") }}/>
                </View>
                {/* <TouchableOpacity style={styles.button} onPress={this.signOutUser}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Регистрирај се</Text>
                </TouchableOpacity> */}

                <TouchableOpacity style={{ marginTop: 32 }} onPress={this.signOutUser}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </Container>
            </ViewWrap>
        );
     
    }
}
/* const styles = StyleSheet.create({
button: {
    marginHorizontal: 30,
    backgroundColor: "#5799a6",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center"
}
}); */
export default Home;