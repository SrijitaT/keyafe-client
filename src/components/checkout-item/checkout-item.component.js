import "./checkout-item.styles.scss";
import { removeItem, adjustQuantity } from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";

function CheckoutItem({
  cartItem: { id, title, unit_price, img_url, quantity },
}) {
  let dispatch = useDispatch();
  return (
    <tr className="checkout-item">
      <td>
        <div className="image-container">
          <img src={img_url} alt="item" />
        </div>
      </td>

      <td>
        <span className="name">{title}</span>
      </td>
      <td>
        <span className="quantity">
          <div
            className="arrow"
            onClick={() =>
              dispatch(
                adjustQuantity(
                  { id, title, unit_price, img_url, quantity },
                  "decrement"
                )
              )
            }>
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <div
            className="arrow"
            onClick={() =>
              dispatch(
                adjustQuantity(
                  { id, title, unit_price, img_url, quantity },
                  "increment"
                )
              )
            }>
            &#10095;
          </div>
        </span>
      </td>
      <td>
        <span className="price">{unit_price}</span>
      </td>
      <td>
        <div
          className="remove-button"
          onClick={() =>
            dispatch(removeItem({ id, title, unit_price, img_url, quantity }))
          }>
          &#10005;
        </div>
      </td>
    </tr>
  );
}

export default CheckoutItem;
