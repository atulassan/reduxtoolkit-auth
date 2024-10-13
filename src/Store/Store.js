import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Features/Count/CountSlice';
import shopReducer from './Features/Shop/ShopSlice';
import authReducer from './Features/Auth/AuthSlice';

const store = configureStore({
    reducer: {
      counter: counterReducer,
      shop: shopReducer,
      auth: authReducer
    }
})

export default store;