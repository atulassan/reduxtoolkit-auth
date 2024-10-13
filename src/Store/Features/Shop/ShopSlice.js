import { createSlice } from "@reduxjs/toolkit";
import { getProducts, productsPending, productsFulfilled,  productsRejected } from "./productsActions";

const initialState = {
    status:"idle",
    data:[],
    error:null
}

export const shopSlice = createSlice({
    name: 'shop',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getProducts.pending, productsPending)
        .addCase(getProducts.fulfilled, productsFulfilled)
        .addCase(getProducts.rejected, productsRejected)
    }
})

export default shopSlice.reducer;

