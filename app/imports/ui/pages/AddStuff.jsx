// AddStuff.jsx

// ... (imports and other existing code)

const AddStuff = () => {
  let fRef = null; // Declaration of fRef

  const submit = (data, formRef) => {
    const { name, description, price, condition, category, imageUpload } = data;
    const owner = Meteor.user().username;

    try {
      Stuffs.insertItem({ name, description, price, condition, category, imageUpload, owner });
      swal('Success', 'Item added successfully', 'success');
      formRef.reset();
    } catch (error) {
      swal('Error', error.message, 'error');
    }
  };

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Post Your Listing</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <TextField name="name" />
                <LongTextField name="description" />
                <NumField name="price" decimal={2} />
                <SelectField name="condition" />
                <SelectField name="category" />
                <TextField name="imageUpload" />
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

export default AddStuff;
