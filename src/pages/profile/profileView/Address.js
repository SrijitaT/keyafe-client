import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Row, Card, Button } from "react-bootstrap";
import ProfileMenu from "../ProfileMenu";
import "./address.scss";

const Address = () => {
  return (
    <div>
      <section className="main-address-wrapper">
        <Col lg={3}>
          <Card className="left-address-section">
            <ProfileMenu />
          </Card>
        </Col>
        <Col lg={8}>
          <Card className="right-address-section">
            <h6>Saved Address</h6>
           <button className="add-address">Add New Address</button>
            <br />
            <div className="address-history">
              <input type="checkbox" className="checkbox-round" />
              <div className="saved-address">
                <p>246/180, Sahid Ganesh Dutta Road</p>
                <p>Kolkata - 700051</p>
                <p>West Bengal, India</p>
              </div>
            </div>
          </Card>
        </Col>
      </section>
    </div>
  );
};

export default Address;
