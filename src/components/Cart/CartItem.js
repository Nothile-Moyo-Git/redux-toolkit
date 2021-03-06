import './CartItem.scss';
import { useDispatch } from 'react-redux';

// Import our cart actions
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  
  // Our current item
  const { title, quantity, total, price, id } = props.item;

  // Get our dispatch function in order to increment and decrement our quantities
  const dispatch = useDispatch();

  // Increment handler which calls our dispatch reducer
  const incrementHandler = (event) => {
    event.preventDefault();
    dispatch( cartActions.addItemToCart(props.item) );
  }

  // Decrement handler which calls our dispatch reducer
  const decrementHandler = (event) => {
    event.preventDefault();
    dispatch( cartActions.removeItemFromCart(id) );
  }

  return (
    <li className="item">
      <header>
        <h3>{title}</h3>
        <div className="price">
          ${total.toFixed(2)}{' '}
          <span className="itemprice">(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className="details">
        <div className="quantity">
          x <span>{quantity}</span>
        </div>
        <div className="actions">
          <button onClick={decrementHandler}>-</button>
          <button onClick={incrementHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
