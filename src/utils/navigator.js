import { NavigationActions, SwitchActions } from 'react-navigation';

let _navigator;

const SetTopLevelNavigator = (navigatorRef) => {
  _navigator = navigatorRef;
}

const Navigate = (routeName, params) => {
    let nav = NavigationActions.navigate({
      routeName,
      params,
    });
  _navigator.dispatch(nav);
}

export {
  Navigate,
  SetTopLevelNavigator
}