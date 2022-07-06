import Card from '../UI/Card';
import './Cart.scss';
import CartItem from './CartItem';
import { uiActions } from '../../store/ui-slice';

import { useSelector, useDispatch } from 'react-redux';

const Cart = (props) => {

  // Get all items in our cart for a loop
  const cartItems = useSelector(state => state.cart.items);

  // If we have items in our cart and it's larger than 0 items, then show it
  const showCart = props.showCart && cartItems.length > 0;

  // Our dispatch function
  const dispatch = useDispatch();

  cartItems.length === 0 && dispatch( uiActions.setFalse() );

  return (
    <div className={`cart-wrapper ${!showCart && 'cart-wrapper--hidden'}`}>
      <Card className={`cart cart--thin ${!showCart && 'cart--hidden'}`}>
        <h2>Your Shopping Cart</h2>
        <ul>
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
