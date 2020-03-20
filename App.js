import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SigninScreen from './src/screens/SigninScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import NewsScreen from './src/screens/NewsScreen';
import NewsDetailScreen from './src/screens/NewsDetailScreen';
import News1_CoronavirusSymptoms_Screen from './src/screens/News1_CoronavirusSymptoms_Screen';
import EventsScreen from './src/screens/EventsScreen';
import EventsDetailScreen from './src/screens/EventsDetailScreen';
import AccountScreen from './src/screens/EventsDetailScreen';

//191.
const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Welcome: WelcomeScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    Home: HomeScreen,
    Events: createStackNavigator({
      EventsList: EventsScreen,
      EventsDetail: EventsDetailScreen
    }),
    News: createStackNavigator({
      NewsList: NewsScreen,
      NewsDetail: NewsDetailScreen,
      News1: News1_CoronavirusSymptoms_Screen

    }),
    Favorites: createStackNavigator({
      Account:AccountScreen,
      Signin: SigninScreen
    })
  })
});


export default createAppContainer(switchNavigator);
