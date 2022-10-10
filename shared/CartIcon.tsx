import React from "react";
import { StyleSheet, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { Badge, Heading } from "native-base";

const CartIcon = () => {
  const cartItems = useSelector((state: RootState) => state.cartItems.cart);
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
    width: 25,
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    top: -4,
    right: -15,
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
