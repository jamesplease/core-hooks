// eslint-disable-next-line no-undef
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  // setupTestFrameworkScriptFile: './test/setup.js',
  testURL: 'http://localhost',
};
