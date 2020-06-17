import React from 'react';
import { render } from '@testing-library/react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileStack from './profile-stack';
import Navigation from './';

beforeEach(jest.clearAllMocks);

const STACK_NAVIGATOR = createStackNavigator();

it('should create navigation', () => {
    render(<Navigation />);

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
});

it('should render an empty header for profile stack', () => {
    render(<Navigation />);

    const ProfileStackHeader = STACK_NAVIGATOR.Screen.mock.calls[1][0].options.header;
    const { container } = render(<ProfileStackHeader />);

    // Should render nothing
    expect(container.children[0]).toBeUndefined();
});
