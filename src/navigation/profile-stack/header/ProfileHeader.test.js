import React from 'react';
import { mount } from 'enzyme';
import ProfileHeader from './';
import { AppTree } from '../../../shared/test-utils/react';
import createNavigation from '../../../shared/test-utils/react-navigation-prop';

const navigation = createNavigation();

beforeEach(() => {
    navigation.navigate.mockClear();
});

it('should render correctly', () => {
    const tree = mount(
        <AppTree>
            <ProfileHeader navigation={ navigation } />
        </AppTree>,
    );

    const Button = tree.find('Button');

    Button.props().onPress();

    expect(tree).toMatchSnapshot();
    expect(navigation.pop).toHaveBeenCalled();
});
