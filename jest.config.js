'use strict';

const { compose, baseConfig } = require('@moxy/jest-config-base');
const withReactNative = require('@moxy/jest-config-react-native');
const { withNTL } = require('@moxy/jest-config-testing-library');

module.exports = compose(
    baseConfig('node'),
    withReactNative({
        transformModules: (patterns) => [...patterns, '@react-navigation/'],
    }),
    withNTL(),
    (config) => ({
        ...config,
        moduleNameMapper: {
            ...config.moduleNameMapper,
            '\\.svg': '<rootDir>/__mocks__/MockSvg.js',
        },
        coveragePathIgnorePatterns: [
            ...config.coveragePathIgnorePatterns,
            '/test-utils/',
        ],
        setupFilesAfterEnv: [
            ...config.setupFilesAfterEnv,
            '<rootDir>/jest.setup',
            require.resolve('react-native-gesture-handler/jestSetup'),
        ],
    }),
);
