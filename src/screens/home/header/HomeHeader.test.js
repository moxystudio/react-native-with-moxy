import React from 'react';
import { mount } from 'enzyme';
import SafeAreaView from 'react-native-safe-area-view';
import { Logo } from '../../../shared/media/icons';
import HomeHeader from '.';

beforeEach(() => {
    jest.clearAllMocks();
});

it('should render a safe area view', () => {
    const tree = mount(<HomeHeader />);

    expect(tree.find(SafeAreaView).exists()).toBe(true);
});

it('should render the logo', () => {
    mount(<HomeHeader />);

    const context = expect.any(Object);

    expect(Logo).toHaveBeenNthCalledWith(1, { width: '120', height: '50' }, context);
});
