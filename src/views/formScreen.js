import React from "react";
import {View, Text, Button} from "react-native";
import {Container, Icon, Picker} from "native-base";
import {  Navigate } from '../utils/navigator';
import {  RoundedButton, RoundedInput } from '../components/formElements';

import {FormStyles}  from '../styles/formStyles';
import ViewWrap  from '../components/viewWrap';
import DatePicker from 'react-native-datepicker';

class Form extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            fromWhere: 'izberi'
        },
        this.state = {
            toWhere: 'izberi'
        },
        this.state = {
            timeWhen: 'izberi'
        },
        this.state = {date:"2016-05-15"}
    }
    
    render() {
        return (
          <ViewWrap>
              <View style={FormStyles.filterContainer}>
                  <View style = {{flexDirection: 'row'}}>
                      <Text style = {{marginTop:10, marginRight: 10}}>From:</Text>
                <View style={FormStyles.pickerContainer}>
              <Picker
                selectedValue={this.state.fromWhere}
                style={{height: 50, width: 240}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({fromWhere: itemValue})
                }>
                <Picker.Item label="Skopje" value="sk" />
                <Picker.Item label="Shtip" value="st" />
                <Picker.Item label="Veles" value="ve" />
                <Picker.Item label="Kocani" value="ko" />
                <Picker.Item label="Strumica" value="sr" />
                <Picker.Item label="Ohrid" value="oh" />
                <Picker.Item label="Kumanovo" value="ku" />
                <Picker.Item label="Kavadarci" value="ka" />
            </Picker>
            </View>
            </View>
            <View style = {{flexDirection: 'row'}}>
                      <Text style = {{marginTop:10, marginRight: 25}}>To:</Text>
                <View style={FormStyles.pickerContainer}>
              <Picker
                selectedValue={this.state.toWhere}
                style={{height: 50, width: 240}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({toWhere: itemValue})
                }>
                <Picker.Item label="Skopje" value="sk" />
                <Picker.Item label="Shtip" value="st" />
                <Picker.Item label="Veles" value="ve" />
                <Picker.Item label="Kocani" value="ko" />
                <Picker.Item label="Strumica" value="sr" />
                <Picker.Item label="Ohrid" value="oh" />
                <Picker.Item label="Kumanovo" value="ku" />
                <Picker.Item label="Kavadarci" value="ka" />
            </Picker>
            </View>
            </View>
            <View style = {{flexDirection: 'row'}}>
                      <Text style = {{marginTop:10, marginRight: 10}}>Date:</Text>
                <View style={FormStyles.pickerContainer}>
                <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2019-05-01"
        maxDate="2022-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
              height: 25,
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
            </View>
            </View>
            <View style = {{flexDirection: 'row'}}>
                      <Text style = {{marginTop:10, marginRight: 10}}>Time:</Text>
                <View style={FormStyles.pickerContainer}>
              <Picker
                selectedValue={this.state.timeWhen}
                style={{height: 50, width: 240}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({timeWhen: itemValue})
                }>
                <Picker.Item label="00:00" value="00" />
                <Picker.Item label="01:00" value="1" />
                <Picker.Item label="02:00" value="2" />
                <Picker.Item label="03:00" value="3" />
                <Picker.Item label="04:00" value="4" />
                <Picker.Item label="05:00" value="5" />
                <Picker.Item label="06:00" value="6" />
                <Picker.Item label="07:00" value="7" />
            </Picker>
            </View>
            </View>
            </View>
            
            <Container style={{felx: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text> Hello this. props. name </Text>
                <View style= {{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                <RoundedButton style={{ backgroundColor: '#5799a6', marginRight: 10 }}
                buttonText='Објави'
                onSubmit={() => { Navigate("Passangers") }}
              /> 
              <RoundedButton style={{ backgroundColor: '#5777a6', marginLeft: 10}}
                buttonText='Избриши'
                isSmall='false'
                onSubmit={() => { Navigate("Driver") }}/>
                </View>
                

            </Container>
            </ViewWrap>
        );
     
    }
}

export default Form;