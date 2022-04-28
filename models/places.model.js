const mongoose = require('../database');
const regex = require('../utils/regex');

const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  x: {
    type: Number,
    required: true,
    validate: {
      validator: (v) => Number.isInteger(v) && v >= 0,
      message: '{VALUE} is not a positive integer value',
    },
  },
  y: {
    type: Number,
    required: true,
    validate: {
      validator: (v) => Number.isInteger(v) && v >= 0,
      message: '{VALUE} is not a positive integer value',
    },
  },
  opened: {
    type: String,
    required: false,
    validate: {
      validator: (v) => regex.HOUR.test(v),
      message: '{VALUE} should be in format hh:mm',
    },
  },
  closed: {
    type: String,
    required: false,
    validate: {
      validator: (v) => regex.HOUR.test(v),
      message: '{VALUE} should be in format hh:mm',
    },
  },
});

module.exports = mongoose.model('Places', schema);
