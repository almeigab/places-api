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
];

exports.generateNewPlace = () => ({
  name: 'Loja',
  x: 10,
  y: 20,
  opened: '10:00',
  closed: '22:00',
});
