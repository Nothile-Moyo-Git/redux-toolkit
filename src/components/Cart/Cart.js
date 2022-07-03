import Card from '../UI/Card';
import './Cart.scss';
import CartItem from './CartItem';

import { useSelector } from 'react-redux';

const Cart = (props) => {

  const cartItems = useSelector(state => state.cart.items);

  const showCart = props.showCart && cartItems.length > 0;

  // Dummy data which we will use when we go back
  // const dummyItem = {title: 'Test Item', quantity: 3, total: 18, price: 6};

  return (
    <div className={`cart-wrapper ${!showCart && 'cart-wrapper--hidden'}`}>
      <Card className={`cart ${!showCart && 'cart--hidden'}`}>
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
