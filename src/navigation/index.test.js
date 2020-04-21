import React from 'react';
import { mount } from 'enzyme';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileStack from './profile-stack';
import Navigation from './';

it('should create navigation correctly', () => {
    mount(<Navigation />);

    const STACK_NAVIGATOR = createStackNavigator();
    const context = expect.any(Object);

    expect(STACK_NAVIGATOR.Navigator).toHaveBeenNthCalledWith(
        1,
        expect.objectContaining({
            headerMode: 'screen',
            children: expect.any(Array),
        }),
        context,
    );

    expect(STACK_NAVIGATOR.Navigator.mock.calls[0][0].children).toHaveLength(2);

    expect(STACK_NAVIGATOR.Screen).toHaveBeenNthCalledWith(
        1,
        expect.objectContaining({
            name: 'Home',
            component: HomeScreen,
        }),
        context,
    );

    expect(STACK_NAVIGATOR.Screen).toHaveBeenNthCalledWith(
        2,
        expect.objectContaining({
            name: 'Profile',
            component: ProfileStack,
            options: { header: expect.any(Function) },
        }),
        context,
    );

    const ProfileStackHeader = STACK_NAVIGATOR.Screen.mock.calls[1][0].options.header;
    const tree = mount(<ProfileStackHeader />);

    expect(tree.isEmptyRender()).toBe(true);
});
