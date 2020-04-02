import React from 'react';
import { mount } from 'enzyme';
import SafeAreaView from 'react-native-safe-area-view';
import { AppTree } from '../../../shared/test-utils/modules';
import ProfileScreen1 from './ProfileScreen1';

it('should render a safe area view', () => {
    const tree = mount(
        <AppTree>
            <ProfileScreen1 />
        </AppTree>,
    );

    expect(tree.find(SafeAreaView).exists()).toBe(true);
});

it('should render screen title', () => {
    const tree = mount(
        <AppTree>
            <ProfileScreen1 />
        </AppTree>,
    );

    const title = tree.find("[accessibilityLabel='title']").first().text();

    expect(title).toBe('profile1.title');
});
