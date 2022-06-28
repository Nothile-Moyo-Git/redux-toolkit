import './CartButton.scss';

// Import selector and dispatch
import { useSelector, useDispatch } from 'react-redux';
import { toggleActions } from '../../store';

const CartButton = (props) => {

  // Import our cart
  const cart = useSelector(state => state.toggle);

  // Get our dispatcher so we can toggle the cart
  const dispatch = useDispatch();

  // Toggle the cart button
  const toggleHandler = (event) => {
    event.preventDefault();
    dispatch( toggleActions.showCart() );
  }

  return (
    <button onClick={toggleHandler} className="button">
      <span>My Cart</span>
      <span className="cart-desc">1</span>
    </button>
  );
};

export default CartButton;
