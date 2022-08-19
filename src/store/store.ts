//@ts-nocheck
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userLocation';
import cafeListReducer from './cafeListBoundary';

export default configureStore({
  reducer : {
    user: userReducer,
    cafeList: cafeListReducer
  },
})