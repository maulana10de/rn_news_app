import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Login from '../pages/Login';

import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = (props) => {
  return (
    <Drawer.Navigator initialRouteName="TabNavigation">
      <Drawer.Screen name="TabNavigation" component={TabNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
