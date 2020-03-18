import React from 'react';
import { mount } from 'enzyme';
import HomeScreen from './HomeScreen';
import { AppTree } from '../../shared/test-utils/components';
import createNavigation from '../../shared/test-utils/react-navigation-prop';

const navigation = createNavigation();

beforeEach(() => {
    navigation.navigate.mockClear();
});

it('should render correctly', () => {
    const tree = mount(
        <AppTree>
            <HomeScreen navigation={ navigation } />
        </AppTree>,
    );

    const Button = tree.find('Button');

    Button.props().onPress();

    expect(tree).toMatchSnapshot();
    expect(navigation.navigate).toHaveBeenCalled();
});
