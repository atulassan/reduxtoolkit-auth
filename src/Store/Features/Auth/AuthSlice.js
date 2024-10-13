import { createSlice } from "@reduxjs/toolkit";
import {authLogin, authLoading, authFulfilled, authRejected, authRegister, authRegisterLoading, authRegisterFulfilled, authRegisterRejected } from "./authActions";

const initialState = {
    status: 'idle',
    error: null,
    isAuthorized: false, 
    message: null
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(authLogin.pending, authLoading)
        .addCase(authLogin.fulfilled, authFulfilled)
        .addCase(authLogin.rejected, authRejected)
        .addCase(authRegister.pending, authRegisterLoading)
        .addCase(authRegister.fulfilled, authRegisterFulfilled)
        .addCase(authRegister.rejected, authRegisterRejected)
    }
})

export default AuthSlice.reducer;