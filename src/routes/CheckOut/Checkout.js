import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/Cart/cart.selector";
import CheckoutItem from "../checkoutItems/Checkout-Items.jsx";
import "./Checkout.css";
import PaymentForm from "../../components/Payment-Form/Payment-Form.component";

const Checkout = () => {
  // const {cartItems,cartTotal}=useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <div className="checkout2-container">
      <div className="checkout-header">
        <div className="header-block">
          <span
            style={{
              marginleft: "20px",
            }}>
            product
          </span>
        </div>
        <div className="header-block">
          <span>Discription</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block" style={{ paddingLeft: "0px" }}>
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        // const{id,name,quantity}=cartItem;

        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total:${cartTotal}</span>
      <PaymentForm />
    </div>
  );
};
export default Checkout;
