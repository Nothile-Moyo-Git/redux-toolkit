import './CartButton.scss';
import { uiActions } from '../../store/ui-slice';

// Import selector and dispatch
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {

  // Retrive our quantity for our cart
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  // Get our dispatcher so we can toggle the cart
  const dispatch = useDispatch();

  // Toggle the cart button
  const toggleCartHandler = (event) => {
    event.preventDefault();
    dispatch( uiActions.toggle() );
  }

  return (
    <button onClick={toggleCartHandler} className="button">
      <span>My Cart</span>
      <span className="cart-desc">{ cartQuantity }</span>
    </button>
  );
};

export default CartButton;
