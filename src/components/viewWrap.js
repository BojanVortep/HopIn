import React from 'react';
import { Image, View  } from 'react-native';
import { Container, Header, Title, Button, Left, Text,  Right, Body} from 'native-base';
import {  Navigate } from '../utils/navigator';
import navigation from 'react-navigation'
//import { Scale, MinimumScale } from '../../utils/scales';
import {ViewStyle } from '../styles/viewStyle';

class ViewWrap extends React.PureComponent {
  constructor(props){
    super(props);
  }
    render() {
      return (
        <Container>
        <Header style={{ backgroundColor: ViewStyle.header.backgroundColor, 
                         height:(ViewStyle.header.height) }}
          androidStatusBarColor={ViewStyle.header.backgroundColor}>
          <Left>
            <Text style = {{fontSize: 18, fontStyle: 'italic', fontWeight: 'bold', color: 'white'}}>Hop In</Text>
          </Left>
          <Body>
            <Title></Title>
          </Body>
          <Right>
            <View>
            <Image style={[ViewStyle.imageIconStyle, 
                               {width:(ViewStyle.imageIconStyle.width) }, 
                               {height: (ViewStyle.imageIconStyle.height) } 
                              ]} 
                        source={require('../resurces/Logo.png')} />
            </View>
          </Right>
        </Header>
        <View style ={ViewStyle.containerStyle} {...this.props}>
          {this.props.children}
        </View>
      </Container>
      );
    }
}

export default ViewWrap;