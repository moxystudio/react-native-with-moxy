import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { render } from '@testing-library/react-native';
import localeConfig from '../../intl';
import { rootNavigation } from '../navigation';
import { AppConfigProvider, LocaleProvider, ThemeProvider } from '../shared/modules';
import App from './App';

jest.mock('../shared/modules', () => ({
    AppConfigProvider: jest.fn(({ children }) => children),
    LocaleProvider: jest.fn(({ children }) => children),
    ThemeProvider: jest.fn(({ children }) => children),
}));

beforeEach(jest.clearAllMocks);

it('should create navigation ref', () => {
    render(<App />);

    expect(rootNavigation.navigationRef.current).toEqual(expect.objectContaining({
        navigate: expect.any(Function),
    }));
});

it('should render locale provider', () => {
    render(<App />);

    expect(LocaleProvider).toHaveBeenCalledTimes(1);
    expect(LocaleProvider).toHaveBeenCalledWith(expect.objectContaining({ ...localeConfig }), {});
});

it('should render theme provider', () => {
    render(<App />);

    expect(ThemeProvider).toHaveBeenCalledTimes(1);
});

it('should render safe area provider', () => {
    render(<App />);

    expect(SafeAreaProvider).toHaveBeenCalledTimes(1);
});

it('should render app config provider', () => {
    render(<App />);

    expect(AppConfigProvider).toHaveBeenCalledTimes(1);
});

