import React from 'react';
import firebase from 'firebase';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer , createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SigninScreen from './src/screens/SigninScreen';
import HomeScreen from './src/screens/HomeScreen';
import NewsScreen from './src/screens/NewsScreen';
import EventsScreen from './src/screens/EventsScreen';
import News1_CoronavirusSymptoms_Screen from './src/screens/News1_CoronavirusSymptoms_Screen';
import News2_WorkingRemotely from './src/screens/News2_WorkingRemotely';
import News3_NEU_MovingToOnlineTeaching from './src/screens/News3_NEU_MovingToOnlineTeaching';
import FavoritesScreen from './src/screens/FavoritesScreen';
import TestScreen from './src/screens/TestScreen';
import { Provider } from './src/context/Favorites';
import { Ionicons } from '@expo/vector-icons';

const App = createStackNavigator(
  {

    Home: HomeScreen,
    News: NewsScreen,
    Favorites: FavoritesScreen,
    News1: News1_CoronavirusSymptoms_Screen,
    News2: News2_WorkingRemotely,
    News3: News3_NEU_MovingToOnlineTeaching,                                    
  },
  {
//initial rountine deleted
//provider deleted
    defaultNavigationOptions:{
      title: 'NEU Bay Area'
    }
  }
);

const BottomNavigation = createBottomTabNavigator({
  News: {
    screen: App,
    navigationOptions: {
      tabBarLabel: "News",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-paper" size={24} color={tabInfo.tintColor} />;
      }
    }
  },

  Events: {
    screen: EventsScreen,
    navigationOptions: {
      tabBarLabel: "Events",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-calendar" size={27} color={tabInfo.tintColor} />;
      }
    }
  },

  Signin: {
    screen: SigninScreen,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-contact" size={27} color={tabInfo.tintColor} />;
      }
  }}
},{
    tabBarOptions:{
      activeTintColor: 'darkred'

  }
});

export default createAppContainer(BottomNavigation);