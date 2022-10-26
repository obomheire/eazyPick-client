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
import { useFocusEffect } from "@react-navigation/native";
import baseURL from "../../assets/common/baseUrl";
import axios from "axios";
import { Categories, Products } from "../../utils/interface";
import ProductList from "./ProductsList";
// import SearchedProduct from "./SearchedProducts";
import productsData from "../../assets/data/products.json";
import ProductsCategoriesData from "../../assets/data/categories.json";
import SearchBar from "../../shared/SearchBar";
import SearchedProduct from "./SearchedProduct";
import Banner from "../../shared/Banner";
import CategoriesFiter from "./CategoriesFiter";
import { HomeStackProps } from "../../types";

const { height } = Dimensions.get("window");

// type tabView = {
//   index: number;
//   key: string;
//   title: string;
// };

const ProductsContainer = ({ navigation }: HomeStackProps<"HomeScreen">) => {
  const allCtr = [
    {
      key: "5f15d5cdcb4a6642bddc0fe9p",
      title: "All",
    },
  ];

  const [products, setProducts] = useState<Products[]>([]);
  const [productsFiltered, setProductsFiltered] = useState<Products[]>([]);
  const [focus, setFocus] = useState<boolean>(false);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [productsCtg, setProductsCtg] = useState<Products[]>([]);
  const [initialState, setInitialState] = useState<Products[]>([]);
  const [tabViewId, setTabViewId] = useState<string>("");

  // const [loading, setLoading] = useState(true);

  // const [route, setRoute] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}/products`);
        const data = await response.data;
        setProducts(data);
        setProductsFiltered(data);
        setProductsCtg(data);
        setInitialState(data);
        //     setFocus(false);
        //     setLoading(false);
        //     setActive(-1);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // console.log("products", products);

  // Product Methods
  const searchProduct = (text: string) => {
    setProductsFiltered(
      products.filter((value) =>
        value.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  useEffect(() => {
    if (tabViewId === "5f15d5cdcb4a6642bddc0fe9p") {
      setProductsCtg(products);
    } else {
      setProductsCtg(
        products.filter((value) => {
          return value.category.id === tabViewId;
        })
      );
    }
  }, [tabViewId]);

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
        <>
          <Banner />
          <ScrollView horizontal={true}>
            <CategoriesFiter
              setTabViewId={setTabViewId}
              categories={ProductsCategoriesData}
            />
          </ScrollView>
          <ScrollView horizontal={true}>
            {products.length > 0 ? (
              <FlatList
                data={productsCtg}
                numColumns={2}
                keyExtractor={(item, index) => {
                  // console.log(item._id.$oid);
                  return index.toString();
                }}
                renderItem={({ item }) => (
                  <ProductList item={item} navigation={navigation} />
                )}
              />
            ) : (
              <View>
                <Text>No products found</Text>
              </View>
            )}
          </ScrollView>
        </>
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
});
