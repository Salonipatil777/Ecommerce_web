import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/Cart/cart.selector";

import { useNavigate } from "react-router-dom";
import CardItems from "../card-itms/CardItems";
import {
  DropdownContainer,
  EmptyMsg,
  DropdownItems,
  DropdownBtn,
} from "./Dropdown.style";

const CartDropdown = () => {
  const cardItems = useSelector(selectCartItems);
  const navigate = useNavigate();


  const goToCheckoutHandler = () => {
    navigate("/Checkout");
  };
  return (
    <DropdownContainer>
      <DropdownItems>
        {cardItems.length ? (
          cardItems.map((item) => <CardItems key={item.id} CardItems={item} />)
        ) : (
          <EmptyMsg>Card is Empty</EmptyMsg>
        )}
      </DropdownItems>
      <DropdownBtn
        onClick={goToCheckoutHandler}
        id="D-btn"
      >
        Go To Chekout
      </DropdownBtn>
    </DropdownContainer>
  );
};

export default CartDropdown;
