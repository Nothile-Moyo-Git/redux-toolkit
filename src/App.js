import './styles/App.scss';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notifications';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendCartData, fetchCartData } from './store/cart-actions';

let isInitial = true;

function App() {

  const dispatch = useDispatch(); 

  // Import our show cart variable from our state slice
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector( state => state.cart );
  let notification = useSelector( state => state.ui.notification );

  console.log(notification);

  setTimeout(() => {
    notification = null;
  }, 3000);

  useEffect(() => {

    dispatch( fetchCartData() );

  },[dispatch]);

  useEffect(() => {

    if(isInitial){
      isInitial = false;
      return;
    }

    if(cart.changed){
      dispatch( sendCartData(cart) );
    }

  },[cart, dispatch]);


  return (
    <section className="backdrop">
      {
        notification != null && 
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
