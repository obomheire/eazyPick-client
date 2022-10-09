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
import {removeFromCart} from "../../redux/slices/cartItemsSlice";


var { height, width } = Dimensions.get("window");

const Cart = ({ navigation }: CartStackProps) => {
  const cartItems = useSelector((state: RootState) => state.cartItems.cart);
  const dispatch = useDispatch();

  let total = 0;
  cartItems.forEach((item) => {
    total += +item.price.toFixed(2);
  });

  return (
    <ScrollView>
      {cartItems.length ? (
        <>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <FlatList
              data={cartItems}
              keyExtractor={(item) => Math.random().toString()}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginHorizontal: 10,
                    }}
                  >
                    <View>
                      <Image
                        style={styles.image}
                        resizeMode="contain"
                        source={{
                          uri: item.image
                            ? item.image
                            : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
                        }}
                      />
                    </View>
                    <View style={{ width: width / 2.5 - 40 }}>
                      <Text style={styles.name}>{item.name}</Text>
                    </View>
                    <View style={{ width: width / 3.5 }}>
                      <Text style={styles.price}>$ {item.price}</Text>
                    </View>
                    <View style={{}}>
                      <Button
                        title="remove"
                        onPress={() => dispatch(removeFromCart(item._id.$oid))}
                      />
                    </View>
                  </View>
                );
              }}
            />
          </ScrollView>
          <View style={styles.bottomContainer}>
            <View>
              <Text style={styles.price}>$ {total}</Text>
            </View>
            <View>
              <Button title="clear" />
            </View>
            <View>
              <Button title="checkout" onPress={()=> navigation.navigate("Checkout")} />
            </View>
          </View>
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <Text>Looks like your cart is empty!</Text>
          <Text>Please add product to your cart to get started</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
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
    marginTop: 30,
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
  hiddenContainer: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  hiddenButton: {
    backgroundColor: "red",
    justifyConte5nt: "center",
    alignItems: "flex-end",
    paddingRight: 25,
    height: 70,
    width: width / 1.2,
  },
  image: {
    width: width / 4 - 30,
    height: width / 6,
  },
  // body: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 },
});
