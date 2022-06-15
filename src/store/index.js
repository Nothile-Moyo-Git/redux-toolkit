// Import redux
const redux = require('redux');

// Redux reducer function, works similarly to the useReducer hook in the sense that we have a previous state and pass an action to it
const reducerFunction = (state = { counter: 0 }, action) => {

    console.log('called');

    if( action.type === 'increment' ){
        return { counter: state.counter + 1 };
    }

    if( action.type === 'decrement' ){
        return { counter: state.counter - 1 };
    }

    return state;
}

// Creating our redux store based on our reducer function, our state will now be stored there
const store = redux.legacy_createStore(reducerFunction);

// Export out store so we can subscribe components to it. Subscribed components re-evaluate with the previous state and action passed to it
export default store;
