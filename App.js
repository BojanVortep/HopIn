import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Login from './src/views/login';
import Main from './src/views/main';
import GlobalStyles from './src/styles/styles';

const App = () => {
  return (
          <View style={{flex:1}}>
              <Main/>
            </View>
   
  );
};


export default App;
