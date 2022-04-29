module.exports = {
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  setupFilesAfterEnv: [
    '<rootDir>/test/setupFile.js',
  ],
};
