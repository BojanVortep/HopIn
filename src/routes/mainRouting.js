import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'native-base';
import Ionicons from 'react-native-vector-icons';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from "react-navigation-tabs";


import LoginScreen from '../views/loginScreen';
import Home from '../views/homeScreen';
import Passangers from '../views/passangersScreen';
import SignUpScreen from '../views/signUpScreen';
import Driver from '../views/driverTab';
import Form from '../views/formScreen';
import LoadingScreen from '../views/loadingScreen';

import MessageScreen from "../views/messageScreen";
import PostScreen from "../views/postScreen";
import NotificationScreen from "../views/notificationScreen";
import ProfileScreen from "../views/profileScreen";


const TabNavigation = createMaterialTopTabNavigator({
    Driver: Driver,
    Passangers: Passangers,
});

const AppContainer = createStackNavigator(
    {
        default: createBottomTabNavigator(
            {
                Home: {
                    screen: Home,
                    navigationOptions: {
                        tabBarOptions: ({ tintColor }) => <Ionicons name="ios-home" size={24} color={tintColor} />
                    }
                },
                Form: {
                    screen: Form,
                    navigationOptions: {
                        tabBarOptions: ({ tintColor }) => <Ionicons name="ios-chatboxes" size={24} color={tintColor} />
                    }
                },
                Post: {
                    screen: PostScreen,
                    navigationOptions: {
                        tabBarOptions: ({ tintColor }) => (
                            <Ionicons
                                name="ios-add-circle"
                                size={48}
                                color="#E9446A"
                                style={{
                                    shadowColor: "#E9446A",
                                    shadowOffset: { width: 0, height: 10 },
                                    shadowRadius: 10,
                                    shadowOpacity: 0.3
                                }}
                            />
                        )
                    }
                },
                Driver: {
                    screen: Driver,
                    navigationOptions: {
                        tabBarOptions: ({ tintColor }) => <Ionicons name="ios-notifications" size={24} color={tintColor} />
                    }
                },
                Profile: {
                    screen: ProfileScreen,
                    navigationOptions: {
                        tabBarOptions: ({ tintColor }) => <Ionicons name="ios-person" size={24} color={tintColor} />
                    }
                }
            },
            {
                defaultNavigationOptions: {
                    tabBarOnPress: ({ navigation, defaultHandler }) => {
                        if (navigation.state.key === "Post") {
                            navigation.navigate("postModal");
                        } else {
                            defaultHandler();
                        }
                    }
                },
                tabBarOptions: {
                    activeTintColor: "#161F3D",
                    inactiveTintColor: "#B8BBC4",
                    showLabel: false
                }
            }
        ),
        postModal: {
            screen: PostScreen
        }
    },
    {
        mode: "modal",
        headerMode: "none"
        // initialRouteName: "postModal"
    }
);

 const StackNavigation = createStackNavigator(
    {
        Home: Home,
        Driver: Driver,
        Passangers: Passangers,
        Form: Form,
    },
    {
        initialRouteName: "Home",
        headerMode: 'none'
    }
);

const AuthStack = createStackNavigator ({
    Login: LoginScreen,
    SignUp: SignUpScreen
},
{
    headerMode: 'none'
});

const MainRouting =
    createSwitchNavigator({
        Loading: LoadingScreen,
        Auth: AuthStack,
        Main: AppContainer,
        
    },
        {
            initialRouteName: "Loading",
            headerMode: 'none'
        });

export {
    MainRouting,
    //MainTabs
};