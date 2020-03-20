const { compose, baseConfig, withEnzyme } = require('@moxy/jest-config');
const reactNativeConfig = require('react-native/jest-preset');

const rnwmConfig = baseConfig();

const esModules = [
    'react-native',
    'react-navigation',
    '@react-navigation',
    '@react-native-community/async-storage',
].join('|');

rnwmConfig.setupFilesAfterEnv = [
    './jest.setup.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
];
rnwmConfig.transformIgnorePatterns = [
    `<rootDir>node_modules/(?!${esModules})`,
];
rnwmConfig.collectCoverageFrom = [
    './app/**/*.js',
    '!./app/**/styles/*',
];
rnwmConfig.setupFiles = reactNativeConfig.setupFiles;
rnwmConfig.haste = reactNativeConfig.haste;
rnwmConfig.testEnvironment = reactNativeConfig.testEnvironment;

module.exports = compose([
    () => rnwmConfig,
    withEnzyme('enzyme-adapter-react-16'),
]);
