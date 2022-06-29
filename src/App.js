import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import './styles/App.scss';

import { useSelector } from 'react-redux';

function App() {

  // Import our show cart variable from our state slice
  const showCart = useSelector(state => state.toggle.showCart);

  return (
    <section className="backdrop">
      <Layout>
        { showCart && <Cart/> }
        <Products />
      </Layout>
    </section>
  );
}

export default App;
