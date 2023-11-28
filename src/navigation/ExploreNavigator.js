import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';

import SearchResultsTabNavigator from './SearchResultsTabNavigator';
//import SearchResultsScreen from '../screens/SearchResults';


const stack = createStackNavigator();

const Router = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'SearchResults'}
        component={SearchResultsTabNavigator}
        options={{
          title: 'Search your Destination',
        }}
      />
    </stack.Navigator>
  );
};

export default Router;
