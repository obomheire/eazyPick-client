import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  Button,
} from "react-native";
import { ProductsCardProps } from "../../utils/interface";
import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../../redux/store";
import { addToCart } from "../../redux/slices/cartItemsSlice";

const { width } = Dimensions.get("window");

const ProductsCard = ({ item }: ProductsCardProps) => {
  const { name, price, image, countInStock } = item;

  // const cartItems = useSelector((state: RootState) => state.cartItems.cart);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: image
            ? image
            : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
        }}
      />
      <View style={styles.card} />
      <Text style={styles.title}>
        {name.length > 15 ? name.substring(0, 15 - 3) + "..." : name}
      </Text>
      <Text style={styles.price}>${price}</Text>
      {countInStock > 0 ? (
        <View style={{ marginBottom: 60 }}>
          <Button
            title="Add"
            color={"green"}
            onPress={() => dispatch(addToCart(item))}
          />
        </View>
      ) : (
        <Text style={{ marginTop: 20 }}>Item is currently unavailable</Text>
      )}
    </View>
  );
};

export default ProductsCard;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: width / 1.7,
    padding: 10,
    borderRadius: 10,
    marginTop: 60,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: "center",
    elevation: 8,
    backgroundColor: "white",
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: "transparent",
    position: "absolute",
    top: -45,
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 20 - 90,
    backgroundColor: "transparent",
    width: width / 2 - 20 - 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  price: {
    fontSize: 20,
    color: "orange",
    marginTop: 10,
  },
});
