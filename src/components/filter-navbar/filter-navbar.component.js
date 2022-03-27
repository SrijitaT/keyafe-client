import React from 'react';
import "./filter-navbar.styles.scss";
import Grid from "@material-ui/core/Grid";
import FilterCard from '../filter-card/filter-card.component';
import { Col, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

export default function FilterNavbar({hidden,setHidden}) {
    
  return (
      <>
<Row container spacing={2} className='filter-nav-container'>
  <Col item xs={6} md={2} lg={2} className="filter-btn">
    <div onClick={()=>setHidden(!hidden)}>Select Cake Type</div>
  </Col>
  <Col item xs={6} md={2} lg={2} className="filter-btn">
    <div onClick={()=>setHidden(!hidden)}>Select Weight</div>
  </Col>
  <Col item xs={6} md={2} lg={2} className="filter-btn">
    <div onClick={()=>setHidden(!hidden)}>Select Shape</div>
  </Col>
  <Col item xs={6} md={2} lg={2} className="filter-btn">
    <div onClick={()=>setHidden(!hidden)}>Select Flavour</div>
  </Col>
</Row>
</>
)
}
