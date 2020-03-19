import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import NewsScreen from "./src/screens/NewsScreen";
import EventScreen from "./src/screens/EventScreen";
import EventDetailDemo from "./src/screens/EventDetailDemo";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    News: NewsScreen,
    Event: EventScreen,
    EventDetail: EventDetailDemo
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "NEU Bay Area"
    }
  }
);

export default createAppContainer(navigator);
