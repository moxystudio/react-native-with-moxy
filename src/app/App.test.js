import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { mount } from 'enzyme';
import localeConfig from '../../intl';
import { rootNavigation } from '../navigation';
import { LocaleProvider, ThemeProvider } from '../shared/modules';
import App from './App';

it('should create navigation ref', () => {
    mount(<App />);

    expect(rootNavigation.navigationRef.current).toEqual(expect.objectContaining({
        navigate: expect.any(Function),
    }));
});

it('should render locale provider', () => {
    const tree = mount(<App />);
    const provider = tree.find(LocaleProvider);

    expect(provider.exists()).toBe(true);
    expect(provider.props()).toEqual(expect.objectContaining(localeConfig));
});

it('should render theme provider', () => {
    const tree = mount(<App />);

    expect(tree.find(ThemeProvider).exists()).toBe(true);
});

it('should render safe area provider', () => {
    const tree = mount(<App />);

    expect(tree.find(SafeAreaProvider).exists()).toBe(true);
});

