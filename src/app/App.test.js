import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import { rootNavigation } from '../navigation';
import { LocaleProvider, ThemeProvider, StoreProvider } from '../shared/modules';
import localeConfig from '../../intl';

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

it('should render store provider', () => {
    const tree = mount(<App />);

    expect(tree.find(StoreProvider).exists()).toBe(true);
});

