import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const ListingAdmin = ({ listing }) => (
  <Card className="h-100 w-100">
    <Card.Header>
      <Image src={listing.image} width={100} />
      <Card.Title>{listing.title}</Card.Title>
      <Card.Subtitle>{listing.price}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Title>{listing.title} by {listing.owner}</Card.Title>
      <Card.Subtitle>{listing.category}</Card.Subtitle>
      <Card.Subtitle>Condition: {listing.condition}</Card.Subtitle>
      <Card.Text>{listing.description}</Card.Text>
      <Card.Subtitle>{listing.isApproved}</Card.Subtitle>
      <Link to={`/review/${listing._id}`}>Review</Link>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
ListingAdmin.propTypes = {
  listing: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    condition: PropTypes.string,
    owner: PropTypes.string,
    isApproved: PropTypes.bool,
    _id: PropTypes.string,
  }).isRequired,
};

export default ListingAdmin;
