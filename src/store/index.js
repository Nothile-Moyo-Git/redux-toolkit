// Create slice
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {  state.counter++; console.log(state.counter); },
        decrememt(state) {  state.counter--; },
        increase(state, action) { state.counter = state.counter + action.payload.amount; },
        decrease(state, action) { state.counter = state.counter - action.payload.amount; },
        toggleCounter(state) { state.showCounter = !state.showCounter; }
    }
});

// Creating our redux store based on our reducer function, our state will now be stored there
const store = configureStore({
    reducer: { counter: counterSlice.reducer }
});

// Export out store so we can subscribe components to it. Subscribed components re-evaluate with the previous state and action passed to it
export default store;
export const counterActions = counterSlice.actions;
