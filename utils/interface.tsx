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
  navigation: any;
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

export interface CartItemsState {
  products: Products[];
}



