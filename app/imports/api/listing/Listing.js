import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The ListingCollection. It encapsulates state and variable values for our listings.
 */
class ListingCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ListingCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      title: String,
      image: String,
      description: String,
      owner: String,
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
      isApproved: {
        type: String,
        allowedValues: ['true', 'false'],
        defaultValue: 'false',
      },
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
    this.notByOwner = `${{ $ne: this.name }}.publication.user`;
  }
}

/**
 * The singleton instance of the StuffsCollection.
 * @type {ListingCollection}
 */
export const Listings = new ListingCollection();
