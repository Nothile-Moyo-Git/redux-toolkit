import './styles/App.scss';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notifications';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendCartData, fetchCartData } from './store/cart-actions';

// Skip our initial run so we don't send our empty cart data to the database
let isInitial = true;
let hideNotification;

function App() {

  const dispatch = useDispatch(); 

  // Import our show cart variable from our state slice
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector( state => state.cart );

  // Get our notification information in order to pass through
  let notification = useSelector( state => state.ui.notification );

  // Show notification state in order to hide notifications 3 seconds after rendering
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {

    // Fetch our initial cart from our database, if it's empty, we create an empty array
    dispatch( fetchCartData() );

  },[dispatch]);

  useEffect(() => {

    // Don't update the cart on page load since we would override our initial cart
    if(isInitial){
      isInitial = false;
      return;
    }

    // If it's not our initial render and the cart changes, make an API call to update the firestore database too to reflect this
    if(cart.changed){
      dispatch( sendCartData(cart) );
    }

    // If we currently have a notification visible, end it early so we can display a new notification
    clearTimeout(hideNotification);

    // Show our notification
    setShowNotification(true);
    
    // Hide our notification after 3 seconds
    hideNotification = setTimeout(() => {setShowNotification(false)}, 3000);

  },[cart, dispatch]);

  return (
    <section className="backdrop">
      {
        (notification && showNotification) && 
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
