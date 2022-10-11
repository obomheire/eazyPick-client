import type { StackScreenProps } from "@react-navigation/stack";
import { Products } from "./utils/interface";

export type HomeStackParamList = {
  HomeScreen: undefined;
  ProductDetailScreen: { item: Products };
};

export type CartStackParamList = {
  CartScreen: undefined;
  CheckoutScreen: undefined;
};


export type HomeStackProps = StackScreenProps<HomeStackParamList>;
export type CartStackProps = StackScreenProps<CartStackParamList>;