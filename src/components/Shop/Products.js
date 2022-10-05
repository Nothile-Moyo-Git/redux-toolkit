import ProductItem from './ProductItem';
import './Products.scss';

// Dummy array that we're using to define our products, we could use a request to get them from a database but this project is about understanding redux
const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'Berserk',
    price: 6,
    description: 'An incredible dark fantasy!',
  },
  {
    id: 'p2',
    title: 'Horus Rising',
    price: 8,
    description: 'At the dawn of the 31st millennium, the Imperium of Man has reasserted its dominance over the galaxy'
  }
];

const Products = (props) => {

  return (
    <section className="products">
      <h2>Buy your favorite products</h2>
      <ul>
        { DUMMY_PRODUCTS.map((product) => {
          return( 
            <ProductItem
              key={ product.id }
              id={ product.id }
              title={ product.title }
              price={ product.price }
              description={ product.description }
            />
          );
        }) }
      </ul>
    </section>
  );
};

export default Products;
