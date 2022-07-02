// Importing our redux toolkit library
import { configureStore } from '@reduxjs/toolkit';

// Import our ui slice data
import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

// Creating our store
const store = configureStore({
    reducer: {
        'ui' : uiSlice.reducer,
        'cart' : cartSlice.reducer
    }
});


// Exporting our store and our actions for our reducers
export default store;