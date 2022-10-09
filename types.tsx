import type { StackScreenProps } from "@react-navigation/stack";
import { Products } from "./utils/interface";

export type HomeStackParamList = {
  Home: undefined;
  ProductDetail: { item: Products };
};

export type Props = StackScreenProps<HomeStackParamList>;