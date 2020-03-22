import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import NewsScreen from "./src/screens/NewsScreen";
import EventScreen from "./src/screens/EventScreen";
import Events1_TechnicalInterviewWorkshop_Screen from "./src/screens/Events1_TechnicalInterviewWorkshop_Screen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    News: NewsScreen,
    Event: EventScreen,
    Event1: Events1_TechnicalInterviewWorkshop_Screen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "NEU Bay Area"
    }
  }
);

export default createAppContainer(navigator);
