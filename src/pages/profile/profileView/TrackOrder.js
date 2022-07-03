import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Card } from "react-bootstrap";
import ProfileMenu from "../ProfileMenu";
import "./trackorder.scss";

const TrackOrder = () => {
  return (
    <section className="main-section-wrapper">
      <Col lg={3}>
        <Card className="left-trackorder-section">
          <ProfileMenu />
        </Card>
      </Col>
      <Col lg={8}>
        <Card className="right-trackorder-section">
          <div className="track-history">
            <p>Preparing Order</p>
            <p>Order on it's way</p>
            <p>Order Delivered</p>
          </div>
        </Card>
      </Col>
    </section>
  );
};

export default TrackOrder;
