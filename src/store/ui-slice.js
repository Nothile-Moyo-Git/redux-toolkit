import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartIsVisible: false, notification: null };

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers:{
        toggle(state){ state.cartIsVisible = !state.cartIsVisible; },
        setFalse(state){ state.cartIsVisible = false; },
        showNotification(state, action){
            state.notification = { 
                status: action.payload.status,  
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
});

export default uiSlice;
export const uiActions = uiSlice.actions;