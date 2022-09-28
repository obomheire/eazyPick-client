import React from "react";
import { TouchableOpacity, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

import { productListProps } from "../../../utils/interface";
import ProductsCard from "./ProductsCard";

const ProductsList = ({ item }: productListProps) => {
  return (
    <TouchableOpacity style={{ width: '50%' }}>
      <View style={{ width: width / 2, backgroundColor: "gainsboro" }}>
        <ProductsCard item={item} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductsList;
