import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getList = createAsyncThunk("GET_TODO", async () => {
  const response = await axios.get("http://localhost:8080/cafe/JoinAll");
  return response.data;
});


export const todoReducer = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getList.fulfilled]: (state, { payload }) => [...payload],
  },
});