import { Meteor } from 'meteor/meteor';
import { Listings } from '../../api/listing/Listing.js';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Listings.collection.insert(data);
};

// Initialize the ListingsCollection if empty.
if (Listings.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}
