import { Platform } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "@screens/home";
import History from "@screens/history";
import Favorites from "@screens/favorites";

import colors from "@utils/theme/colors";

const Tab = createBottomTabNavigator();

interface TabBarIconProps {
  color: string;
  focused: boolean;
}

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.eloBlue,
        tabBarInactiveTintColor: colors.grayWarning,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.taBarGray,
          position: "absolute",
          height: 50,
          bottom: 20,
          left: 16,
          right: 16,
          elevation: 20,
          borderRadius: 8,
          borderTopWidth: 0,
          shadowColor: "rgba(25, 28, 50, 0.1)",
          shadowOffset: { width: 0, height: 20 },
          shadowRadius: 30,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }: TabBarIconProps) => (
            <MaterialCommunityIcons
              name={focused ? "home-variant" : "home-variant-outline"}
              size={25}
              color={color}
              focused={focused}
              style={{
                top: Platform.OS === "ios" ? 10 : 0,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color, focused }: TabBarIconProps) => (
            <MaterialCommunityIcons
              name={"history"}
              size={25}
              color={color}
              focused={focused}
              style={{
                top: Platform.OS === "ios" ? 10 : 0,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, focused }: TabBarIconProps) => (
            <MaterialCommunityIcons
              name={focused ? "heart" : "heart-outline"}
              size={25}
              color={color}
              focused={focused}
              style={{
                top: Platform.OS === "ios" ? 10 : 0,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
