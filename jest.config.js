module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json'
    }
  },
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
    'vue'
  ],
  transform: {
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
    ".*\\.(js)$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(ts)$": "<rootDir>/node_modules/ts-jest"
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
  }
};
