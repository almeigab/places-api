exports.generatePlacesList = () => [
  {
    name: 'Restaurante',
    x: 27,
    y: 12,
    opened: '12:00',
    closed: '18:00',
  },
  {
    name: 'Posto de combustível',
    x: 31,
    y: 18,
    opened: '08:00',
    closed: '18:00',
  },
  {
    name: 'Praça',
    x: 15,
    y: 12,
  },
  {
    name: 'Cinema',
    x: 20,
    y: 14,
    opened: '13:00',
    closed: '22:00',
  },
];

exports.generateNewPlace = () => ({
  name: 'Loja',
  x: 10,
  y: 20,
  opened: '10:00',
  closed: '22:00',
});

exports.generateAvailabilityParams = () => ({
  x: 20,
  y: 10,
  mts: 10,
  hr: '19:00',
});

exports.generateAvailablePlaces = () => [
  {
    name: 'Restaurante',
    status: 'fechado',
  },
  {
    name: 'Praça',
    status: 'aberto',
  },
  {
    name: 'Cinema',
    status: 'aberto',
  },
];
