const { convertTimeToMinutes } = require('../utils/date');

function getDistance(place, x, y) {
  const xDiff = place.x - x;
  const yDiff = place.y - y;
  const distance = Math.sqrt(xDiff ** 2 + yDiff ** 2);

  return distance;
}

function isOpen(place, hr) {
  if (place.opened === undefined && place.closed === undefined) return true;

  const openedInMinutes = convertTimeToMinutes(place.opened);
  const closedInMinutes = convertTimeToMinutes(place.closed);
  const targetInMinutes = convertTimeToMinutes(hr);

  return (targetInMinutes >= openedInMinutes) && (targetInMinutes <= closedInMinutes);
}

exports.filterPlaces = (places, x, y, mts, hr) => places
  .filter((place) => getDistance(place, x, y) <= mts)
  .map((place) => ({
    name: place.name,
    status: isOpen(place, hr) ? 'aberto' : 'fechado',
  }));
