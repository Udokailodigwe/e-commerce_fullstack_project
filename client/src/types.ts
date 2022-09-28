export type Product = {
  _id?: string;
  name: string;
  description: string;
  category: string[];
  variants: string[];
  sizes: string[];
  images: string;
};

export type ProductState = {
  productData: Product[];
  isLoading: boolean;
  error: boolean;
};
