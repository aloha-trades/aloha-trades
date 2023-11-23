import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, NumField, SelectField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Listings } from '../../api/listing/Listing';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  title: String,
  image: String,
  description: String,
  price: Number,
  condition: {
    type: String,
    allowedValues: ['excellent', 'good', 'fair', 'poor'],
    defaultValue: 'good',
  },
  category: {
    type: String,
    allowedValues: ['TextBooks', 'Furniture', 'Electronics', 'Transportation'],
    defaultValue: 'TextBooks',
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddListing page for adding a document. */
const AddListing = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { title, image, description, price, condition, category } = data;
    const owner = Meteor.user().username;
    const isApproved = false;
    Listings.collection.insert(
      { title, image, description, price, condition, category, owner, isApproved },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      },
    );
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Post Your Listing</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <TextField name="title" />
                <LongTextField name="description" />
                <NumField name="price" decimal={2} />
                <SelectField name="condition" />
                <SelectField name="category" />
                <TextField name="image" />
                <SubmitField value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddListing;
