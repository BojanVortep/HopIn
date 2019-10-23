import React, { Component } from 'react';
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
