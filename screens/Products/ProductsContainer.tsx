import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ScrollView,
  Dimensions,
  Text,
  SafeAreaView,
} from "react-native";
import { Container, Header, Icon, Item, Input } from "native-base";
import { useFocusEffect } from "@react-navigation/native";
// import baseUrl from "../../assets/common/baseUrl";
import axios from "axios";
import { Products } from "../../utils/interface";

import ProductList from "./ProductsList";
// import SearchedProduct from "./SearchedProducts";
// import Banner from "../../Shared/Banner";
// import CategoryFilter from "./CategoryFilter";
// import baseURL from "../../assets/common/baseUrl";

import data from "../../assets/data/products.json";
import SearchBar from "../../shared/SearchBar";
import SearchedProduct from "./SearchedProduct";

const { height } = Dimensions.get("window");

const ProductsContainer = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [productsFiltered, setProductsFiltered] = useState<Products[]>([]);
  const [focus, setFocus] = useState<boolean>(false);

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    // setFocus(false);

    return () => {
      setProducts([]);
      setProductsFiltered([]);
      //  setFocus();
    };
  }, []);

  // Product Methods
  const searchProduct = (text: string) => {
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };
  return (
    <ScrollView>
      <SearchBar
        onFocus={openList}
        onChangeText={(text: string) => searchProduct(text)}
        onBlur={onBlur}
        focus={focus}
      />
      {focus == true ? (
        <ScrollView horizontal={true}>
          <SearchedProduct productsFiltered={productsFiltered} />
        </ScrollView>
      ) : (
        <View>
          <Text>Product container</Text>
          <ScrollView horizontal={true}>
            <FlatList
              data={products}
              numColumns={2}
              keyExtractor={(item) => item._id.$oid}
              renderItem={({ item }) => <ProductList item={item} />}
            />
          </ScrollView>
        </View>
      )}
    </ScrollView>
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
