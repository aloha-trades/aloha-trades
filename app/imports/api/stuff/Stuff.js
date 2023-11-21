import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Meteor } from 'meteor/meteor';

class StuffsCollection {
  constructor() {
    this.name = 'StuffsCollection';
    this.collection = new Mongo.Collection(this.name);
    this.schema = new SimpleSchema({
      name: String,
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
      imageUpload: String,
    });
    this.collection.attachSchema(this.schema);
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }

  insertItem(data) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized', 'You are not authorized to perform this action.');
    }

    const owner = Meteor.user().username;
    this.schema.validate(data);
    this.collection.insert({ ...data, owner });
  }
}

export const Stuffs = new StuffsCollection();
