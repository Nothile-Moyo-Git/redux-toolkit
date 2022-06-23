import Cart from './components/Cart/Cart';
import IntroCard from './components/Layout/IntroCard';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import './styles/App.scss';

function App() {
  return (
    <section className="backdrop">
      <Layout>
        <IntroCard/>
        <Cart />
        <Products />
      </Layout>
    </section>
  );
}

export default App;
