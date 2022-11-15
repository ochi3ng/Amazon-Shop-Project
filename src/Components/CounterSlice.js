import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
 
export const getPosts=createAsyncThunk("posts/getPosts",async()=>{
 return fetch("https://fakestoreapi.com/products/").then((res)=>res.json()

 ); 
});

const counterSlice=createSlice(({
  name:"counter",
  initialState:{
    posts: [],
    loading: false,
    cart:[],
},
reducers: {
AddToCart: (state, action) => {
state.cart.push(action.payload)}
},
extraReducers:{
  [getPosts.pending]:(state,action)=>{
    state.loading=true;
  },
  [getPosts.fulfilled]:(state,action)=>{
    state.loading=false;
    state.posts=action.payload
    
  },
  [getPosts.rejected]:(state,action) => {
    state.loading=false;
  },
},
}));
export const {AddToCart}=counterSlice.actions
export default counterSlice.reducer