import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';
import TabNavigation from './TabNavigation';
import Detail from '../pages/Detail';
import Profile from '../pages/Profile';

const Stack = createStackNavigator();

const MainNavigation = (props) => {
  return (
    <Stack.Navigator initialRouteName={Login}>
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerTitle: false,
          headerTintColor: 'black',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
