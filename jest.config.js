
module.exports = {

  clearMocks: true,

  collectCoverage: true,
  
  coverageDirectory: "coverage",

  coverageProvider: "v8",
  
  testEnvironment: "jsdom",

  verbose: true,
  
  setupFilesAfterEnv: ['<rootDir>/setupJestDom.js']
};
