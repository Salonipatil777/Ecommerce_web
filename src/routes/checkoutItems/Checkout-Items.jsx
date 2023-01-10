

// import { useContext } from 'react';
// import { CartContext } from '../../context/cart.context';
import { useSelector,useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/Cart/cart.selector';
import { addItemToCart,clearItemFromCart,removeItemFromCart } from '../../store/Cart/cart.action';
import './Checout-Items.css';

const CheckOutItem=({cartItem})=>{
    const{name,imageUrl,price,quantity}=cartItem;
    const cartItems=useSelector(selectCartItems);
    const dispatch=useDispatch();

    // const{clearItemFromCart,addItemToCart,removeItemToCart}=useContext(CartContext);

    const clearItemHandler=()=>dispatch(clearItemFromCart(cartItems,cartItem));
    const addItemHandler=()=>dispatch(addItemToCart(cartItems,cartItem));
    const removeItemHandler=()=>dispatch(removeItemFromCart(cartItems,cartItem));
 
    return(
        <div className='CheckoutItems-container'>
          <div className='image2-container'>
            <img src={imageUrl} alt={`${name}`} className='img2'/>

          </div>
          <span className='name'>{name}</span>
          <span className='quantity'>
            <div className='arrow' onClick={removeItemHandler}>
               &#10094;
            </div>
          <span className='value'>{quantity}</span>  
            <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
          <span className='price'>{price}</span>
          <div className='remove-button' onClick={clearItemHandler}>
            &#10005;</div>
        </div>
    );
};
export default CheckOutItem;