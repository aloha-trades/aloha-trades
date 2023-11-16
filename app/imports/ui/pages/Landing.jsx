import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Calendar2CheckFill, FileEarmarkTextFill, PeopleFill } from 'react-bootstrap-icons';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" className="py-3">
    <Row className="align-middle text-center">
      <Col xs={4}>
        <PeopleFill size={100} />
        <h1>Multiple Users</h1>
        <h5>This e-commerce site enables any number of users to register and post their items for sale. Every user can see all the listings.</h5>
      </Col>

      <Col xs={4}>
        <FileEarmarkTextFill size={100} />
        <h1>Listing Details</h1>
        <h5>For each listing, you can save a title, description, images, and price.</h5>
      </Col>

      <Col xs={4}>
        <Calendar2CheckFill size={100} />
        <h1>Timestamped Messages</h1>
        <h5>Each time you open a listing you can make contact with the seller. The messages is saved along with a timestamp with the listing.</h5>
      </Col>

    </Row>
  </Container>
);

export default Landing;
