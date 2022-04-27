function getDistance(place, x, y) {
  const xDiff = place.x - x;
  const yDiff = place.y - y;
  const distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));

  return distance;
}

function isOpen(place, hr) {
  if (place.opened === undefined && place.closed === undefined ) return true;

  const [openedHr, openedMin] = place.opened.split(':').map(item => Number.parseInt(item));
  const [closedHr, closedMin] = place.closed.split(':').map(item => Number.parseInt(item));
  const [targetHr, targetMin] = hr.split(':').map(item => Number.parseInt(item));

  return ((targetHr > openedHr || (targetHr === openedHr  && targetMin >= openedMin))
    && (targetHr < closedHr || (targetHr === closedHr  && targetMin < closedMin)));
}

exports.filterPlaces = (places, x, y, mts, hr) => {
  return places
    .filter(place => getDistance(place, x, y) <= mts)
    .map(place => ({
      name: place.name,
      status: isOpen(place, hr) ? 'aberto' : 'fechado',
    }));
};

