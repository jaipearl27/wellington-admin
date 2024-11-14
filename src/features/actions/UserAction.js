import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";


export const getUsers = createAsyncThunk(
  "getUsers",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.get(
        `/game/users?page=${payload.page}&limit=${payload.limit}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response || "Something went wrong");
    }
  }
);


export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.delete(
        `/game/users/${payload.id}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response || "Something went wrong");
    }
  }
);

