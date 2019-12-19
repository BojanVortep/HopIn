import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Image, Button } from "react-native";
import {Container, Icon, Picker} from "native-base";
//import {  Navigate } from '../utils/navigator';
//import {  RoundedButton, RoundedInput } from '../components/formElements';
import Fire from "../utils/fire";
import {FormStyles}  from '../styles/formStyles';
//import ViewWrap  from '../components/viewWrap';
import DatePicker from 'react-native-datepicker';
import {PostScreenStyles} from '../styles/postScreenStyles';

import NumericInput from 'react-native-numeric-input';
import {
    Constants,
    Permissions,
    ImagePicker
  } from 'react-native-unimodules';

const firebase = require("firebase");
require("firebase/firestore");

class PostScreen extends React.PureComponent {

    constructor(props){
        super(props);
    }

    state = {
        text: "",
        id: "3",
        name: "userName/displayName",
        timestamp: "",
        from: "Select",
        to: "Select",
        date: "Select",
        time: "Select",
        freeSpots: "Select",
        spotsNeeded: "Select",
        avatar: null
    };

    componentDidMount() {
        this.getPhotoPermission();
    }

    getPhotoPermission = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

            if (status != "granted") {
                alert("We need permission to use your camera roll if you'd like to incude a photo.");
            }
        }
    };

    handlePost = () => {
        Fire.shared
        /* .addPost({ text: this.state.text.trim(),
             localUri: this.state.avatar
            name: this.state.name
            from: this.state.from
            to: this.state.to
            date: this.state.date
            time: this.state.time
            freeSpots: this.state.freeSpots
            spotsNeeded: this.state.spotsNeeded
            }) */

            .addPost({ text: this.state.text.trim(), localUri: this.state.avatar })
            .then(ref => {

                /* this.setState({ text: "",
                                    avatar: null,
                                    name: "",
                                    from: "",
                                    to: "",
                                    date: "",
                                    time: "",
                                    freeSpots: "",
                                    spotsNeeded: "",
                                }); */

                this.setState({ text: "", avatar: null });
                this.props.navigation.goBack();
            })
            .catch(error => {
                alert(error); 
            });
    };

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3]
        });

        if (!result.cancelled) {
            this.setState({ avatar: result.uri });
        }        
        

    };

    render() {
        let {} = this.props;
        return (
            <SafeAreaView style={[PostScreenStyles.container]}>
                <View style={PostScreenStyles.header}>
                     <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                     <Text>Назад</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity onPress={this.handlePost}>
                        <Text style={{ fontWeight: "500" }}>Објави</Text>
                    </TouchableOpacity>
                </View>

                 <View style={PostScreenStyles.inputContainer}>
                    <Image source={require("../resurces/guy.png")} style={PostScreenStyles.avatar}></Image>
                    <TextInput
                        autoFocus={true}
                        multiline={true}
                        numberOfLines={4}
                        style={{ flex: 1 }}
                        placeholder="Want to share something?"
                        onChangeText={text => this.setState({ text })}
                        value={this.state.text}
                    ></TextInput>
                    <TouchableOpacity style={PostScreenStyles.photo}  onPress={this.pickImage}>
                    <Text> Slika </Text>
                </TouchableOpacity>
                </View>

                <View style={{ marginHorizontal: 32, marginTop: 32, height: 50 }}>
                    <Image source={{ uri: this.state.avatar }} style={{ width: "100%", height: "100%" }}></Image>
                </View> 
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
            <View style = {{flexDirection: 'row'}}>
                      <Text style = {{marginTop:10, marginRight: 10}}>Spots:</Text>
            <NumericInput 
            value={this.state.value} 
            onChange={value => this.setState({value})} 
            //onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            totalWidth={240} 
            totalHeight={30} 
            maxValue={8}
            minValue={1}
            //iconSize={25}
            step={1}
            //valueType='real'
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#5799a6' 
            leftButtonBackgroundColor='#5777a6'/>
            </View>

           {/*  <Container style={{flex: 1, flexDirection: 'row', alignSelf: 'center', marginTop: 10}}>
                <RoundedButton style={{ backgroundColor: '#5799a6', marginRight: 10 }}
                buttonText='Објави'
                onSubmit={() => {this.handlePost}}
              /> 
              <RoundedButton style={{ backgroundColor: '#5777a6', marginLeft: 10}}
                buttonText='Избриши'
                isSmall='false'
                onSubmit={() => { Navigate("Driver") }}/>
            
            </Container> */}

            </View>
            </SafeAreaView>
        );
    }
}

export default  PostScreen;