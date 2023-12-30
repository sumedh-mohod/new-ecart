import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("login", async (params) => {
  try {
    const res = axios.post("https://dummyjson.com/auth/login", params);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const logout = () => {
  localStorage.removeItem("userToken");
  localStorage.clear();
};

const initialState = {
  loggedIn: false,
  status: null,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, { type, payload }) => {
      console.log("pending");
      state.status = "pending";
      state.loggedIn = false;
    });
    builder.addCase(login.fulfilled, (state, { type, payload }) => {
      console.log("fulfilled");
      state.status = "fullfiled";
      state.loggedIn = true;
    });
    builder.addCase(login.rejected, (state, { type, payload }) => {
      console.log("rejected");
      state.status = "rejected";
      state.loggedIn = false;
    });
  },
});

export default auth.reducer;
