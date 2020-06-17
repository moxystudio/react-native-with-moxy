import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { render } from '../../../shared/test-utils';
import ProfileScreen1 from './ProfileScreen1';

it('should render a safe area view', () => {
    render(<ProfileScreen1 />);

    expect(SafeAreaView).toHaveBeenCalledTimes(1);
});

it('should render screen title', () => {
    const { queryByLabelText, queryByText } = render(<ProfileScreen1 />);

    expect(queryByLabelText('title')).not.toBeNull();
    expect(queryByText('profile1.title')).not.toBeNull();
});
