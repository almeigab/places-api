const { Router } = require('express');
const placesController = require('../controllers/places.controllers');

const router = Router();

router.get('/', placesController.listPlaces);

router.post('/', placesController.createPlace);

module.exports = router;
