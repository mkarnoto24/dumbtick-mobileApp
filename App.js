// import React from 'react';
// import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/screens/Home'
import CategoryPage from './src/screens/CategoryPage'
import EventDetail from './src/components/EventDetail'

const AppNavigator = createStackNavigator({

  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      headerShown: false
    }
  },
  CategoryPage: {
    screen: CategoryPage,
    navigationOptions: {
      title: 'Event By Category',
      headerTintColor: 'red'
    }
  },
  EventDetail: {
    screen: EventDetail,
    navigationOptions: {
      title: 'Event Detail',
      headerTintColor: 'red'
    }
  },
},
  {
    initialRouteName: 'Home'
  });

export default createAppContainer(AppNavigator);