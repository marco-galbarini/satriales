import cart from '../cart.png';
import './CartWidget.css'

const CartWidget = () => {
  return (
    <>
      <img src={cart} alt="Shopping cart" onClick={() => console.log('clicked!')}/>
    </>
  );
}

export default CartWidget;