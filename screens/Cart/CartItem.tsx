import {
  Button,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../redux/slices/cartItemsSlice";
import { CartItemProps } from "../../utils/interface";
import { SwipeListView } from "react-native-swipe-list-view";

var { height, width } = Dimensions.get("window");

const CartItem = ({ cartItems }: CartItemProps) => {
  const dispatch = useDispatch();
  return (
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
              <View style={{ width: width / 3 + 80}}>
                <Text style={styles.name}>{item.name}</Text>
              </View>
              <View style={{}}>
                <Text style={styles.price}>$ {item.price}</Text>
              </View>
            </View>
          );
        }}
      />
    </ScrollView>
  );
};

export default CartItem;

const styles = StyleSheet.create({
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
});
