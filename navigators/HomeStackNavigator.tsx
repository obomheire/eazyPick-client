import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProductsContainer from "../screens/Products/ProductsContainer";
import SingleProduct from "../screens/Products/SingleProduct";
import { HomeStackParamList } from "../types";

const Stack = createStackNavigator<HomeStackParamList>();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={ProductsContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={SingleProduct}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function HomeStackNavigator() {
  return <MyStack />;
}
