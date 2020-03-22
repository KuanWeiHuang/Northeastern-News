import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import NewsScreen from './src/screens/NewsScreen';
import News1_CoronavirusSymptoms_Screen from './src/screens/News1_CoronavirusSymptoms_Screen';
import News2_WorkingRemotely from './src/screens/News2_WorkingRemotely';
import News3_NEU_MovingToOnlineTeaching from './src/screens/News3_NEU_MovingToOnlineTeaching';

const navigator = createStackNavigator({
  Home: HomeScreen,
  News: NewsScreen,
  News1: News1_CoronavirusSymptoms_Screen,
  News2: News2_WorkingRemotely,
  News3: News3_NEU_MovingToOnlineTeaching,
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'NEU Bay Area'
  }
});

export default createAppContainer(navigator);