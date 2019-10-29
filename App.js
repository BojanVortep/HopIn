import React  from 'react';
import {Root} from 'native-base';
//import { Provider } from 'react-redux';
//import Store from './src/store/createStore';
import AppContainer from './src/store/appContainer';

//import { AsyncStorage, StatusBar, YellowBox  } from 'react-native';
//YellowBox.ignoreWarnings(['ViewPagerAndroid', 'Async Storage']);

class App extends React.Component {
  render() {
    return (
     // <Provider /* store = {Store}  */>
        <Root>
            <AppContainer />
        </Root>
     // </Provider>
    );
  }
}

export default App;


/* import React, { Component } from 'react';
import {Root} from 'native-base';

import { StyleSheet, View, Text } from 'react-native';

import Login from './src/views/login';
import Root from './src/views/main';
import GlobalStyles from './src/styles/styles';


class App extends React.Component {

    render() {
    return (
            <View style={{flex: 1}}>
                < Root {...this.props} />
            </View>
    
    );
  }
}
export default App;
 */