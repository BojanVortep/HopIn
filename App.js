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


