const { Router } = require('express');
const placesController = require('../controllers/places.controllers');
const { validateQuery } = require('../middleware/validate-query.middleware');

const router = Router();

router.get('/', placesController.listPlaces);

router.post('/', placesController.createPlace);

router.get('/availabilty', validateQuery, placesController.filterPlaces);

module.exports = router;
