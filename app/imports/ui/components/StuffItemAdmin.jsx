import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
const StuffItemAdmin = ({ stuff }) => (
  <tr>
    <td>{stuff.name}</td>
    <td>{stuff.category}</td>
    <td>{stuff.price}</td>
    <td>{stuff.condition}</td>
    <td>{stuff.owner}</td>
    <td>{stuff.description}</td>
    <td><Link to={`/edit/${stuff._id}`}>Approve</Link></td>
    <td><Link to={`/edit/${stuff._id}`}>Deny</Link> </td>
  </tr>
);

// Require a document to be passed to this component.
StuffItemAdmin.propTypes = {
  stuff: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    condition: PropTypes.string,
    _id: PropTypes.string,
    owner: PropTypes.string,
    approved: PropTypes.bool,
    denied: PropTypes.bool,
  }).isRequired,
};

export default StuffItemAdmin;
