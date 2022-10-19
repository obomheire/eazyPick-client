import {
  Button,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../redux/slices/cartItemsSlice";
import { CartItemProps } from "../../utils/interface";
import { SwipeListView } from "react-native-swipe-list-view";
import Icon from "react-native-vector-icons/FontAwesome";

var { height, width } = Dimensions.get("window");

const CartItem = ({ cartItems }: CartItemProps) => {
  const dispatch = useDispatch();
  return (
    <SwipeListView
      data={cartItems}
      // keyExtractor={(item) => Math.random().toString()}
      renderItem={({ item }) => {
        return (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 10,
              backgroundColor: "gainsboro",
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
            <View style={{ width: width / 3 + 80 }}>
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <View>
              <Text style={styles.price}>$ {item.price}</Text>
            </View>
          </View>
        );
      }}
      renderHiddenItem={({ item }) => (
        <TouchableOpacity
          style={styles.hiddenButton}
          onPress={() => dispatch(removeFromCart(item._id.$oid))}
        >
          <View>
            <Icon name="trash" color={"red"} size={30} />
          </View>
        </TouchableOpacity>
      )}
      disableRightSwipe={true}
      previewOpenDelay={3000}
      friction={1000}
      tension={40}
      leftOpenValue={75}
      stopLeftSwipe={75}
      rightOpenValue={-75}
    />
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
  hiddenContainer: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  hiddenButton: {
    justifyConte5nt: "center",
    alignItems: "flex-end",
    paddingRight: 20,
    paddingTop: 12,
  },
});
