import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Login from './src/views/login';
import Root from './src/views/main';
import GlobalStyles from './src/styles/styles';

<<<<<<< HEAD
const App = () => {
  return (
          <View style={{flex:1}}>
              <Main/>
            </View>
   
  );
};

=======
class App extends React.Component {
>>>>>>> 25d63896c151960ba5fede5f752ed6cb7c4d308a

    render() {
    return (
            <View style={{flex: 1}}>
                < Root {...this.props} />
            </View>
    
    );
  }
}
export default App;
