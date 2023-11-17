import React from 'react';
import PropTypes from 'prop-types';
import {Card,} from "react-bootstrap";

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Item = ({ item }) => (
    <Card className="h-100">
        <Card.Header>
            <Card.Title>SellerName: {item.sellerName}</Card.Title>
            <Card.Subtitle>ItemName:{item.itemName}  ItemPrice:{item.price}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
            {item.description}
        </Card.Body>
    </Card>
);

// Require a document to be passed to this component.
Item.propTypes = {
    item: PropTypes.shape({
        sellerName: PropTypes.string,
        itemName: PropTypes.string,
        price: PropTypes.number,
        description: PropTypes.string,
        // _id: PropTypes.string,
    }).isRequired,
};

export default Item;