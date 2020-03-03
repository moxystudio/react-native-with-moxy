const { compose, baseConfig, withEnzyme } = require('@moxy/jest-config');

const nativePresetConfig = baseConfig();

const esModules = ['react-native', 'react-navigation', '@react-navigation', '@react-native-community/async-storage'].join('|');

nativePresetConfig.preset = 'react-native';
nativePresetConfig.setupFilesAfterEnv = [
    './config/jest',
    './node_modules/react-native-gesture-handler/jestSetup.js',
];
nativePresetConfig.transformIgnorePatterns = [
    `<rootDir>node_modules/(?!${esModules})`,
];
nativePresetConfig.collectCoverageFrom = ['./app/**/*.js', '!./app/**/styles/*'];

module.exports = compose([
    () => nativePresetConfig,
    withEnzyme('enzyme-adapter-react-16'),
]);
