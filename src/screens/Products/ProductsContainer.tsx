import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ScrollView,
  Dimensions,
  Text,
} from "react-native";
import { Container, Header, Icon, Item, Input} from "native-base";
import { useFocusEffect } from "@react-navigation/native";
// import baseUrl from "../../assets/common/baseUrl";
import axios from "axios";
import { Products } from "../../../utils/interface";

import ProductList from "./ProductsList";
// import SearchedProduct from "./SearchedProducts";
// import Banner from "../../Shared/Banner"; 
// import CategoryFilter from "./CategoryFilter";
// import baseURL from "../../assets/common/baseUrl";

import data from "../../../assets/data/products.json";

const { height } = Dimensions.get("window"); 

const ProductsContainer = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    setProducts(data);
  }, []);
  return (
    <View>
      <View style={{ marginTop: 100 }}>
        <FlatList
          data={products}
          keyExtractor={(item) => item._id.$oid}  
          renderItem={({ item }) => <ProductList item={item} />}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default ProductsContainer;

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  listContainer: {
    height: height,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
