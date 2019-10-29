import React from "react";
import {View, Text} from "react-native";
import {Container} from "native-base";

class Home extends React.Component {

  /*   componentDidMount() {
        this.props.setName();
    }
 */
    render() {
        return (
            <Container style={{felx: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text> Hello this. props. name </Text>
            </Container>
        );
     
    }
}

export default Home;