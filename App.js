import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import NewsScreen from './src/screens/NewsScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  News: NewsScreen,
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'NEU Bay Area'
  }
});

export default createAppContainer(navigator);