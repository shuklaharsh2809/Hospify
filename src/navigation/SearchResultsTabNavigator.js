import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarIndicatorStyle: {
          backgroundColor: 'red',
        },
      }}>
      <Tab.Screen name="list" component={SearchResults} />
      <Tab.Screen name="map" component={SearchResults} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
