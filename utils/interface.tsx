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

export type productListProps = {
  item: Products;
};

export type ProductsCardProps = {
  item: Products;
};


