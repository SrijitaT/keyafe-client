import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
const MenuItem = ({
  title,
  name,
  img_url,
  size,
  linkUrl,
  cat_id,
  history,
  match,
}) => {
  return (
    <Col xs={12} lg={`${size}`}>
      <div className={`menu-item`}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${img_url})` }}
        />
        <div
          className="content"
          onClick={() =>
            history.push({ pathname: `${match.url}${linkUrl}`, cat_id })
          }>
          <h1 className="title">{name}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </Col>
  );
};
export default withRouter(MenuItem);
