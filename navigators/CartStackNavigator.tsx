import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CartStackParamList } from "../types";
import Cart from "../screens/Cart/Cart";
import Checkout from "../screens/Cart/Checkout";

const Stack = createStackNavigator<CartStackParamList>();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
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
