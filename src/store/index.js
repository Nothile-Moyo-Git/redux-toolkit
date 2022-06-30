// Importing our redux toolkit library
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Setting up our initial cart state
const initialCartState = { 
    total : 0, 
    cartItems : {
        testItem: {name: 'Test Item', price: 6, quantity: 3, total: 18}
    } 
};

// Setting up our toggle slice
const initialToggleState = {
    showCart : false,
}

const initialItemsState = {
    items : [
        {
            name: 'Test Item', 
            price: 6, 
            description: 'This is a first product, amazing!'
        }
    ]
}

// Creating our cart slice
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        setTasks(state, action){ state.cartItems = action.payload.items; },
        increment(state){ 
            state.cartItems.testItem.quantity++;
            state.cartItems.testItem.total += state.cartItems.testItem.price;
        },
        decrement(state){
            state.cartItems.testItem.quantity--; 
            state.cartItems.testItem.total -= state.cartItems.testItem.price;            
        },
        addToCart(state){
            state.cartItems.testItem.quantity++;
            state.cartItems.testItem.total += 6;                        
        }
    }   
});

// Creating our toggle button slice
const toggleSlice = createSlice({
    name: 'toggle',
    initialState: initialToggleState,
    reducers: {
        showCart(state){ state.showCart = !state.showCart; }
    }
});

// Creating our items slice ( for updates )
const itemSlice = createSlice({
    name: 'items',
    initialState: initialItemsState,
    reducers: {
        update(state, action){ state.items = action.payload.items; }
    }

});

// Creating our store
const store = configureStore({
    reducer: {
        'cart' : cartSlice.reducer,
        'toggle' : toggleSlice.reducer,
        'items' : itemSlice.reducer
    }
});


// Exporting our store and our actions for our reducers
export default store;
export const cartActions = cartSlice.actions;
export const toggleActions = toggleSlice.actions;
export const itemActions = itemSlice.actions;