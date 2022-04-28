const Places = require('../models/places.model');

exports.listPlaces = async () => {
  const result = await Places.find({}, '-_id -__v');
  return result;
};

exports.createPlace = async (data) => {
  const place = new Places(data);
  await place.save();
};
