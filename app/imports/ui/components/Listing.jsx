import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Listing = ({ listing }) => (
  <Card className="h-100 w-100">
    <Card.Header>
      <div className="d-flex justify-content-center">
        <Image className="d-flex justify-content-center" src={listing.image} width={100} />
      </div>
      <div className="d-flex justify-content-center">
        <Card.Title>{listing.title}</Card.Title>
      </div>
      <div>
        <div className="d-flex justify-content-evenly">
          <Card.Subtitle>${listing.price}</Card.Subtitle>
          <Card.Subtitle>{listing.category}</Card.Subtitle>
        </div>
      </div>
    </Card.Header>
    <Card.Body>
      <Card.Title>{listing.description}</Card.Title>
      <div className="d-flex justify-content-center">
        <Card.Subtitle>Condition: {listing.condition}</Card.Subtitle>
      </div>
      <Card.Text>Offered by {listing.owner}</Card.Text>
      <Card.Subtitle>
        <Link to={`/edit/${listing._id}`}>Edit my Listing</Link>
      </Card.Subtitle>
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
    category: PropTypes.string,
    condition: PropTypes.string,
    owner: PropTypes.string,
    isApproved: PropTypes.string,
    isAvailable: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Listing;
