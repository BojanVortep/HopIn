import React from "react";
import {View, Text, Button} from "react-native";
import {Container} from "native-base";

class PassangersScreen extends React.Component {

  /*   componentDidMount() {
        this.props.setName();
    }
 */
    render() {
        let {navigation} = this.props;
        return (
            <Container style={{felx: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text> Hello this is the next screen </Text>
                <Button 
                      title="Go Back"
                      onPress ={() => {navigation.goBack()  } }/>
            </Container>
        );
     
    }
}

export default PassangersScreen;