import React from "react";
import {View, Text, Button} from "react-native";
import {Container, Icon} from "native-base";
import {  Navigate } from '../utils/navigator';
import {  RoundedButton, RoundedInput } from '../components/formElements';

import {DetailsScreenStyles}  from '../styles/detailsScreenStyles';
import ViewWrap  from '../components/viewWrap';

class Home extends React.Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
          <ViewWrap>
            <Container style={{felx: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text> Hello this. props. name </Text>
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

            </Container>
            </ViewWrap>
        );
     
    }
}

export default Home;