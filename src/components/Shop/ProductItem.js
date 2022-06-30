import Card from '../UI/Card';
import './ProductItem.scss';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store';

const ProductItem = (props) => {
  // Pulling the data from Products list
  const { title, price, description } = props;

  // Creating our dispatch pointer in order to update 
  const dispatch = useDispatch();

  // Add to cart handler
  const addToCartHandler = (event) => {
    event.preventDefault();
    dispatch( cartActions.addToCart() );
  }

  return (
    <li className="item">
      <Card>
        <header>
          <h3>{title}</h3>
          <div className="price">${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className="actions">
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
