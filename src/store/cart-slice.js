import { createSlice } from "@reduxjs/toolkit";

// Create initial state of our slice. 
// A slice is a collection of redux reducer logic, we set the initial state that we pass in our provider
const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    changed: false
};

// Our cart slice, it sets initial state, and we set our reducers here.
// Since we're using redux toolkit, we can mutate our state but with regular redux we can't do this as this triggers a re-render
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        replaceCart(state, action){

            // Replace the cart data in our redux store once we do the API call the first time we run the app
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;

        },
        addItemToCart(state, action){ 

            // Get the cart item, either by a prop passed through to CartItem.js, or from ProductItem which gets its value from Products.js
            // In Products there is a dummy array which has the data which gets passed through to here
            const newItem = action.payload;

            // Find the item based on the item ID in our redux store
            const existingItem = state.items.find( item => item.id === newItem.id );
            state.totalQuantity++;

            // Set cart changed to true, which allows us to update our FireStore database
            state.changed = true;

            // If we don't have an item, add a new item to the array
            if( !existingItem ){
                state.items.push({ 
                    id: newItem.id, 
                    price: newItem.price, 
                    quantity: 1, 
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            }else{
                // If we alread have an item, increment what we already have
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }

        },
        removeItemFromCart(state, action){

            // Get the cart item, either by a prop passed through to CartItem.js, or from ProductItem which gets it's value from Products
            // In Products there is a dummy array which has the data which gets passed through to here
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            // Reduce total quantity of our items
            state.totalQuantity--;
           
            // Set cart changed to true, which allows us to update our FireStore database
            state.changed = true;

            // If we have only one item left, then we remove it from the array of our current items
            if (existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            }else{
                // If we have more than 1, then we decrement it, assuming the item exists. if not, we do nothing.
                // We could add a check here to make sure that our existing item isn't empty
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }

        },
    }
});


export default cartSlice;
export const cartActions = cartSlice.actions;
