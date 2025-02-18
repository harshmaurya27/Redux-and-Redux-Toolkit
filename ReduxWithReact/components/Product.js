import { useDispatch } from "react-redux";
import { addCartItem } from "../slices/cartSlice";

export default function Product({ title, rating, price, imageUrl, productId }) {
  const dispatch = useDispatch();
  return (
    <div className="product">
      <div className="product-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{+rating} ★ ★ ★ ★</p>
        <p className="price">${price}</p>
      </div>
      <div className="cta-container">
        <button
          onClick={() => {
            dispatch(
              addCartItem({ title, rating, price, imageUrl, productId })
            );
          }}
        >
          Add to Cart
        </button>
        <button>Buy Now</button>
      </div>
    </div>
  );
}
