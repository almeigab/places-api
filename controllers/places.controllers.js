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
