import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:4000/api/v1";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const authLogin = createAsyncThunk('auth/login', async (loginData)=> {
    const config = {
        method:'POST',
        body:JSON.stringify({...loginData}),
        headers: myHeaders
    }
    /*const data = await fetch('https://fakestoreapi.com/auth/login', {
        method:'POST',
        body:JSON.stringify({
            username: "mor_2314",
            password: "83r5^_"
        })
    });*/
    const data = await fetch(API_URL + "/login", config);
    console.log(data);
    const result = await data.json();
    console.log(result);
    return result;
});

export const authRegister = createAsyncThunk('auth/Register', async (registerData)=> {
    const config = {
        method:'POST',
        body:JSON.stringify({...registerData}),
        headers: myHeaders
    }

    console.log(config)

    /*const data = await fetch('https://fakestoreapi.com/auth/login', {
        method:'POST',
        body:JSON.stringify({
            username: "mor_2314",
            password: "83r5^_"
        })
    });*/
    const data = await fetch(API_URL + "/register", config);
    console.log(data);
    const result = await data.json();
    console.log(result);
    return result;
});

export const authLoading = (state, action) => {
    state.status = 'loading'
}

export const authFulfilled = (state, action) => {
    state.status = 'idle';
    state.user = action.payload.status ? action.payload.response : null;
    state.message = action.payload.status ? action.payload.message : null;
    state.isAuthorized = action.payload.status ? true : false;
    if (action.payload.status) {
        localStorage.setItem("user", JSON.stringify(action.payload));
    }       
}

export const authRejected = (state, action) => {
    state.status = 'Failed';
    state.error = 'something went wrong';
}

export const authRegisterLoading = (state, action) => {
    state.status = 'loading'
}

export const authRegisterFulfilled = (state, action) => {
    state.status = 'idle';
    state.message = action.payload.message;
    console.log("++++++++++++++++", action.payload);
    //state.isAuthorized = true;
}

export const authRegisterRejected = (state, action) => {
    state.status = 'Failed';
    state.error = 'something went wrong';
}
