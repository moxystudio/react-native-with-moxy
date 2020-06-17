import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { render } from '../../../shared/test-utils';
import ProfileScreen2 from './ProfileScreen2';

it('should render a safe area view', () => {
    render(<ProfileScreen2 />);

    expect(SafeAreaView).toHaveBeenCalledTimes(1);
});

it('should render screen title', () => {
    const { queryByLabelText, queryByText } = render(<ProfileScreen2 />);

    expect(queryByLabelText('title')).not.toBeNull();
    expect(queryByText('profile2.title')).not.toBeNull();
});
