module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['./test/setup.ts'],
  testURL: 'http://localhost/',
};
