const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.on('connected', () => {
  console.log('Mongoose default connection is open');
});

module.exports = mongoose;
