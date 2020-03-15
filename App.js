import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import NewsScreen from './src/screens/NewsScreen';
import FavoritesScreen from './src/screens/FavoritesScreen'
import { Provider } from './src/context/Favorites'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    News: NewsScreen,
    Favorites: FavoritesScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'NEU Bay Area'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
    return <Provider>
        <App />
    </Provider>
};