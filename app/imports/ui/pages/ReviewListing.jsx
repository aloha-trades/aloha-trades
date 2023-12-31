import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, LongTextField, SubmitField, TextField, NumField, SelectField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import { Listings } from '../../api/listing/Listing';
import LoadingSpinner from '../components/LoadingSpinner';

const bridge = new SimpleSchema2Bridge(Listings.schema);

/* Renders the EditStuff page for editing a single document. */
const ReviewListing = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // console.log('Listings', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Listings documents.
    const subscription = Meteor.subscribe(Listings.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Listings.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  // console.log('EditStuff', doc, ready);
  // On successful submit, insert the data.
  const submit = (data) => {
    const { title, image, description, price, condition, category, isApproved } = data;
    Listings.collection.update(_id, { $set: { title, image, description, price, condition, category, isApproved } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Review This Listing</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <Row>
                  <Col><TextField name="title" disabled /></Col>
                  <Col> <LongTextField name="description" disabled /></Col>
                </Row>
                <Row>
                  <Col><NumField name="price" disabled /></Col>
                  <Col> <SelectField name="condition" disabled /></Col>
                </Row>
                <Row>
                  <SelectField name="category" disabled />
                  <TextField name="image" disabled />
                </Row>
                <Row>
                  <SelectField name="isApproved" />
                </Row>
                <Row>
                  <SelectField name="isAvailable" />
                </Row>
                <SubmitField value="Submit" />
                <ErrorsField />
                <HiddenField name="owner" />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default ReviewListing;
