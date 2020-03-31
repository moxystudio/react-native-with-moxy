import React from 'react';
import { StatusBar } from 'react-native';
import { render, fireEvent } from '../../../shared/test-utils';
import SafeAreaView from 'react-native-safe-area-view';
import { createNavigationProp } from '../../../shared/test-utils/react-navigation';
import ProfileHeader from './';

const navigation = createNavigationProp();

beforeEach(() => {
    jest.clearAllMocks();
});

it('should render a safe area view', () => {
    render(<ProfileHeader navigation={ navigation } />);

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

it('should pop the navigation stack when the back button is pressed', () => {
    const { getByLabelText } = render(<ProfileHeader navigation={ navigation } />);
    const backButton = getByLabelText('back button');

    fireEvent.press(backButton);

    expect(navigation.pop).toHaveBeenCalledTimes(1);
});

it('should have back button', () => {
    const { queryByLabelText, queryByText } = render(<ProfileHeader navigation={ navigation } />);

    expect(queryByLabelText('back button')).toBeTruthy();
    expect(queryByText('profile.header.buttons.back')).toBeTruthy();
});

it('should display the screen title', () => {
    const { queryByLabelText, queryByText } = render(<ProfileHeader navigation={ navigation } />);

    expect(queryByLabelText('title')).toBeTruthy();
    expect(queryByText('profile.header.title')).toBeTruthy();
});
