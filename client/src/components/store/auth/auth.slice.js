import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//initial state
const initialState = {
  isLoading: true,
  isAuthenticated: false,
  user: null,
};

//signup
export const signupUserAction = createAsyncThunk(
  "/api/signup",
  async (formData) => {
    const res = await axios.post(
      "http://localhost:3000/api/auth/signup",
      formData,
      { withCredentials: true }
    );
    return res.data;
  }
);

//login
export const loginUserAction = createAsyncThunk(
  "/api/login",
  async (formData) => {
    const res = await axios.post(
      "http://localhost:3000/api/auth/login",
      formData,
      { withCredentials: true }
    );
    return res.data;
  }
);

//creating the slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, actions) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUserAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signupUserAction.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(signupUserAction.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(loginUserAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = action.payload.success;
        state.user = !action.payload.success ? action.payload.user : null;
      })
      .addCase(loginUserAction.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
