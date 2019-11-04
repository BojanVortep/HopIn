import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import LoginScreen from '../views/loginScreen';
import Home from '../views/homeScreen';
import Passangers from '../views/passangersScreen';
import SignUpScreen from '../views/signUpScreen';
import Driver from '../views/driverTab';
import Form from '../views/formScreen';
//import ChannelScreen from '../views/streamChat';



///---------------Main screen tab components
//import TraderList from '../views/tabs/traderList';
//import SearchOffer from '../views/tabs/searchOffer';

//import { TabActivated } from '../actions/mainAction';
//import Store from '../store/createStore';

/* const MainTabs = {
    TraderList: TraderList,
    SearchOffer: SearchOffer,
}

TraderList.navigationOptions = {
    tabBarLabel: 'Trader List'
}
SearchOffer.navigationOptions = {
    tabBarLabel: 'Search Offer' */


const TabNavigation = createMaterialTopTabNavigator({
    Driver: Driver,
    Passangers: Passangers,
});

/*
    {
        // initialRouteName: 'TraderList',
        headerMode: 'none',
        backBehavior: 'history',
        onIndexChanged: (index) => {
            Store.dispatch(TabActivated(index));
        }
    }
); */
 const StackNavigation = createStackNavigator(
    {
        Home: Home,
        Driver: Driver,
        Passangers: Passangers,
        Form: Form,
        //TabNavigation: TabNavigation,
        //MainScreen: TabNavigation,
        //Passangers: Passangers,
        //SignUpScreen: SignUpScreen
    },
    {
        initialRouteName: "Home",
        headerMode: 'none'
    }
);

const DrawerNavigation = createDrawerNavigator({
    Home: Home,
    //PreferenceScreen: PreferenceScreen,
   // BookmarksScreen: BookmarksScreen,

    // DetailScreen: {
    //     DetailScreen,
    //     navigationOptions: {
    //         drawerLockMode: 'locked-closed'
    //     }
    // },
},
    {
        //initialRouteName: "PreferenceScreen",
        headerMode: 'none',
        backBehavior: 'history',
        //contentComponent: MainSideBar
    });

const MainRouting =
    createSwitchNavigator({
        LoginScreen: LoginScreen,
        SignUpScreen: SignUpScreen,
        Main: StackNavigation
    },
        {
            initialRouteName: "LoginScreen",
            headerMode: 'none'
        });

export {
    MainRouting,
    //MainTabs
};