import './CartButton.scss';

const CartButton = (props) => {
  return (
    <button className="button">
      <span>My Cart</span>
      <span className="cart-desc">1</span>
    </button>
  );
};

export default CartButton;
