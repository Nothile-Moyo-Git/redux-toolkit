import Card from '../UI/Card';
import './Cart.scss';
import CartItem from './CartItem';

import { useSelector } from 'react-redux';

const Cart = () => {

  const cartItems = useSelector(state => state.cart.items);

  // Dummy data which we will use when we go back
  // const dummyItem = {title: 'Test Item', quantity: 3, total: 18, price: 6};

  return (
    <div className="cart-wrapper">
      <Card className="cart">
        <h2>Your Shopping Cart</h2>
        <ul>
          { /* <CartItem item={dummyItem}/> */ }
          { cartItems.map((item, index) => {
            return(
              <CartItem 
                item={{
                  id: item.id,
                  title: item.name,
                  price: item.price,
                  quantity: item.quantity,
                  total: item.totalPrice 
                }} 
                key={`${item.itemId}-${index}`}
              />);
          }) }
        </ul>
      </Card>
    </div>
  );
};

export default Cart;
