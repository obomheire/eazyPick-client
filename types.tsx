import type { StackScreenProps } from "@react-navigation/stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";
import { order, Products } from "./utils/interface";

export type HomeStackParamList = {
  HomeScreen: undefined;
  ProductDetailScreen: { item: Products };
};

export type CartStackParamList = {
  CartScreen: undefined;
  CheckoutScreen: undefined;
};

// export type RootTabParamList = {
//   Home: undefined;
//   Cart: undefined;
//   Admin: undefined;
//   User: undefined;
// };

export type CheckoutTopTabParamList = {
  Shipping: undefined;
  Payment: undefined;
  Confirm: undefined;
};

export type HomeStackProps<Screen extends keyof HomeStackParamList> = StackScreenProps<
  HomeStackParamList,
  Screen
  >;

export type CheckoutTopTabProps<Screen extends keyof CheckoutTopTabParamList> =
  MaterialTopTabScreenProps<CheckoutTopTabParamList, Screen>;


// export type HomeStackProps = StackScreenProps<HomeStackParamList>;
export type CartStackProps = StackScreenProps<CartStackParamList>;
// export type RootTabProps = BottomTabScreenProps<RootTabParamList>;
// export type CheckoutTopTabProps = MaterialTopTabScreenProps<CheckoutTopTabParamList>;