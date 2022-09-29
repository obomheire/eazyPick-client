import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SearchedProductProps } from "../../utils/interface";

const { width } = Dimensions.get("window");

const SearchedProduct = ({ productsFiltered }: SearchedProductProps) => {
  return (
    <View style={{ width: width }}>
      {productsFiltered.length > 0 ? (
        <FlatList
          data={productsFiltered}
          keyExtractor={(item) => item._id.$oid}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row", margin: 5}}>
              <View style={{padding: 10}}>
                <Image
                  style={styles.image}
                  source={{
                    uri: item.image
                      ? item.image
                      : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
                  }}
                />
              </View>
              <View>
                <View>
                  <Text>{item.name}</Text>
                </View>
                <View>
                  <Text>{item.description}</Text>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={styles.center}>
          <Text style={{ alignSelf: "center" }}>
            No products match the selected criteria
          </Text>
        </View>
      )}
    </View>
  );
};

export default SearchedProduct;

const styles = StyleSheet.create({
  //   image: {
  //     width: width / 2 - 20 - 10,
  //     height: width / 2 - 20 - 30,
  //     backgroundColor: "transparent",
  //     position: "absolute",
  //     top: -45,
  //   },
  image: {
    width: 50,
    height: 50,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
});
