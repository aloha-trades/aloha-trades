import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import { Listings } from '../../api/listing/Listing';
import ListingMarket from '../components/ListingMarket';
/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const MarketListings = () => {

  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, listings } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Listing documents.
    const subscription = Meteor.subscribe(Listings.notByOwner);
    // const subscription2 = Meteor.subscribe(Notes.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Listings documents
    const listingItems = Listings.collection.find({}).fetch();
    // get the note documents
    // const noteItems = Notes.collection.find({}).fetch();
    return {
      listings: listingItems,
      // notes: noteItems,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={20}>
          <Col className="text-center">
            <h2>View Listings</h2>
          </Col>
          <Row xs={3} md={3} lg={3} className="g-4">
            {listings.map((listing) => (<Col key={listing._id}><ListingMarket listing={listing} /></Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default MarketListings;
