import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import { Listings } from '../../api/listing/Listing';
import ListingAdmin from '../components/ListingAdmin';
/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListListingsAdmin = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, listings } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Listings.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const listingItems = Listings.collection.find({}).fetch();
    return {
      listings: listingItems,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={20}>
          <Col className="text-center">
            <h2>View Listings (Admin)</h2>
          </Col>
          <Row xs={3} md={3} lg={3} className="g-4">
            {listings.map((listing) => (<Col key={listing._id}><ListingAdmin listing={listing} /></Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListListingsAdmin;
