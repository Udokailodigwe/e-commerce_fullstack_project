export type Product = {
  _id?: string;
  name: string;
  description: string;
  category: {
    kids: string[];
    women: string[];
    men: string[];
  };
  variants: string[];
  sizes: {
    small: number;
    medium: number;
    large: number;
    xlarge: number;
  };
  image: string;
};

export type ProductState = {
  products: Product[];
  isLoading: boolean;
  error: boolean;
};

export type NewProduct = {
  _id?: string;
  name: string;
  description: string;
  kids: string[];
  women: string[];
  men: string[];
  variants: string[];
  small: number;
  medium: number;
  large: number;
  xlarge: number;
  image: string;
};
