import React from "react";
import {View, Text, Button} from "react-native";
import {Container} from "native-base";
import {  Navigate } from '../utils/navigator';

class Home extends React.Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <Container style={{felx: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text> Hello this. props. name </Text>
                <Button 
                      title="Go to Passangers Page"
                      onPress ={() => { Navigate("PassangersScreen") }}/>
            </Container>
        );
     
    }
}

export default Home;