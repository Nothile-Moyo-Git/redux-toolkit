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

function App() {

  const dispatch = useDispatch(); 

  // Import our show cart variable from our state slice
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector( state => state.cart );
  let notification = useSelector( state => state.ui.notification );
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {

    dispatch( fetchCartData() );

  },[dispatch]);

  useEffect(() => {

    if(isInitial){
      isInitial = false;
      return;
    }

    setShowNotification(true);

    if(cart.changed){
      dispatch( sendCartData(cart) );
    }

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);


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
