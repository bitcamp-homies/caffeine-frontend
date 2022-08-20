//@ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

export const userLocationSlice = createSlice({
  name : "user",
  initialState : { value : {longitude : 0, latitude : 0}},
  reducers : {
    setCoord: ( state, action ) => {
      state.value = action.payload
    },
  },
});

export const { setCoord } = userLocationSlice.actions;
export default userLocationSlice.reducer;