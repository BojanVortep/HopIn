import React from "react";
import {View, Text, Button} from "react-native";
import {Container, Icon} from "native-base";
import {DetailsScreenStyles}  from '../styles/detailsScreenStyles';
import ViewWrap  from '../components/viewWrap';
import {  RoundedButton, RoundedInput } from '../components/formElements';
import {  Navigate } from '../utils/navigator';


class Passangers extends React.Component {

  /*   componentDidMount() {
        this.props.setName();
    }
 */
    render() {
        let {navigation} = this.props;
        return (
          <ViewWrap>
            <View style={{felx: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text> Hello this is the passenger screen </Text>
                <View style={[DetailsScreenStyles.detailsContainer]}>
                <View style={[DetailsScreenStyles.viewLabelsWrap]}>
                  <Text style={[DetailsScreenStyles.listLabel]}>  Име:</Text>
                  <Text style={[DetailsScreenStyles.listLabel]}> Рута:</Text>
                  <Text style={[DetailsScreenStyles.listLabel]}> Датум :</Text>
                  <Text style={[DetailsScreenStyles.listLabel]}>  Време: </Text>
                  <Text style={[DetailsScreenStyles.listLabel]}>  Контакт: </Text>
                  <Text style={[DetailsScreenStyles.listLabel]}>  Слободни места: </Text>


                </View>
                <View style={[DetailsScreenStyles.viewResultsWrap]}>
                  <Text style={[DetailsScreenStyles.listData]}> Бојан Петров </Text>
                  <Text style={[DetailsScreenStyles.listData]}> Штип - Скопје </Text>
                  <Text style={[DetailsScreenStyles.listData]}> 31.10.2019 (Четврток) </Text>
                  <Text style={[DetailsScreenStyles.listData]}> 07:15 </Text>
                  <Text style={[DetailsScreenStyles.listData]}> Моб: 077 832 864 </Text>
                  <Text style={[DetailsScreenStyles.listData]}> Х Х Х 0 0 </Text>
                </View>
              </View>
              <View style = {{ flex:1 , flexDirection: 'row', alignContent: 'stretch'}}>
              <RoundedButton style={{ backgroundColor: '#5799a6'}}
                buttonText='Нова Објава'
                isSmall='false'
                onSubmit={() =>  { Navigate("Form") }}/>
                      <RoundedButton style={{ backgroundColor: '#5777a6'}}
                buttonText='Назад'
                isSmall='false'
                onSubmit={() => {navigation.goBack()  }}/>
                </View>
            </View>
            </ViewWrap>
        );
     
    }
}

export default Passangers;