import { useDispatch , useSelector } from "react-redux";
import { addItemToCart } from "../../store/Cart/cart.action";
import { selectCartItems } from "../../store/Cart/cart.selector";

import "./Product-cards.css";


const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const cardItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
 
  const addProductToCard = ()=> dispatch(addItemToCart(cardItems,product))

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`}  id='cardImage'/>
      <div className="footer">
        <span className="name" style={{width:'194px'}}>{name}</span>
        <span className="price">{price}</span>
      </div>

      <button className="btn btn-outline-dark" onClick={addProductToCard} id="butn">Add TO Cart</button>
    </div>
  );
};

export default ProductCard;
