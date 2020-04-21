import React from 'react';
import { mount } from 'enzyme';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen1 from '../../screens/profile/1/ProfileScreen1';
import ProfileScreen2 from '../../screens/profile/2/ProfileScreen2';
import ProfileHeader from './header';
import ProfileStack from './';

it('should create navigation correctly', () => {
    mount(<ProfileStack />);

    const STACK_NAVIGATOR = createStackNavigator();
    const context = expect.any(Object);

    expect(STACK_NAVIGATOR.Navigator).toHaveBeenNthCalledWith(
        1,
        expect.objectContaining({
            screenOptions: { header: ProfileHeader },
            children: expect.any(Array),
        }),
        context,
    );

    expect(STACK_NAVIGATOR.Navigator.mock.calls[0][0].children).toHaveLength(2);

    expect(STACK_NAVIGATOR.Screen).toHaveBeenNthCalledWith(
        1,
        expect.objectContaining({
            name: 'Profile1',
            component: ProfileScreen1,
        }),
        context,
    );

    expect(STACK_NAVIGATOR.Screen).toHaveBeenNthCalledWith(
        2,
        expect.objectContaining({
            name: 'Profile2',
            component: ProfileScreen2,
        }),
        context,
    );
});
