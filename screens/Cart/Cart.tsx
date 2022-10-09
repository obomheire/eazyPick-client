import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cartItems.cartItem);
  return (
    <View style={{ flex: 1 }}>
      <Text>{cartItems.map((item) => item)}</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
