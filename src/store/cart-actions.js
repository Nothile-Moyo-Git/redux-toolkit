import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

// We run this the first time we start the app, and we replace the cart we have in our redux store with it once it's completed
export const fetchCartData = () => {

    return async (dispatch) => {

        // Fetch our data from the database, we have the dispatch action which we use to update our UI and our cart.
        const fetchData = async () => {

            const response = await fetch('https://redux-toolkit-1c97f-default-rtdb.europe-west1.firebasedatabase.app/cart.json');

            if(!response.ok){
                throw new Error('Could not fetch data');
            }

            const result = await response.json();

            return result;

        };

        try{

            // Execute the API call and get the result
            const cartData = await fetchData();

            // Replace the cart in our redux store, if it's empty, then return an empty cart. This is to help prevent potential errors
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));

        }catch(error){

            // If our API call fails, then we show a notification on the top of the page which shows that it failed.
            dispatch(
                uiActions.showNotification({
                  status: 'error',
                  title: 'Error',
                  message: 'Fetching cart data failed'
                })
            );

        }

    }
};

// Creating our action creator, since it's not a reducer in redux we can perform async tasks here
export const sendCartData = (cart) => {

    return async (dispatch) => {

        // Show a notification which shows that the request is being performed
        dispatch( uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!',
        }) );

        // Update our firestore database, we do a PUT request because we want to create a cart if there isn't one, or update the cart if it already exists
        const sendRequest = async () => {

            // You know how it is :)
            const response = await fetch('https://redux-toolkit-1c97f-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity
                }),
            });
    
            if(!response.ok){
                throw new Error('Sending cart data failed');
            }

        };

        try{
            // Execute our PUT request
            await sendRequest();

            // If our API call is successful, show that it was successful in our notifications
            dispatch( uiActions.showNotification({
                status: 'success',
                title: 'Success',
                message: 'Sent cart data successfully',
            }) );

        }catch(error) {

            // If our API call failed, show that it failed in our notifications
            dispatch(
                uiActions.showNotification({
                  status: 'error',
                  title: 'Error',
                  message: 'Cannot resolve fetch call'
                })
            );

            throw new Error(error);
        }

    };
};
