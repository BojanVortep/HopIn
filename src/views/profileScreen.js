import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as firebase from "firebase";



export default class ProfileScreen extends React.Component {

    signOutUser = () => {
        firebase.auth().signOut();
    };
    

    render() {
        return (
            <View style={styles.container}>
                <Text>Profile Screen</Text>
                <TouchableOpacity style={styles.button} onPress={this.signOutUser}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Одјави се</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        marginHorizontal: 20,
        backgroundColor: "#5799a6",
        borderRadius: 10,
        height: 40,
        width: "50%",
        alignItems: "center",
        justifyContent: "center"
    },
});