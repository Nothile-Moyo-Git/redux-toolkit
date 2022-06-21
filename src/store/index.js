// Create slice
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };
const initialInputState = { email: '', password: '' };
const initialAuthState = { isAuthenticated: false };

// Creating a state slice for our counter on the app
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {  state.counter++; },
        decrement(state) {  state.counter--; },
        increase(state, action) { state.counter = state.counter + action.payload.amount; },
        decrease(state, action) { state.counter = state.counter - action.payload.amount; },
        toggleCounter(state) { state.showCounter = !state.showCounter; }
    }
});

// Creating a second state slice for our counter on the app
// We're only updating our state using a payload here since we're padding event.target.value and not an object
const inputSlice = createSlice({
    name: 'input',
    initialState: initialInputState,
    reducers: {
        updateEmail(state, action){ state.email = action.payload; },
        updatePassword(state, action){ state.password = action.payload; }
    }
});

// Creating a third state slice for our authentication
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state){ state.isAuthenticated = true; },
        logout(state){ state.isAuthenticated = false; }
    }
});

// Creating our redux store based on our state slices. We can reference these using useSelector
const store = configureStore({
    reducer: { 
        counter: counterSlice.reducer,
        input: inputSlice.reducer,
        auth: authSlice.reducer 
    }
});

// Export out store so we can subscribe components to it. Subscribed components re-evaluate with the previous state and action passed to it
export default store;
export const counterActions = counterSlice.actions;
export const inputActions = inputSlice.actions;
export const authActions = authSlice.actions;
