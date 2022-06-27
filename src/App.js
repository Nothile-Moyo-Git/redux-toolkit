import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import './styles/App.scss';
import store from '../src/store/index';

function App() {

  return (
    <section className="backdrop">
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </section>
  );
}

export default App;
