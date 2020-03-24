import React from 'react';
import firebase from 'firebase';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer , createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SigninScreen from './src/screens/SigninScreen';
import HomeScreen from './src/screens/HomeScreen';
import NewsScreen from './src/screens/NewsScreen';
import EventScreen from './src/screens/EventScreen';
import Events1_TechnicalInterviewWorkshop_Screen from "./src/screens/Events1_TechnicalInterviewWorkshop_Screen";
import Events2_AmazonWorkshop_Screen from "./src/screens/Events2_AmazonWorkshop_Screen";
import Events3_LeetcodeWorkshop_Screen from "./src/screens/Events3_LeetcodeWorkshop_Screen";
import News1_CoronavirusSymptoms_Screen from './src/screens/News1_CoronavirusSymptoms_Screen';
import News2_WorkingRemotely from './src/screens/News2_WorkingRemotely';
import News3_NEU_MovingToOnlineTeaching from './src/screens/News3_NEU_MovingToOnlineTeaching';
import FavoritesScreen from './src/screens/FavoritesScreen';
import TestScreen from './src/screens/TestScreen';
import { Provider } from './src/context/Favorites';
import { Ionicons } from '@expo/vector-icons';

const App1 = createStackNavigator(
  {
    Home: HomeScreen,
    News: NewsScreen,
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

const App2 = createStackNavigator(
  {
    Event: EventScreen,
    Event1: Events1_TechnicalInterviewWorkshop_Screen,     
    Event2: Events2_AmazonWorkshop_Screen, 
    Event3: Events3_LeetcodeWorkshop_Screen,                           
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
    screen: App1,
    navigationOptions: {
      tabBarLabel: "News",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-paper" size={24} color={tabInfo.tintColor} />;
      }
    }
  },

  Events: {
    screen: App2,
    navigationOptions: {
      tabBarLabel: "Events",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-calendar" size={27} color={tabInfo.tintColor} />;
      }
    }
  },

  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarLabel: "Favorites",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-bookmark" size={25} color={tabInfo.tintColor} />;
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
  }
);


export default createAppContainer(BottomNavigation);

