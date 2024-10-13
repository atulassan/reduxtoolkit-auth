import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk('products/get', async ()=> {
    const data = await fetch('https://fakestoreapi.com/products');
    const result = await data.json();
    console.log(result);
    return result;
})

export const productsPending = (state, action) => {
    state.status = "loading";
};
  
export const productsFulfilled = (state, action) => {
    state.status = "idle";
    const loadedPost = action.payload;
    state.data = loadedPost;
};
  
export const productsRejected = (state, action) => {
    state.status = "Failed";
    state.error = 'something went wrong';
};


