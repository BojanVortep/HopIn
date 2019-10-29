import React  from 'react';
import { createAppContainer} from 'react-navigation';

import { MainRouting } from '../routes/mainRouting';
import { SetTopLevelNavigator } from '../utils/navigator';

const AppContainer = createAppContainer(MainRouting);

export default class extends React.PureComponent
{
    render()
    {
        return ( 
            <AppContainer 
                ref={navigatorRef => {SetTopLevelNavigator(navigatorRef);}}  
                /> 
        );
    }
}