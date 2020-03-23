'use strict';

const { compose, baseConfig, withReactNative, withEnzymeReactNative } = require('@moxy/jest-config');

module.exports = compose(
    baseConfig(),
    withEnzymeReactNative('enzyme-adapter-react-16'),
    withReactNative({
        transformModules: (patterns) => [...patterns, '@react-navigation/'],
    }),
    (config) => ({
        ...config,
        coveragePathIgnorePatterns: [
            ...config.coveragePathIgnorePatterns,
            '/test-utils/',
        ],
        setupFilesAfterEnv: [
            ...config.setupFilesAfterEnv,
            require.resolve('react-native-gesture-handler/jestSetup'),
        ],
    }),
);
