import { mockPlatform } from '../test-utils/react-native';

beforeEach(() => {
    jest.resetModules();
});

it('should export all named styles for iOS', () => {
    mockPlatform('ios');

    const styles = require('.');

    expect(styles).toMatchSnapshot();
});

it('should export all named styles for Android', () => {
    mockPlatform('android');

    const styles = require('.');

    expect(styles).toMatchSnapshot();
});
