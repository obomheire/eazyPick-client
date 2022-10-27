import { KeyboardTypeOptions } from "react-native";
import { HomeStackProps } from "../types";

export interface Products {
  id: string;
  image: string;
  brand: string;
  price: number;
  rating: number;
  numReviews: number;
  isFeatured: boolean;
  name: string;
  description: string;
  category: {
    id: string;
  };
  reviews: reviewsValue[];
  countInStock: number;
  __v: number;
  richDescription: string;
  images: string[];
}

type reviewsValue =  {
  avatar: string;
  name: string;
  review: string;
} 

export interface Categories {
  id: string;
  name: string;
  __v: number;
  color: string;
  icon: string;
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

export interface OrderState {
  order: order;
  cart: Products[];
}

export interface ProductState {
  categories: Categories[];
}


export type methodValue = {
  name: string;
  value: number;
};

export type RadioButtonprops = {
  methods: methodValue[];
  setSelected: (value: number) => void;
};

export type valueState = {
  value: number;
};

