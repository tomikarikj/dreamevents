const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

module.exports = Event = mongoose.model('event', EventSchema);
