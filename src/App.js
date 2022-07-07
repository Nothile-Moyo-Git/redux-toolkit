import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import './styles/App.scss';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/ui-slice';

function App() {

  const dispatch = useDispatch(); 

  // Import our show cart variable from our state slice
  const showCart = useSelector(state => state.ui.cartIsVisible);

  const cart = useSelector( state => state.cart );

  useEffect(() => {

    const sendCartData = async () => {

      const response = await fetch('https://redux-toolkit-1c97f-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });

      if(!response.ok){
        throw new Error('Sending cart data failed');
      }

      const message = await response.json();
      const status = response.status;
      const title = response.statusText;

    }

    sendCartData();

  },[cart]);

  return (
    <section className="backdrop">
      <Layout>
        <Cart showCart={showCart}/>
        <Products />
      </Layout>
    </section>
  );
}

export default App;
