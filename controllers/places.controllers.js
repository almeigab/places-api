const ValidationError = require('mongoose/lib/error/validation');
const repository = require('../repositories/places.repository');
const placesService = require('../services/places.services');

exports.listPlaces = async (req, res) => {
  try {
    const data = await repository.listPlaces();
    res.status(200).send(data);
  } catch (e) {
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
    if (e instanceof ValidationError) {
      res.status(400).send({ message: e.message });
    } else {
      res.status(500).send({ message: 'Failed to register place.' });
    }
  }
};

exports.listAvailablePlaces = async (req, res) => {
  try {
    const data = await repository.listPlaces();

    const {
      x, y, mts, hr,
    } = req.query;

    const filteredData = await placesService.filterPlaces(data, x, y, mts, hr);
    res.status(200).send(filteredData);
  } catch (e) {
    res.status(500).send({ message: 'Failed to retrieve available places.' });
  }
};
