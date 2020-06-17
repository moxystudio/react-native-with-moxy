import React from 'react';
import { render, fireEvent } from '../../../shared/test-utils';
import SafeAreaView from 'react-native-safe-area-view';
import { createNavigationProp } from '../../../shared/test-utils/react-navigation';
import ProfileHeader from './';

const navigation = createNavigationProp();

beforeEach(() => {
    navigation.navigate.mockClear();
});

it('should render a safe area view', () => {
    render(<ProfileHeader navigation={ navigation } />);

    expect(SafeAreaView).toHaveBeenCalledTimes(1);
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
