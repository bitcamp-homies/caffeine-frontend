//@ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

export const cafeListSlice = createSlice({
  name : "cafeList",
  initialState : { 
    value : []
  },
  reducers : {
    setCafeList : ( state, action ) => {
      state.value = action.payload
    },
  },
});

export const { setCafeList } = cafeListSlice.actions;
export default cafeListSlice.reducer;