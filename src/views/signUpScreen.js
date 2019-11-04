import React from "react";
import {View, Text, Button} from "react-native";
import {Container} from "native-base";
import {  Navigate } from '../utils/navigator';
import {  RoundedButton, RoundedInput } from '../components/formElements';
import ViewWrap  from '../components/viewWrap';

//import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form';
//import moment from 'moment';

class SignUpScreen extends React.PureComponent {

    render() {
        let {navigation} = this.props;
        return (
            <ViewWrap>
            <Container style={{felx: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{ alignSelf: 'flex-start', fontSize: 16, fontWeight: '400', marginBottom: '20%'}}>  Sign Up </Text> 
                <RoundedInput placeholderText='Име и Презиме'
                            isBorder='true'
                            isShadowComponent='true' />  
                <RoundedInput placeholderText='Email'
                            isBorder='true'
                            isShadowComponent='true' />  
                <RoundedInput placeholderText='Потврди Email'
                            isBorder='true'
                            isShadowComponent='true' />  
                <RoundedInput placeholderText='Корисничко име'
                            isBorder='true'
                            isShadowComponent='true' />
                <RoundedInput placeholderText='Главна Локација'
                            isBorder='true'
                            isPasswordField={true} />
                <RoundedInput placeholderText='Лозинка'
                            isBorder='true'
                            isPasswordField={true} />
                <RoundedInput placeholderText='Потврди лозинка'
                            isBorder='true'
                            isPasswordField={true} />  
                <Text> Избери слика:  |Browse|</Text>
                <Button 
                      title="Потврди"
                      onPress ={() => { Navigate("LoginScreen") } }/>
            </Container>
            </ViewWrap>
        );
     
    }
}

export default SignUpScreen;