import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Button,
  Image,
} from "react-native";
import React from "react";
import { order } from "../../../utils/interface";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../../redux/slices/cartItemsSlice";

var { height, width } = Dimensions.get("window");

export type ConfirmProps = {
  order: order;
  navigation: any;
};

const Confirm = ({ order, navigation }: ConfirmProps) => {
  const dispatch = useDispatch();

  const confirmOrder = () => {
    setTimeout(() => {
      dispatch(clearCart());
      navigation.navigate("CartScreen");
    }, 500);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Confirm Order</Text>
        {order ? (
          <View style={{ borderWidth: 1, borderColor: "orange" }}>
            <Text style={styles.title}>Shipping to:</Text>
            <View style={{ padding: 8 }}>
              <Text>Address: {order.shippingAddress1}</Text>
              <Text>Address2: {order.shippingAddress2}</Text>
              <Text>City: {order.city}</Text>
              <Text>Zip Code: {order.zip}</Text>
              <Text>Country: {order.country}</Text>
            </View>
            <Text style={styles.title}>Items:</Text>

            {order.orderItems.map((value) => {
              return (
                <View style={styles.listItem} key={value.name}>
                  <View>
                    <Image
                      source={{ uri: value.image }}
                      style={{ width: 20, height: 20 }}
                    />
                  </View>
                  {/* <View style={styles.body}> */}
                  <View>
                    <Text>{value.name}</Text>
                  </View>
                  <View>
                    <Text>$ {value.price}</Text>
                    {/* </View> */}
                  </View>
                </View>
              );
            })}
          </View>
        ) : null}
        <View style={{ alignItems: "center", margin: 20 }}>
          <Button title={"Place order"} onPress={confirmOrder} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Confirm;

const styles = StyleSheet.create({
  container: {
    height: height,
    padding: 8,
    alignContent: "center",
    backgroundColor: "white",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  title: {
    alignSelf: "center",
    margin: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  listItem: {
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-between",
    width: width / 1.2,
    flexDirection: "row",
    padding: 10,
  },
  // body: {
  //   margin: 10,
  //   alignItems: "center",
  //   flexDirection: "row",
  // },
});
