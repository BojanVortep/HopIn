import React from "react";

import createStore from "../store/createStore";
import AppContainer from "../containers/AppContainer/appIndex";
export default class Root extends React.Component{
    renderApp(){
      const initialState = window.__INITIAL_STATE__;
      const store = createStore(initialState);

      return(
        <AppContainer store={store} />
      );
    }
    render() {
      return this.renderApp();
    }
}






/* import React from 'react';
import { StyleSheet, View, Text, TextInput, Button} from 'react-native';

class Main extends React.PureComponent {
  render () {
  return (
      
          
            <View>
              <Text >Main Page</Text>
           
            </View>
   
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan'
   
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10
  },
  inputStyle: {
    marginLeft: 18,
    marginRight: 18,
    marginBottom: 18,
    backgroundColor: 'white',
    borderRadius: 10,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#1f3659',
    height: 32,
    width: 250,
    alignSelf: 'center'

  },
  roundedInput: {
    textAlign: 'center',
    //height: 43
    color: 'blue'
},
});

export default Main;
 */