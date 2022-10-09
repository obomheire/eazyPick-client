import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { View } from "react-native";
import HomeStackNavigator from "./HomeStackNavigator";
import CartStackNavigator from "./CartStackNavigator";

const Tab = createBottomTabNavigator();

// {
//   "tabBarHideOnKeyboard": true,
//   "tabBarActiveTintColor": "#e91e63",
//   "tabBarShowLabel": false,
//   "tabBarStyle": [
//     {
//       "display": "flex"
//     },
//     null
//   ]
// }

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#e91e63",
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Icon name="shopping-cart" color={color} size={30} />
              {/* <CartIcon /> */}
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Admin"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="cog" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
