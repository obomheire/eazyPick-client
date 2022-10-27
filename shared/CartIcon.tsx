import React from "react";
import { StyleSheet, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { Badge, Heading } from "native-base";

const CartIcon = () => {
  const cartItems = useSelector((state: RootState) => state.orderItems.cart);
  return (
    <>
      {cartItems.length ? (
        <Badge style={styles.badge}>
          <Text style={styles.text}>{cartItems.length}</Text>
        </Badge>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  badge: {
    width: 32,
    height: 30,
    position: "absolute",
    top: -10,
    right: -20,
    backgroundColor: "red",
    borderRadius: 50,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
});

export default CartIcon;
