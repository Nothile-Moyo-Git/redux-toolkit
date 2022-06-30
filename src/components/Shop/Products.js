import ProductItem from './ProductItem';
import './Products.scss';

import { useSelector } from 'react-redux';

const Products = (props) => {

  // Get our items store so we can display these in products
  const items = useSelector(state => state.items);
  const currentItem = items.items[0];

  // dummy item
  // dummyItem = {title: 'Test', price: 6, description: 'This is a first product - amazing!'};

  return (
    <section className="products">
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title={ currentItem.name }
          price={ currentItem.price }
          description={ currentItem.description }
        />
      </ul>
    </section>
  );
};

export default Products;
