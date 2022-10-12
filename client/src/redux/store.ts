import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import products from "./slices/productSlice";
import users from "./slices/userSlice";
import auth from "./slices/authSlice";

export const store = configureStore({
  reducer: { products, users, auth },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
