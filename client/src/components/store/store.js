import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/auth/auth.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
