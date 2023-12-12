import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [notes, setNotes] = useState([]);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const saveFeedback = () => {
    // Check if feedback is not empty before saving
    if (feedback.trim() !== '') {
      setNotes([...notes, feedback]);
      setFeedback('');
    }
  };

  return (
    <Container className="py-3">
      <h1 className="text-center mb-4">Feedback</h1>
      <Form>
        <Form.Group controlId="feedbackForm">
          <Form.Label>Please provide your feedback:</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Enter your feedback here..."
          />
        </Form.Group>
        <Button variant="primary" onClick={saveFeedback}>
          Save Feedback
        </Button>
      </Form>
      <hr />
      <h3>Notes:</h3>
      {notes.map((note, index) => (
        <Card key={index} className="my-2">
          <Card.Body>{note}</Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Feedback;
