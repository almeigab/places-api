const { Router } = require('express');
const placesController = require('../controllers/places.controllers');
const { validateQuery } = require('../middleware/validate-query.middleware');

const router = Router();

router.get(
  '/',
  /**
   * #swagger.tags = ['Places']
   * #swagger.summary = 'List all places.'
   * #swagger.description = 'You can list all registered places.'
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
   * #swagger.description = 'You can register a place passing its `name`,
     and coordinates `x` and `y` (both _integer greater than 0_).
     <br>Parameters `opened` and `closed` are optional (both in format _hh:mm_).
     <br>If you specify `opened` or `closed`, the other one is required,
     and `closed` should be greater than `opened`.'
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
   * #swagger.description = 'You can search for available places given a pair
     of coordinates `x` and `y` (both _integer greater than 0_),
     the range distance `mts` (_integer greater than 0_) and the time `hr` (in format _hh:mm_).
     <br>All 4 parameters are required.'
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
