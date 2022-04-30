const { Router } = require('express');
const placesController = require('../controllers/places.controllers');
const { validateQuery } = require('../middleware/validate-query.middleware');

const router = Router();

router.get(
  '/',
  /**
   * #swagger.tags = ['Places']
   * #swagger.summary = 'List all places.'
   * #swagger.responses[200] = {
        description: 'Places successfully obtained.',
        schema: [{ $ref: '#/definitions/Places' }]
    }
   * #swagger.responses[500] = {
        description: 'Internal Server Error',
        schema: { message: 'Failed to retrieve places.' }
    }
  */
  placesController.listPlaces,
);

router.post(
  '/',
  /**
   * #swagger.tags = ['Places']
   * #swagger.summary = 'Create a place.'
   * #swagger.parameters['place'] = {
        in: 'body',
        description: 'Add a place',
        required: 'true',
        schema: { $ref: '#/definitions/Places' }
    }
   * #swagger.responses[201] = {
        description: 'Places successfully registered.',
        schema: { message: 'Successfully registered place!' }
    }
   * #swagger.responses[400] = {
        description: 'Bad Request',
        schema: { message: 'Places validation failed.' }
    }
   * #swagger.responses[500] = {
        description: 'Internal Server Error',
        schema: { message: 'Failed to register place.' }
    }
   */
  placesController.createPlace,
);

router.get(
  '/availabilty',
  /**
   * #swagger.tags = ['Places']
   * #swagger.summary = 'List available places for a given distance and time.'
   * #swagger.parameters['x'] = {
        required: true
    }
   * #swagger.parameters['y'] = {
        required: true
    }
   * #swagger.parameters['mts'] = {
        required: true
    }
   * #swagger.parameters['hr'] = {
        required: true
    }
   * #swagger.responses[200] = {
        description: 'Places available successfully obtained.',
        schema: [{ $ref: '#/definitions/AvailablePlaces' }]
    }
   */
  validateQuery,
  placesController.listAvailablePlaces,
);

module.exports = router;
