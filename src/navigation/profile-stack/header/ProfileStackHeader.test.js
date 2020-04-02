import React from 'react';
import { mount } from 'enzyme';
import SafeAreaView from 'react-native-safe-area-view';
import { AppTree } from '../../../shared/test-utils/modules';
import { createNavigationProp } from '../../../shared/test-utils/react-navigation';
import ProfileHeader from './';

const navigation = createNavigationProp();

beforeEach(() => {
    navigation.navigate.mockClear();
});

it('should render a safe area view', () => {
    const tree = mount(
        <AppTree>
            <ProfileHeader navigation={ navigation } />
        </AppTree>,
    );

    expect(tree.find(SafeAreaView).exists()).toBe(true);
});

it('should pop the navigation stack when the back button is pressed', () => {
    const tree = mount(
        <AppTree>
            <ProfileHeader navigation={ navigation } />
        </AppTree>,
    );

    const button = tree.find("[accessibilityLabel='back button']").first();

    button.props().onPress();

    expect(navigation.pop).toHaveBeenCalledTimes(1);
});

it('should have back button', () => {
    const tree = mount(
        <AppTree>
            <ProfileHeader navigation={ navigation } />
        </AppTree>,
    );

    const title = tree.find("[accessibilityLabel='back button']").first().text();

    expect(title).toBe('profile.header.buttons.back');
});

it('should display the screen title', () => {
    const tree = mount(
        <AppTree>
            <ProfileHeader navigation={ navigation } />
        </AppTree>,
    );

    const title = tree.find("[accessibilityLabel='title']").first().text();

    expect(title).toBe('profile.header.title');
});
