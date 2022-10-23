export type Product = {
  _id: string;
  name: string;
  description: string;
  category: string;
  small: number;
  medium: number;
  large: number;
  image: string;
  price: number;
  rating: number;
  countInStock: number;
  reviews: number;
};

export type PickedPropsCreateProduct = Pick<
  Product,
  | "name"
  | "description"
  | "category"
  | "small"
  | "medium"
  | "large"
  | "price"
  | "rating"
  | "countInStock"
  | "reviews"
>;

export type NewProduct = Omit<Product, "_id">;

export interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: boolean;
}

export type Update = {
  productId: string;
  update: Partial<Product>;
};

export type Users = {
  _id: string;
  isAdmin: boolean;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  isBanned: boolean;
};

export interface UsersState {
  users: Users[];
  isLoading: boolean;
  error: boolean;
}

export type PickedPropsEditUser = Pick<
  Users,
  "firstName" | "lastName" | "email" | "image"
>;

export type UpdateUser = {
  id: string;
  user: PickedPropsEditUser;
};

export type CurrentId = {
  currentId: string;
  setCurrentId: (id: string) => void;
};
