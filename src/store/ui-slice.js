import { createSlice } from "@reduxjs/toolkit";

// Create initial state of our slice. 
// A slice is a collection of redux reducer logic, we set the initial state that we pass in our provider
const initialState = { cartIsVisible: false, notification: null };

// Our UI slice, it sets initial state, and we set our reducers here.
// Since we're using redux toolkit, we can mutate our state but with regular redux we can't do this as this triggers a re-render
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