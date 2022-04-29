const { Router } = require('express');
const placesController = require('../controllers/places.controllers');
const { validateQuery } = require('../middleware/validate-query.middleware');

const router = Router();

router.get(
  '/',
  /**
   * #swagger.tags = ['Places']
   * #swagger.description = 'Endpoint to list all places.'
   */
  placesController.listPlaces,
);

router.post(
  '/',
  /**
   * #swagger.tags = ['Places']
   * #swagger.description = 'Endpoint to create a place.'
   */
  placesController.createPlace,
);

router.get(
  '/availabilty',
  /**
   * #swagger.tags = ['Places']
   * #swagger.description = 'Endpoint to list available places for a given distance and time.'
   */
  validateQuery,
  placesController.listAvailablePlaces,
);

module.exports = router;
