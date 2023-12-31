import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ShopWindow, CartPlusFill, PatchQuestion } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" className="py-3">
    <Row className="align-middle text-center">
      <Col xs={4}>
        <CartPlusFill size={100} className="whiteIcon" />
        <h1>Shopping Cart</h1>
        <h5>Add items to put in the cart</h5>
      </Col>

      <Col xs={4}>
        <Link to="/feedback">
          <PatchQuestion size={100} />
          <h1>Feedback</h1>
        </Link>
      </Col>

      <Col xs={4}>
        <Link to="/market">
          <ShopWindow size={100} className="whiteIcon" />
          <h1>UH Marketplace</h1>
        </Link>
      </Col>
    </Row>
  </Container>
);

export default Landing;
