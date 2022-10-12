import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CartStackParamList } from "../types";
import Cart from "../screens/Cart/Cart";
import CheckoutTopTabNavigator from "./CheckoutTopTabNavigator";

const Stack = createStackNavigator<CartStackParamList>();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CartScreen"
        component={Cart}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="CheckoutScreen"
        component={CheckoutTopTabNavigator}
        options={{
          title: "Checkout",
        }}
      />
    </Stack.Navigator>
  );
}

export default function CartStackNavigator() {
  return <MyStack />;
}
