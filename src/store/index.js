// Importing our redux toolkit library
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Setting up our initial cart state
const initialCartState = { 
    total : 0, 
    items : {
        testItem: {name: 'Test Item', price: '6'}
    } 
};

// Setting up our toggle slice
const initialToggleState = {
    showCart : false,
}

// Creating our cart slice
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        setTasks(state, action){ state.items = action.payload.items }
    }   
});

const toggleSlice = createSlice({
    name: 'toggle',
    initialState: initialToggleState,
    reducers: {
        showCart(state){ state.showCart = !state.showCart }
    }
});

// Creating our store
const store = configureStore({
    reducer: {
        'cart' : cartSlice.reducer,
        'toggle' : toggleSlice.reducer
    }
});


// Exporting our store and our actions for our reducers
export default store;
export const cartActions = cartSlice.actions;
export const toggleActions = toggleSlice.actions;