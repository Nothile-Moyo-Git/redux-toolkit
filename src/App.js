import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import './styles/App.scss';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';

function App() {

  // Import our show cart variable from our state slice
  const showCart = useSelector(state => state.ui.cartIsVisible);

  const cart = useSelector( state => state.cart );

  useEffect(() => {
    fetch('https://redux-toolkit-1c97f-default-rtdb.europe-west1.firebasedatabase.app/.json')
    .then(response => response.json())
    .then();
  },[]);

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
