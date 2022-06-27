// Importing our redux toolkit library
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Setting up our initial cart state
const initialCartState = { showCart : false, total : 0 };

// Creating our cart slice
const cart = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        toggle(state){ state.showCart = !state.showCart }
    }   
});

// Creating our store
const store = configureStore({
    reducer: {
        'cart' : cart
    }
});

export default store;