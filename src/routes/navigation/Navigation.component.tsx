import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
} from "./navigation.style";
// import Signin from "../../components/sign-in-form copy/Sign-in.component";
import { useSelector, useDispatch } from "react-redux";
// import { CardContext } from "../../context/card.context";
import { selectIsCartOpen } from "../../store/Cart/cart.selector";
// import { signOutUser } from "../../utils/Firebase/firebase.utils";
import { signOutStart } from "../../store/user/user.action";
import CardIcon from "../../components/CardIcon/Card-Icon";
import CartDropdown from "../../components/Dropdown/Dropdown";
import { selectCurrentUser } from "../../store/user/user.selector";

const Navbar = () => {
  // const { currentUser } = useContext(UserContext);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  // const { isCardOpen } = useContext(CardContext);
  const isCardOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <i className="fas fa-crown" style={{ fontSize: "30px" }}></i>
        </LogoContainer>
        <NavLinksContainer>
          <Link className="Shop-link" to="Shop">
            <div style={{ color: "white" }}>Shop</div>
          </Link>
          {currentUser ? (
            <Link className="Signin-link" to="Signin">
            <div style={{ color: "white", cursor: "pointer" }}>
              <Link
                to="SignIn"
                style={{
                  color: "white",
                }}
                onClick={signOutUser}>
              Sign Out
              </Link>
            </div>
          </Link>
           
          ) : (
            <span
            className="SignIn"
            style={{ color: "white", cursor: "pointer" }}
          >
            <Link to="Signin" style={{ color: "white", cursor: "pointer" }}>
              Sign In
            </Link>
          </span>

            
          )}
          <CardIcon />
        </NavLinksContainer>
        {isCardOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
