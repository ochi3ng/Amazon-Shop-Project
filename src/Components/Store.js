import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './CounterSlice';

 export default configureStore({
  reducer:{
    counter:productsReducer,
  },
 })