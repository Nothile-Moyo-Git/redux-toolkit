import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartIsVisible: false, };

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers:{
        toggle(state){ state.cartIsVisible = !state.cartIsVisible; },
        setFalse(state){ state.cartIsVisible = false; }
    }
});

export default uiSlice;
export const uiActions = uiSlice.actions;