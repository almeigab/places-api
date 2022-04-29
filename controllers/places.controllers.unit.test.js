/* eslint-disable no-underscore-dangle */
const httpMocks = require('node-mocks-http');
const placesController = require('./places.controllers');
const repository = require('../repositories/places.repository');
const { generatePlacesList } = require('../test/factories');

let req;
let res;

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
});

describe('PlacesController', () => {
  describe('listPlaces', () => {
    it('should contain listPlaces function', () => {
      expect(typeof placesController.listPlaces).toBe('function');
    });
    it('should send error 500 when repository.listPlaces fails', async () => {
      repository.listPlaces = jest.fn().mockRejectedValue(new Error('Unknown error'));

      await placesController.listPlaces(req, res);

      expect(res.statusCode).toBe(500);
      expect(res._isEndCalled()).toBeTruthy();
      expect(res._getData()).toStrictEqual({ message: 'Failed to retrieve places.' });
    });
    it('should send success 200 when repository.listPlaces succeeds', async () => {
      const placesList = generatePlacesList();
      repository.listPlaces = jest.fn().mockResolvedValue(placesList);

      await placesController.listPlaces(req, res);

      const result = JSON.parse(JSON.stringify(placesList));
      expect(res.statusCode).toBe(200);
      expect(res._isEndCalled()).toBeTruthy();
      expect(res._getData()).toStrictEqual(result);
    });
  });
});
