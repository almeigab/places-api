const placesService = require('./places.services');
const { generatePlacesList, generateAvailabilityParams, generateAvailablePlaces } = require('../test/factories');

describe('Places Services', () => {
  describe('filterPlaces', () => {
    it('should contain filterPlaces function', () => {
      expect(typeof placesService.filterPlaces).toBe('function');
    });
    it('should filter places in mts range and list their availability', () => {
      const {
        x, y, mts, hr,
      } = generateAvailabilityParams();

      const placesList = generatePlacesList();

      const result = placesService.filterPlaces(placesList, x, y, mts, hr);

      const expectedResult = generateAvailablePlaces();

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
