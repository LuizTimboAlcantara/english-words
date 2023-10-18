import React from "react";

import Login from "@screens/login";
import DetailsWord from "@screens/detailsWord";
import OnBoarding from "@screens/onBoarding";

import TabRoutes from "./tab.routes";
import { createStackNavigator } from "@react-navigation/stack";

const stackRoutes = createStackNavigator();

const AppRoutes = () => {
  return (
    <stackRoutes.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <stackRoutes.Screen name="Login" component={Login} />
      <stackRoutes.Screen name="OnBoarding" component={OnBoarding} />
      <stackRoutes.Screen name="Home" component={TabRoutes} />
      <stackRoutes.Screen name="Details" component={DetailsWord} />
    </stackRoutes.Navigator>
  );
};

export default AppRoutes;
