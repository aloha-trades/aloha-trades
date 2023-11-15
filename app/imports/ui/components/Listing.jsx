import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Listing = ({ listing }) => (
  <Card className="h-100">
    <Card.Header>
      <Card.Title>{listing.title}</Card.Title>
      <Card.Subtitle>{listing.price}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Image src={listing.image} width={75} />
      <Card.Text>{listing.description}</Card.Text>
      <Card.Subtitle>{listing.name}</Card.Subtitle>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Listing.propTypes = {
  listing: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default Listing;
