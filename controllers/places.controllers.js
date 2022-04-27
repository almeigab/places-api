const MongooseError = require('mongoose/lib/error/mongooseError');
const repository = require('../repositories/places.repository');

exports.listPlaces = async (req, res) => {
  try {
    const data = await repository.listPlaces();
    res.status(200).send(data);
  } catch (e) {
    console.log('e :>> ', e);
    res.status(500).send({ message: 'Failed to retrieve places.' });
  }
};

exports.createPlace = async (req, res) => {
  try {
    await repository.createPlace({
      name: req.body.name,
      x: req.body.x,
      y: req.body.y,
      opened: req.body.opened,
      closed: req.body.closed,
    });

    res.status(201).send({ message: 'Successfully registered place!' });
  } catch (e) {
    if (e instanceof MongooseError && e.name === 'ValidationError') {
      res.status(400).send({ message: e.message });
    } else {
      res.status(500).send({ message: 'Failed to register place.' });
    }

  }
};
