import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import productReducer from "./productSlice";
import basketReducer from "./basketSlice";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    app: appReducer,
    product: productReducer,
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
