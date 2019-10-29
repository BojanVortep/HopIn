/* import React from 'react';
import {View, Button, Platform } from 'react-native';
import {createNavigator, 
        TabRouter, 
} from 'react-navigation';

import  NavigationView  from './navigationView'


function createATSTabNavigator (routeConfigMap, config = {}) 
{
      let router = TabRouter(routeConfigMap, config);
      let NavigatorComponent = createNavigator(
        NavigationView,
        router,
        config,
      );

      return NavigatorComponent;
}

  export default createATSTabNavigator */