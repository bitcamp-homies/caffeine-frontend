//store/index.js
// @ts-nocheck
import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
  } from "@reduxjs/toolkit";
  import { todoReducer } from "./modules/todoReducer";
  
  const reducer = combineReducers({ todoReducer: todoReducer.reducer });
  
  export default configureStore({
    reducer,
    middleware: [...getDefaultMiddleware()],
  });