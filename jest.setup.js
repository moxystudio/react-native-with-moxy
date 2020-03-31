/* eslint-env jest */

/**
 * Mocking React Native 0.61+ modules:
 * https://altany.github.io/react-native/0.61/jest/mocking/upgrade/2020/01/25/mocking-react-native-0.61-modules-with-jest.html
 * https://github.com/facebook/react-native/issues/26579
 * https://github.com/facebook/react-native/issues/26710.
 */

jest.mock('react-native/Libraries/Utilities/Platform', () => ({
    OS: 'ios',
    select: jest.fn((selector) => selector.ios),
    isTesting: true,
}));

jest.mock('react-native/Libraries/Components/StatusBar/StatusBar');

