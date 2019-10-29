/* import React from 'react';
import {View, Platform } from 'react-native';
import {SceneView} from 'react-navigation';
import { TabView, SceneMap } from 'react-native-tab-view';


import ATSTabsButtonsSwitcher from '../components/atsTabsButtonsSwitcher';
import { ATSComponentStyles } from '../styles/atsStyles/atsComponentStyles';
import { MinimumScale } from '../utils/scales';

class NavigationView extends React.Component {
     constructor(props)
     {
       super(props);

       this._renderScene = this._renderScene.bind(this);
       this._handleIndexChange = this._handleIndexChange.bind(this);
       this._handleNaviationOptionsTabBarLabel = this._handleNaviationOptionsTabBarLabel.bind(this);
     }

   _renderScene = ({ route }) => {
      return (
        <SceneView
          screenProps={this.props.screenProps}
          navigation={this.props.descriptors[route.key].navigation}
          component={this.props.descriptors[route.key].getComponent()}
        />
      );
    };

    _handleIndexChange = (ind) => 
    {
      this.props.navigation.navigate(this.props.navigation.state.routes[ind].key);
    }
    _handleNaviationOptionsTabBarLabel = (index) => 
    {
       const descriptor = this.props.descriptors[this.props.navigation.state.routes[index].key];
       return (descriptor.options!=undefined) ? descriptor.options.tabBarLabel : "";
    }
      render() {
        let { state }  = this.props.navigation;
        let activeKey = state.routes[state.index].key;
        let descriptor = this.props.descriptors[activeKey];
        let screenComponent = descriptor.getComponent();
        // this.props.TabActivated(state.index);
        this.props.navigationConfig.onIndexChanged(state.index);
      return (
            <ATSView {...this.props}>
                 <View style={[ATSComponentStyles.baseTemplateContainer, 
                      this.props.style
                     ]}>
                <View style = {[ ATSComponentStyles.navigationContainer, 
                                { height:MinimumScale(ATSComponentStyles.navigationContainer.height)} 
                                ]} >
                {state.routes.map(( {routeName, key}, index ) => (
                  <ATSTabsButtonsSwitcher style={ATSComponentStyles.contentContainer} 
                  key={key}
                  active={state.index}
                  tabID={index} 
                  onPress= {() =>{
                      this.props.navigation.navigate(routeName);
                    }
                  }
                  name = { this._handleNaviationOptionsTabBarLabel(index) }
                    />
                ))}
                              </View>
                <View style={[ATSComponentStyles.contentContainer, 
                              ATSComponentStyles.activeBar]}>

                    <View style={[ATSComponentStyles.contentHeadPusher, 
                                  { top:Platform.OS==='ios' ? -4 : -3}
                                ]}>
                    </View>
                    <TabView
                    {...this.props}
                    navigationState={state}
                    renderScene = {
                    this._renderScene
                    }
                    renderTabBar= {(props) => null}
                    component={screenComponent}
                    navigation={descriptor.navigation}
                    screenProps={this.props.screenProps}
                    onIndexChange={this._handleIndexChange}
                    swipeEnabled={true} />
                </View>
            </View>
         </ATSView>
      );
    }
}

// function mapDispatchToProps (dispatch) {
//   return({
//     TabActivated: (tabActivatedID) => {dispatch(TabActivated(tabActivatedID))}
//   })
// }

// export default connect(
//   null,
//   mapDispatchToProps
// )(NavigationView);

export default NavigationView; */