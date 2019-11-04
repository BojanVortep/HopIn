import React from "react";
import {View, Text, Button} from "react-native";
import {Container, Icon} from "native-base";
import {  Navigate } from '../utils/navigator';
import {DetailsScreenStyles}  from '../styles/detailsScreenStyles';
import Driver from '../views/driverTab';
import Passangers from '../views/passangersScreen'

class MainScreen extends React.Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <View>
                <Driver/>
                <Passangers/>
            </View>
            /* <Container style={{felx: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text> Hello this. props. name </Text>
               
            </Container> */
        );
     
    }
}

export default MainScreen;