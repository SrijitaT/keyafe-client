import { useState } from "react";
import "./checkout.styles.scss";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "bootstrap/dist/css/bootstrap.css";
import { Table } from "react-bootstrap";

const CheckoutPage = () => {
  let [headers, setHeaders] = useState([
    "Product",
    "Description",
    "Quantity",
    "Price",
    "Remove",
  ]);
  let total = useSelector(selectCartTotal);
  let cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <Table responsive>
          <thead>
            <tr>
              {headers.map((h, index) => (
                <th key={index}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem, idx) => (
            <CheckoutItem key={idx} cartItem={cartItem} />
            ))}
          </tbody>
        </Table>
        <div className="total">
          {" "}
          <span>TOTAL: &#8377;{total}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
