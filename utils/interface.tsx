import { KeyboardTypeOptions } from "react-native";
import { HomeStackProps } from "../types";

export interface Products {
  _id: {
    $oid: string;
  };
  image: string;
  brand: string;
  price: number;
  rating: number;
  numReviews: number;
  isFeatured: boolean;
  name: string;
  description: string;
  category: {
    $oid: string;
  };
  countInStock: number;
  __v: number;
}

export interface Categories {
  _id: {
    $oid: string;
  };
  name: string;
  __v: number;
}

export type productListProps = {
  item: Products;
  navigation: HomeStackProps<"ProductDetailScreen">["navigation"];
};

export type ProductsCardProps = {
  item: Products;
};

export type SearchedProductProps = {
  // item: Products;
  productsFiltered: Products[];
};

export type SearchBarProps = {
  onFocus: () => void;
  onChangeText: (text: string) => void;
  onBlur: () => void;
  focus: boolean;
};

export type CartItemProps = {
  cartItems: Products[];
};

export type FormContainerProps = {
  title: string;
  children: React.ReactNode;
};

export type InputProps = {
  placeholder: string;
  name: string;
  value: string;
  keyboardType: KeyboardTypeOptions | undefined;
  onChangeText: (text: string) => void;
};

// export type country = {
//   name: string;
//   code: string;
// };

export type order = {
  city: string;
  country: string;
  dateOrdered: string;
  orderItems: Products[];
  phone: string;
  shippingAddress1: string;
  shippingAddress2: string;
  // status: "3";
  // user,
  zip: string;
};

export interface CartItemsState {
  cart: Products[];
}

export interface OrderItemsState {
  order: order;
}
