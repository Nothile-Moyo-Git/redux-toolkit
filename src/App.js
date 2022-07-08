import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notifications';
import './styles/App.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/ui-slice';

let isInitial = true;

function App() {

  const dispatch = useDispatch(); 

  // Import our show cart variable from our state slice
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector( state => state.cart );
  const notification = useSelector( state => state.ui.notification );

  useEffect(() => {

    const sendCartData = async () => {

      if(isInitial){
        isInitial = false;
        return;
      }

      // Dispatch our notification action when we do the intial check
      dispatch( uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      }) );

      // Create a PUT request which checks if this content exists, if it does, override it. If it doesn't, create it
      // We pass a json object through to the database by using JSON.stringify
      const response = await fetch('https://redux-toolkit-1c97f-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });

      // Throw an error if our request fails
      if(!response.ok){
        throw new Error('Sending cart data failed');
      }

      // Display a success notification
      dispatch( uiActions.showNotification({
        status: 'success',
        title: 'Success',
        message: 'Sent cart data successfully',
      }) );

    }

    sendCartData().catch(error => {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: error
        })
      );
    });

  },[cart, dispatch]);

  return (
    <section className="backdrop">
      {
        notification && 
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      }
      <Layout>
        <Cart showCart={showCart}/>
        <Products />
      </Layout>
    </section>
  );
}

export default App;
