import Card from '../UI/Card';
import './Cart.scss';
import CartItem from './CartItem';

import { useSelector } from 'react-redux';

const Cart = (props) => {

  // import our cart items
  const items = useSelector(state => state.cart.cartItems);

  const testItem = {title: items.testItem.name, quantity: items.testItem.quantity, total: items.testItem.total, price: items.testItem.price};

  // Dummy data which we will use when we go back
  // const dummyItem = {title: 'Test Item', quantity: 3, total: 18, price: 6};

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
