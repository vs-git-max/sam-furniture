import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// initial state
const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  error: null, // Store error messages
};

// signup action
export const signupUserAction = createAsyncThunk(
  "/api/signup",
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post(
        "http://localhost:8003/api/auth/signup",
        formData,
        { withCredentials: true }
      );
      return res.data; // On success, returns the user data
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.success || "Signup failed"
      );
    }
  }
);

// login action
export const loginUserAction = createAsyncThunk(
  "/api/login",
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post(
        "http://localhost:8003/api/auth/login",
        formData,
        { withCredentials: true }
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

// logout action
export const logoutUserAction = createAsyncThunk("/api/logout", async () => {
  const res = await axios.post(
    "http://localhost:8003/api/auth/logout",
    {},
    { withCredentials: true }
  );
  return res.data;
});

//checking auth
export const checkAuthUserAction = createAsyncThunk(
  "/auth/checkAuth",
  async () => {
    const res = await axios.get("http://localhost:8003/api/auth/check-auth", {
      withCredentials: true,
      headers: {
        "Cache-control": "no-store, no-cache,must-validate,proxy-revalidate",
      },
    });

    return res.data;
  }
);

// creating the slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: () => {},
  },
  extraReducers: (builder) => {
    builder
      // Signup action
      .addCase(signupUserAction.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Reset error when starting request
      })
      .addCase(signupUserAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false; // Authentication is false after signup until login
        state.user = action.payload.user;
      })
      .addCase(signupUserAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload; // Capture error message
      })

      // Login action
      .addCase(loginUserAction.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Reset error when starting request
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = action.payload.success; // Only set to true if success
        state.user = action.payload.success ? action.payload.user : null;
      })
      .addCase(loginUserAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload; // Capture login failure error message
      })

      // Logout action
      .addCase(logoutUserAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUserAction.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(logoutUserAction.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      })

      //check auth
      .addCase(checkAuthUserAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuthUserAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.success;
      })
      .addCase(checkAuthUserAction.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
