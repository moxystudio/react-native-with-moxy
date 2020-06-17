import React from 'react';
import { render } from '@testing-library/react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { Logo } from '../../../shared/media/icons';
import HomeHeader from '.';

beforeEach(() => {
    jest.clearAllMocks();
});

it('should render a safe area view', () => {
    render(<HomeHeader />);

    expect(SafeAreaView).toHaveBeenCalledTimes(1);
});

it('should render the logo', () => {
    render(<HomeHeader />);

    const context = expect.any(Object);

    expect(Logo).toHaveBeenNthCalledWith(1, { width: '120', height: '50' }, context);
});
