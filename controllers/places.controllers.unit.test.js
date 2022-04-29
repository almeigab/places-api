/* eslint-disable no-underscore-dangle */
const httpMocks = require('node-mocks-http');
const ValidationError = require('mongoose/lib/error/validation');
const placesController = require('./places.controllers');
const repository = require('../repositories/places.repository');
const placesService = require('../services/places.services');
const {
  generatePlacesList,
  generateNewPlace,
  generateAvailabilityParams,
  generateAvailablePlaces,
} = require('../test/factories');

let req;
let res;

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
});

describe('Places Controllers', () => {
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

  describe('createPlace', () => {
    it('should contain createPlace function', () => {
      expect(typeof placesController.createPlace).toBe('function');
    });
    it('should send error 400 when repository.createPlace fails - field validation error', async () => {
      repository.createPlace = jest.fn().mockRejectedValue(new ValidationError(new Error('Places validation failed')));

      await placesController.createPlace(req, res);

      expect(res.statusCode).toBe(400);
      expect(res._isEndCalled()).toBeTruthy();
      expect(res._getData()).toStrictEqual({ message: 'Validation failed' });
    });
    it('should send error 500 when repository.createPlace fails - unknown error', async () => {
      repository.createPlace = jest.fn().mockRejectedValue(new Error('Unknown error'));

      await placesController.createPlace(req, res);

      expect(res.statusCode).toBe(500);
      expect(res._isEndCalled()).toBeTruthy();
      expect(res._getData()).toStrictEqual({ message: 'Failed to register place.' });
    });
    it('should send success 201 when repository.createPlace succeeds', async () => {
      const newPlace = generateNewPlace();

      req.body = newPlace;

      repository.createPlace = jest.fn().mockResolvedValue();

      await placesController.createPlace(req, res);

      expect(repository.createPlace).toBeCalledWith(expect.objectContaining(newPlace));
      expect(res.statusCode).toBe(201);
      expect(res._isEndCalled()).toBeTruthy();
      expect(res._getData()).toStrictEqual({ message: 'Successfully registered place!' });
    });
  });

  describe('listAvailablePlaces', () => {
    it('should contain listAvailablePlaces function', () => {
      expect(typeof placesController.listAvailablePlaces).toBe('function');
    });
    it('should send error 500 when repository.listPlaces fails', async () => {
      repository.listPlaces = jest.fn().mockRejectedValue(new Error('Unknown error'));

      await placesController.listAvailablePlaces(req, res);

      expect(res.statusCode).toBe(500);
      expect(res._isEndCalled()).toBeTruthy();
      expect(res._getData()).toStrictEqual({ message: 'Failed to retrieve available places.' });
    });
    it('should send error 500 when placesService.filterPlaces fails', async () => {
      const placesList = generatePlacesList();
      repository.listPlaces = jest.fn().mockResolvedValue(placesList);

      placesService.filterPlaces = jest.fn().mockRejectedValue(new Error('Unknown error'));

      await placesController.listAvailablePlaces(req, res);

      expect(res.statusCode).toBe(500);
      expect(res._isEndCalled()).toBeTruthy();
      expect(res._getData()).toStrictEqual({ message: 'Failed to retrieve available places.' });
    });
    it('should send success 200 when everything succeeds', async () => {
      const queryParams = generateAvailabilityParams();
      req.query = { ...queryParams };

      const placesList = generatePlacesList();
      repository.listPlaces = jest.fn().mockResolvedValue(placesList);

      const availablePlaces = generateAvailablePlaces();
      placesService.filterPlaces = jest.fn().mockResolvedValue(availablePlaces);

      await placesController.listAvailablePlaces(req, res);

      expect(placesService.filterPlaces).toBeCalledWith(
        expect.arrayContaining(placesList),
        req.query.x,
        req.query.y,
        req.query.mts,
        req.query.hr,
      );

      const result = JSON.parse(JSON.stringify(availablePlaces));
      expect(res.statusCode).toBe(200);
      expect(res._isEndCalled()).toBeTruthy();
      expect(res._getData()).toStrictEqual(result);
    });
  });
});
