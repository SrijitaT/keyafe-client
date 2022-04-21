import React, { useState } from "react";
import "./productDetails.styles.scss";
import { FaStar, FaStarHalfAlt, FaCartPlus } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Row, Container, Button, Card, Form } from "react-bootstrap";
import "animate.css";
import ProductPageDateModule from "../../components/product-page-date-module/ProductPageDateModule";

const ProductDetails = () => {
  const [pin, setPin] = useState(null);
  const [shake, setShake] = useState(false);
  const changePin = (e) => {
    setPin(e.target.value);
 
  };


  const display = () => {
    if (pin === null || pin === '') {
      setShake(true);
    } 
   setTimeout(()=> {setShake(false)},3000);
  };
  return (
    <Row>
      <Col className="leftSide" lg={6}>
        <div className="imgdiv">
          <img
            src="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="desc"
          />
        </div>
      </Col>
      <Col className="rightSide" lg={6}>
        <Container>
          <Row className="prodDetail">
            <Col className="rightItem">
              <div className="prod-name">
                <h2>Black Forest Cake</h2>
                <div class="prod-ratings">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <span>20 ratings</span>
                  <span>5 reviews</span>
                </div>
                <div class="price-tag">
                  <p>Rs 595</p>
                </div>
                <div className=" product-variant">
                  <p>Select variant</p>
                </div>
              </div>
            </Col>
            <Col className="rightItem-Card">
              <Card className="product-card-body" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                />
                <Card.Body>
                  <Card.Text className="card-texts">
                    <p>1 Pound </p>
                    <p> 595 INR </p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="product-card-body" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                />
                <Card.Body>
                  <Card.Text className="card-texts">
                    <p>2 Pound(s) </p>
                    <p> 1170 INR </p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="product-card-body" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                />
                <Card.Body>
                  <Card.Text className="card-texts">
                    <p>3 Pound(s ) </p>
                    <p> 1750 INR </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col className="rightItem">
              <div
                className={
                  !shake
                    ? "delivery-location animate__animated"
                    : "delivery-location animate__animated animate__shakeX"
                }>
                <input
                  className="pincode-input "
                  id="pin-input"
                  type="text"
                  placeholder="Pincode"
                  onChange={changePin}
                  value={pin}
                />
                <Button
                  className={
                    !pin
                      ? "btn pincode-button animate__animated "
                      : "btn pincode-button animate__animated d-none"
                  }
                  variant="outlined">
                  Check
                </Button>

                <p
                  className={
                    pin
                      ? "btn pincode-text animate__animated d-block"
                      : "btn pincode-text animate__animated "
                  }>
                  Available
                </p>
              </div>
              {!pin? null: <ProductPageDateModule /> }
              <div className="description-title">
                <h3>Description</h3>
              </div>
              <div className="description-text">
                This classic round Black Forest cake makes a highly tempting
                gift. It weighs half kg, and is stuffed with whipped cream and
                studded with cherries. Its eggless version is also available.
                You can give this gift on any joyous occasion. <br />
                Key attributes :
              </div>
              <ul className="prod-attributes">
                <li> Weight : 0.5 kg </li>
                <li>Flavours : Black Forest</li>
                <li>Shape : Round</li>
              </ul>

              <Form.Select className="flavour-form">
                <option>Want some other flavour? Select from below</option>
                <option value="1">Chocolate</option>
                <option value="2">Strawberry</option>
                <option value="3">Vanilla</option>
                <option value="4">Rasmalai</option>
                <option value="5">Blueberry</option>
                <option value="6">Butterscotch</option>
              </Form.Select>
              {/* add dropdown "Want some other flavour? Select from below" */}
              <div className="border-none">
                <input type="text" placeholder="Message on cake" />
              </div>
              <button className="btn add-to-cart" onClick={display}>
                <span className="cart-span">Add To Cart</span>
                <FaCartPlus className="icon-add-cart" />
              </button>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default ProductDetails;
