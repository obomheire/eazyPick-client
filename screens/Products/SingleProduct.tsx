import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
} from "react-native";
import React, { useState } from "react";
import { HomeStackProps } from "../../types";
import { Products } from "../../utils/interface";

const SingleProduct = ({ navigation, route }: HomeStackProps) => {
  const { item } = route.params;

  const [items, setItems] = useState<Products>(item);
  const [availability, setAvailability] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView style={{ marginTop: 20, padding: 5 }}>
        <View>
          <Image
            source={{
              uri: items.image
                ? items.image
                : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
            }}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.contents}>
          <Text style={styles.contentHeader}>{items.name}</Text>
          <Text style={styles.contentText}>{items.brand}</Text>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.price}>$ {items.price}</Text>
        </View>
        <View style={{ margin: 20 }}>
          <Button title="Add" />
        </View>
      </View>
    </View>
  );
};

export default SingleProduct;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    // alignItems: "center",
    // justifyContent: "center",
  },
  imageContainer: {
    backgroundColor: "white",
    padding: 0,
    margin: 0,
  },
  image: {
    width: "100%",
    height: 250,
  },
  contentContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  contentHeader: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20,
  },
  contentText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 24,
    margin: 20,
    color: "red",
  },
  availabilityContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  availability: {
    flexDirection: "row",
    marginBottom: 10,
  },
  contents: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
});
