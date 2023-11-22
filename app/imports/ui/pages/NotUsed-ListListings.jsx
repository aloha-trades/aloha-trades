import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Stuffs } from '../../api/stuff/Stuff';
import LoadingSpinner from '../components/LoadingSpinner';
import Listing from '../components/Listing';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const NotUsedListListings = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Stuffs.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const stuffItems = Stuffs.collection.find({}).fetch();
    return {
      stuffs: stuffItems,
      ready: rdy,
    };
  }, []);

  const listings = [
    {
      title: 'blender',
      image: 'images/blender.jpg',
      description: 'It blends.',
      price: 20.50,
      name: 'John Doe',
    },
    {
      title: 'bed',
      image: 'images/mattress.jpg',
      description: 'It lets you sleep.',
      price: 100,
      name: 'John Doe',
    },
    {
      title: 'sheets',
      image: 'images/sheets.jpg',
      description: 'Clean and ready for new owner.',
      price: 10,
      name: 'John Doe',
    },
  ];

  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2>Listings</h2>
          </Col>
          <Row xs={1} md={2} lg={3} className="g-4">
            {listings.map((listing, index) => (<Col key={index}><Listing listing={listing} /></Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default NotUsedListListings;
