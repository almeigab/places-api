const mongoose = require('../database');
const { convertTimeToMinutes } = require('../utils/date');
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
    required() { return this.closed !== undefined; },
    validate: {
      validator: (v) => regex.HOUR.test(v),
      message: '{VALUE} should be in format hh:mm',
    },
  },
  closed: {
    type: String,
    required() { return this.opened !== undefined; },
    validate: {
      validator: (v) => regex.HOUR.test(v),
      message: '{VALUE} should be in format hh:mm',
    },
  },
});

schema.pre('validate', function (next) {
  if (this.opened
    && this.closed
    && convertTimeToMinutes(this.opened) >= convertTimeToMinutes(this.closed)
  ) {
    const error = new Error('Closing hour must be greater than Opening hour');
    error.name = 'ValidationError';
    next(error);
  } else {
    next();
  }
});

module.exports = mongoose.model('Places', schema);
