import React from 'react';
import {Icon} from 'react-native-elements';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Menu from '../pages/Menu';

const Tab = createBottomTabNavigator();

const TabNavigation = (props) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Menu') {
            iconName = 'menu';
          }
          return (
            <Icon name={iconName} type="feather" size={22} color={color} />
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      {/* <Tab.Screen name="Profile" component={Profile} /> */}
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
