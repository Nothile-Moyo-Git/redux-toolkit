import Card from '../UI/Card';
import './Cart.scss';
import CartItem from './CartItem';

import { useSelector } from 'react-redux';

const Cart = (props) => {

  // import our cart items
  const items = useSelector(state => state.cart.cartItems);

  const testItem = items.testItem;
  testItem.title = items.name;
  
  return (
    <div className="cart-wrapper">
      <Card className="cart">
        <h2>Your Shopping Cart</h2>
        <ul>
          { testItem.quantity > 0 && <CartItem item={testItem} /> }
        </ul>
      </Card>
    </div>
  );
};

export default Cart;
