/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
//import HomeScreen from './src/screens/Home';
import Router from './src/navigation/Router';
//import Post from './src/components/Post';
//import feed from './assets/data/feed';
//import GuestScreen from './src/screens/Guests';
//import DestinationSearchScreen from './src/screens/DestinationSearch';
//import SearchResultsScreen from './src/screens/SearchResults';

//const post1 = feed[0];
//const post2 = feed[2];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      
        {/*<HomeScreen/>*/}
        {/* <Post post={post2} />*/}
        {/* <SearchResultsScreen/>*/}
        {/*<DestinationSearchScreen/>*/}
        {/*<GuestScreen/>*/}
        <Router />
     
    </>
  );
};

export default App;
