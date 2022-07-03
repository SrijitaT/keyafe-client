import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Card } from "react-bootstrap";
import ProfileMenu from "../ProfileMenu";
import "./orderhistory.scss";

const OrderHistory = () => {
  return (
    <section className="main-order-wrapper">
      <Col lg={3}>
        <Card className="left-order-section">
          <ProfileMenu />
        </Card>
      </Col>
      <Col lg={8}>
        <Card className="right-order-section">
          <h6>Orders</h6>
          <div className="order-history">
            <p>No recent orders found</p>
          </div>
        </Card>
      </Col>
    </section>
  );
};

export default OrderHistory;
