import React from "react";
import {View, Text, Button, TouchableOpacity, StyleSheet, LayoutAnimation, FlatList, Image} from "react-native";
import {Container, Icon, StyleProvider} from "native-base";
import {  Navigate } from '../utils/navigator';
import {  RoundedButton, RoundedInput } from '../components/formElements';

import Ionicons from 'react-native-vector-icons';
import moment from 'moment';

import {DetailsScreenStyles}  from '../styles/detailsScreenStyles';
import ViewWrap  from '../components/viewWrap';

import * as firebase from "firebase";
//import Firebase from '../utils/firebase'

posts = [
  {
      id: "1",
      name: "Joe McKay",
      text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timestamp: 1569109273726,
      from: "Skopje",
      to: "Stip",
      date: "19.12.2019 (Четврток)",
      time: "07:30",
      freeSpots: "3",
      spotsNeeded: "1",
      avatar: require("../resurces/guy.png"),
  },
  {
      id: "2",
      name: "Karyn Kim",
      text:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      timestamp: 1569109273726,
      from: "Skopje",
      to: "Stip",
      date: "19.12.2019",
      time: "07:30",
      freeSpots: "3",
      spotsNeeded: "1",
      avatar: require("../resurces/guy.png"),
  },
  {
      id: "3",
      name: "Emerson Parsons",
      text:
          "Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.",
      timestamp: 1569109273726,
      from: "Skopje",
      to: "Stip",
      date: "19.12.2019",
      time: "07:30",
      freeSpots: "3",
      spotsNeeded: "1",
      avatar: require("../resurces/guy.png"),
  },
  {
      id: "4",
      name: "Kathie Malone",
      text:
          "At varius vel pharetra vel turpis nunc eget lorem. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing tristique risus nec feugiat in fermentum.",
      timestamp: 1569109273726,
      from: "Skopje",
      to: "Stip",
      date: "19.12.2019",
      time: "07:30",
      freeSpots: "3",
      spotsNeeded: "1",
      avatar: require("../resurces/guy.png"),
  }
];
class Home extends React.Component {

    constructor(props){
        super(props);
    }

    state = {
        email: "",
        displayName: ""
    };

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    };


    renderPost = post => {
      return (
          <View style={DetailsScreenStyles.feedItem}>
              <Image source={post.avatar} style={DetailsScreenStyles.avatar} />
              <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "flex-start" }}>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                      <View>
                          <Text style={DetailsScreenStyles.name}>{post.name}</Text>
                          <Text style={DetailsScreenStyles.timestamp}>{moment(post.timestamp).fromNow()}</Text>
                      </View>
                      <Icon type='Ionicons' name="ios-more" size={24} color="#73788B" style={{ marginLeft: 120 }}/>
                  </View>


                  <View style={[DetailsScreenStyles.detailsContainer]}>
                <View style={[DetailsScreenStyles.viewLabelsWrap]}>
                  <Text style={[DetailsScreenStyles.listLabel]}>Име:</Text>
                  <Text style={[DetailsScreenStyles.listLabel]}>Рута: </Text>
                  <Text style={[DetailsScreenStyles.listLabel]}>Датум :</Text>
                  <Text style={[DetailsScreenStyles.listLabel]}>Време: </Text>
                  <Text style={[DetailsScreenStyles.listLabel]}>Контакт: </Text>
                  <Text style={[DetailsScreenStyles.listLabel]}>Слободни места: </Text>


                </View>
                <View style={[DetailsScreenStyles.viewResultsWrap]}>
                  <Text style={[DetailsScreenStyles.listData]}> Бојан Петров </Text>
                  <Text style={[DetailsScreenStyles.listData]}> {post.from} - {post.to} </Text>
                  <Text style={[DetailsScreenStyles.listData]}> {post.date}  </Text>
                  <Text style={[DetailsScreenStyles.listData]}> {post.time} </Text>
                  <Text style={[DetailsScreenStyles.listData]}> Моб: 077 832 864 </Text>
                  <Text style={[DetailsScreenStyles.listData]}> {post.freeSpots}  </Text>
                </View>
              </View>
                  <View style={{ flexDirection: "row", marginLeft: -45, }}>
                      <Icon type='Ionicons' name="ios-heart-empty" size={24} color="#73788B" style={{ marginRight: 16 }}/>
                      <Icon type='Ionicons' name="ios-chatboxes" size={24} color="#73788B" />
                  </View>
              </View>
          </View>
      );
  };

    render() {
        LayoutAnimation.easeInEaseOut();

        return (
          <View style={{flex: 1}}>
            <View style={DetailsScreenStyles.header}>
                    <Text style={DetailsScreenStyles.headerTitle}>Feed</Text>
                </View>
                <Text> Hello {this.state.displayName}! </Text>
                <View style= {{ flexDirection: 'row', justifyContent: 'center'}}>
                <RoundedButton style={{ backgroundColor: '#5799a6' }}
                buttonText='Патник'
                onSubmit={() => { Navigate("Passangers") }}
              /> 
              <RoundedButton style={{ backgroundColor: '#5777a6'}}
                buttonText='Возач'
                isSmall='false'
                onSubmit={() => { Navigate("Driver") }}/>
                </View>
                <View style={DetailsScreenStyles.container}>
                
                
                <FlatList
                    style={DetailsScreenStyles.feed}
                    data={posts}
                    renderItem={({ item }) => this.renderPost(item)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                ></FlatList>
            </View>
                
            </View>
        );
     
    }
}
const styles = StyleSheet.create({

container: {
  flex: 1,
  backgroundColor: "#EBECF4"
},
header: {
  paddingTop: 10,
  //paddingBottom: 10,
  backgroundColor: "#FFF",
  alignItems: "center",
  justifyContent: "center",
  borderBottomWidth: 1,
  borderBottomColor: "#EBECF4",
  shadowColor: "#454D65",
  shadowOffset: { height: 5 },
  shadowRadius: 15,
  shadowOpacity: 0.2,
  zIndex: 10
},
headerTitle: {
  fontSize: 20,
  fontWeight: "500"
},
feed: {
  marginHorizontal: 16
},
feedItem: {
  backgroundColor: "#FFF",
  borderRadius: 5,
  padding: 8,
  flexDirection: "row",
  marginVertical: 8
},
avatar: {
  width: 36,
  height: 36,
  borderRadius: 18,
  marginRight: 16
},
name: {
  fontSize: 15,
  fontWeight: "500",
  color: "#454D65"
},
timestamp: {
  fontSize: 11,
  color: "#C4C6CE",
  marginTop: 4
},
post: {
  marginTop: 16,
  fontSize: 14,
  color: "#838899"
},
postImage: {
  width: undefined,
  height: 150,
  borderRadius: 5,
  marginVertical: 16
}
}); 
export default Home;