import React from "react";
import {View, Text, Button, } from "react-native";
import {Container, Icon} from "native-base";
import {DetailsScreenStyles}  from '../styles/detailsScreenStyles';
import ViewWrap  from '../components/viewWrap';


class Driver extends React.Component {

  constructor(props) {
    super(props);
  }
    render() {
        let {navigation} = this.props;
        return (
          <ViewWrap {...this.props} >
            <View style={{felx: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text> Hello this is the driver screen </Text>
                 <View style={[DetailsScreenStyles.detailsContainer]}>
                <View style={[DetailsScreenStyles.viewLabelsWrap]}>
                  <Text style={[DetailsScreenStyles.listLabel]}><Icon type='Entypo' name="user" style={[DetailsScreenStyles.icon]} />  Име:</Text>
                  <Text style={[DetailsScreenStyles.listLabel]}><Icon type='Entypo' name="select-arrows" style={[DetailsScreenStyles.icon]} />  стартна локација :</Text>
                  <Text style={[DetailsScreenStyles.listLabel]}><Icon type='Entypo' name="price-tag" style={[DetailsScreenStyles.icon]} />  Крајна Дестинација :</Text>
                  <Text style={[DetailsScreenStyles.listLabel]}><Icon type='Entypo' name="location-pin" style={[DetailsScreenStyles.icon]} />  Време: </Text>
                </View>
                <View style={[DetailsScreenStyles.viewResultsWrap]}>
                  <Text style={[DetailsScreenStyles.listData]}> Бојан Петров </Text>
                  <Text style={[DetailsScreenStyles.listData]}> Штип </Text>
                  <Text style={[DetailsScreenStyles.listData]}> Скопје </Text>
                  <Text style={[DetailsScreenStyles.listData]}> 07:15 </Text>
                </View>
              </View>
                <Button 
                      title="Go Back"
                      onPress ={() => {navigation.goBack()  } }/>
            </View>
            </ViewWrap>
        );
     
    }
}

export default Driver;