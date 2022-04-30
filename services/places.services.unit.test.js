const placesService = require('./places.services');
const {
  generatePlacesList, generateAvailabilityParams, generatePlacesInRange, generateAvailablePlaces,
} = require('../test/factories');

describe('Places Services', () => {
  describe('filterPlacesInRange', () => {
    it('should contain filterPlacesInRange function', () => {
      expect(typeof placesService.filterPlacesInRange).toBe('function');
    });
    it('should filter places in mts range', () => {
      const {
        x, y, mts,
      } = generateAvailabilityParams();

      const placesList = generatePlacesList();

      const result = placesService.filterPlacesInRange(placesList, x, y, mts);

      const expectedResult = generatePlacesInRange();

      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe('formatAvailablePlaces', () => {
    it('should contain formatAvailablePlaces function', () => {
      expect(typeof placesService.formatAvailablePlaces).toBe('function');
    });
    it('should list places availability', () => {
      const {
        hr,
      } = generateAvailabilityParams();

      const placesList = generatePlacesInRange();

      const result = placesService.formatAvailablePlaces(placesList, hr);

      const expectedResult = generateAvailablePlaces();

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
