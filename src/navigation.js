import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { OverviewScreen } from "./screens/overview";
import { MapScreen } from "./screens/map";
import { DetailsScreen } from "./screens/detail";

const overviewNavigator = createStackNavigator(
  {
    Overview: {
      screen: OverviewScreen
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    initialRouteName: "Overview"
  }
);

export default createBottomTabNavigator(
  {
    Overview: { screen: overviewNavigator },
    Map: { screen: MapScreen }
  },
  {
    initialRouteName: "Overview"

    //defaultNavigationOptions: ({ navigation }) => ({}),
    //tabBarOptions: {}
  }
);
