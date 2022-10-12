import type { StackScreenProps } from "@react-navigation/stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Products } from "./utils/interface";

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


export type HomeStackProps = StackScreenProps<HomeStackParamList>;
export type CartStackProps = StackScreenProps<CartStackParamList>;
// export type RootTabProps = BottomTabScreenProps<RootTabParamList>;