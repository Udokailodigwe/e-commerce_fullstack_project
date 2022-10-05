export type Product = {
  _id?: string;
  name: string;
  description: string;
  kidswear: string;
  womenwear: string;
  menwear: string;
  variants: string[];
  small: number;
  medium: number;
  large: number;
  image: string;
};

export type ProductState = {
  products: Product[];
  isLoading: boolean;
  error: boolean;
};

//i could apply typscript pick method
export type Update = {
  productId: string;
  update: Product;
};
