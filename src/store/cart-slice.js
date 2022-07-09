import { createSlice } from "@reduxjs/toolkit";

import { uiActions } from "./ui-slice";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItemToCart(state, action){ 

            const newItem = action.payload;
            const existingItem = state.items.find( item => item.id === newItem.id );

            if( !existingItem ){
                state.items.push({ 
                    id: newItem.id, 
                    price: newItem.price, 
                    quantity: 1, 
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            }else{
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }

            state.totalQuantity++;
        },
        removeItemFromCart(state, action){

            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            }else{
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }

            state.totalQuantity--;
        },
    }
});

// Creating our action creator, since it's not a reducer in redux we can perform async tasks here
const sendCartData = (cart, dispatchFunction) => {

    console.log(`called`);
    console.log(cart);

    return async (dispatch) => {

        dispatch( uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!',
        }) );

        const response = await fetch('https://redux-toolkit-1c97f-default-rtdb.europe-west1.firebasedatabase.app/cart-copy.json', {
            method: 'PUT',
            body: JSON.stringify(cart),
        });

        if(!response.ok){
            throw new Error('Sending cart data failed');
        }

        dispatch( uiActions.showNotification({
            status: 'success',
            title: 'Success',
            message: 'Sent cart data successfully',
        }) );

    };
};

export default cartSlice;
export const cartActions = cartSlice.actions;
export const updateCart = sendCartData;
