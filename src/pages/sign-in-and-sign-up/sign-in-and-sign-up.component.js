import React from 'react';
import "./sign-in-and-sign-up.styles.scss";
import SignInPage from '../../components/sign-in/sign-in.component';
import SignUpPage from '../../components/sign-up/sign-up.component';
import { Row, Col } from 'react-bootstrap';

export default function SignInAndSignUpPage() {
  return (
    <Row className='sign-in-and-sign-up'>
      <Col sm={12} lg={6}>
      <SignInPage/>
      
      </Col>
      <Col sm={12} lg={6}>
        <SignUpPage/>
      </Col>
    </Row>
  )
}
