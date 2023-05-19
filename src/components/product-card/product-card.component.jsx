import Button from "../button/button.component";
import "./product-card.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../Store/Cart/Cart.selector";
import { addItemToCart } from "../../Store/Cart/Cart.action";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price} Rs.</span>
        {/* <span className="price"> Rs.</span> */}
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
