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
  admin: boolean;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
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
  "firstName" | "lastName" | "email" | "password" | "image"
>;

export type UpdateUser = {
  id: string;
  user: PickedPropsEditUser;
};

export type CurrentId = {
  currentId: string;
  setCurrentId: (id: string) => void;
};
