import React from 'react';
import { mount } from 'enzyme';
import HomeHeader from './header';
import HomeScreen from './HomeScreen';
import { AppTree } from '../../shared/test-utils/modules';
import createNavigationProp from '../../shared/test-utils/react-navigation-prop';

const navigation = createNavigationProp();

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

    expect(navigation.navigate).toHaveBeenNthCalledWith(1, 'Profile', { screen: 'Profile2' });
    expect(navigation.setOptions).toHaveBeenNthCalledWith(1, { header: HomeHeader });

    expect(tree).toMatchSnapshot();
});
