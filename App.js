import React from 'react';
import firebase from 'firebase';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SigninScreen from './src/screens/SigninScreen';
import HomeScreen from './src/screens/HomeScreen';
import NewsScreen from './src/screens/NewsScreen';
import FavoritesScreen from './src/screens/FavoritesScreen'
import { Provider } from './src/context/Favorites';
import FavoritesScreen from './src/screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';

const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: (tabInfo) => {
          return <Ionicons name="ios-home" size={25} color={tabInfo.tintColor}/>;
        }
      }
    },

    Favorite: {
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
          return <Ionicons name="ios-settings" size={25} color={tabInfo.tintColor}/>;
        }
      }
    }
    },
    {
      tabBarOptions:{
        activeTintColor: 'darkred'
      }
  })
});
  
export default createAppContainer(switchNavigator);