import React from 'react';
import { StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { Logo } from '../../../shared/media/icons';
import { render } from '../../../shared/test-utils';
import HomeHeader from '.';

beforeEach(() => {
    jest.clearAllMocks();
});

it('should render a safe area view', () => {
    render(<HomeHeader />);

    const context = expect.any(Object);

    expect(SafeAreaView).toHaveBeenCalledTimes(1);
    expect(SafeAreaView).toHaveBeenCalledWith(expect.objectContaining({
        style: expect.arrayContaining([{ backgroundColor: '#FFFFFF' }]),
    }), context);
    expect(StatusBar).toHaveBeenCalledWith(expect.objectContaining({
        barStyle: 'dark-content',
        backgroundColor: '#FFFFFF',
    }), context);
});

it('should render the logo', () => {
    render(<HomeHeader />);

    const context = expect.any(Object);

    expect(Logo).toHaveBeenNthCalledWith(1, { width: '120', height: '50' }, context);
});
