export type Product = {
  _id: string;
  name: string;
  description: string;
  kidsWear: string;
  womenWear: string;
  menWear: string;
  variants: string[];
  small: number;
  medium: number;
  large: number;
  image: string;
};

export type PickedPropsCreateProduct = Pick<
  Product,
  | "name"
  | "description"
  | "kidsWear"
  | "womenWear"
  | "menWear"
  | "variants"
  | "small"
  | "medium"
  | "large"
  | "image"
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
