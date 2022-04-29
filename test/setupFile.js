const mongoose = require('../database/index');

beforeAll(() => {
  mongoose.connect = jest.fn().mockImplementation(() => {});
});

afterAll(async () => {
  await mongoose.connection.close();
});
