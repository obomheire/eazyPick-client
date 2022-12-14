import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { CartStackProps } from "../../types";
import { clearCart } from "../../redux/slices/orderSlice";
import CartItem from "./CartItem";

var { height, width } = Dimensions.get("window");

const Cart = ({ navigation }: CartStackProps) => {
  const cartItems = useSelector((state: RootState) => state.orderItems.cart);
  const dispatch = useDispatch();

  let total = 0;
  cartItems.forEach((item) => {
    total += +item.price.toFixed(2);
  });

  return (
    <View style={styles.container}>
      {cartItems.length ? (
        <>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.headerText}>Cart Items</Text>
          </View>

          <CartItem cartItems={cartItems} />

          <View style={styles.bottomContainer}>
            <View>
              <Text style={styles.price}>$ {total}</Text>
            </View>
            <View>
              <Button title="clear" onPress={() => dispatch(clearCart())} />
            </View>
            <View>
              <Button
                title="checkout"
                onPress={() => navigation.navigate("CheckoutScreen")}
              />
            </View>
          </View>
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <Text>Looks like your cart is empty!</Text>
          <Text>Please add product to your cart to get started</Text>
        </View>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "gainsboro" },
  emptyContainer: {
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  price: {
    fontSize: 15,
    margin: 15,
    color: "red",
  },
  name: {
    fontSize: 15,
    margin: 15,
  },
  image: {
    width: width / 4 - 30,
    height: width / 6,
  },
  headerText: { fontSize: 30, fontWeight: "400" },
  // body: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 },
});
