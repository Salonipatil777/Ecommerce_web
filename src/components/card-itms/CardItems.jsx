import React from "react";
import "./CardItems.styles.css";

export default function CardItems({ CardItems }) {
  const { name, imageUrl, price, quantity } = CardItems;
  return (
    <div className="item-container">
      <img src={imageUrl} alt={`${name}`} id='img' />
      <div className="item-details">
        <span className="name">{name}</span>
        <span id="price">{quantity}x${price}</span>
      </div>
    </div>
  );
}



// import { FC } from 'react';

// import { CartItemContainer, ItemDetails } from './CardItems.styles';

// import { CartItem as TCartItem } from '../../store/Cart/cart.types';

// type CartItemProps = {
//   cartItem: TCartItem;
// };

// const CartItem: FC<CartItemProps> = ({ cartItem }) => {
//   const { name, imageUrl, price, quantity } = cartItem;
//   return (
//     <CartItemContainer>
//       <img src={imageUrl} alt={`${name}`} />
//       <ItemDetails>
//         <span>{name}</span>
//         <span>
//           {quantity} x ${price}
//         </span>
//       </ItemDetails>
//     </CartItemContainer>
//   );
// };

// export default CartItem;