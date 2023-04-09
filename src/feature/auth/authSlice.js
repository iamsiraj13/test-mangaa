import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import BASE_URL from "../../utils/config";

const getUserfromLocalStorage = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const userLocal = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  user: getUserfromLocalStorage,
  isError: false,
  isLoading: false,
  isSuccess: false,
  isAuthenticated: false,
  data: userLocal,
  message: "",
};
export const login = createAsyncThunk(
  "auth/login",
  async (userData, { dispatch }) => {
    dispatch(loginRequest);
    try {
      const response = await axios.post(`${BASE_URL}/login/`, userData);

      localStorage.setItem("token", response.data.token);
      dispatch(loginSuccess(response.data.token));
      window.location.href = "/";
    } catch (error) {
      dispatch(loginFail(error.non_field_errors));
    }
  }
);

// get user data
export const getCurrentUser = createAsyncThunk(
  "auth/getUser",
  async (_, { dispatch }) => {
    dispatch(getCurrentUserRequest());
    try {
      const response = await axios.get(`${BASE_URL}/user`, {
        headers: {
          Authorization: `token ${getUserfromLocalStorage}`,
        },
      });
      localStorage.setItem("user", JSON.stringify(response.data[0]));
      dispatch(getCurrentUserSuccess(response.data[0]));
    } catch (error) {
      dispatch(getCurrentUserFail(error.non_field_errors));
      console.log(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    loginFail: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isError = action.payload;
    },

    // get current user by token
    getCurrentUserRequest: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    getCurrentUserSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    },
    getCurrentUserFail: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFail,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserFail,
} = authSlice.actions;
export default authSlice.reducer;
