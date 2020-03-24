import React from 'react';
import * as rootNavigation from './root';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileStack from './profile-stack';
import HomeScreen from '../screens/home/HomeScreen';

const Stack = createStackNavigator();

const AppStack = () => (
    <Stack.Navigator headerMode="screen">
        <Stack.Screen name="Home" component={ HomeScreen } />
        <Stack.Screen name="Profile" component={ ProfileStack } options={ { header: () => null } } />
    </Stack.Navigator>
);

export default AppStack;

export {
    rootNavigation,
};
