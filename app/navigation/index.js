import React from 'react';
import * as rootNavigation from './root';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home/HomeScreen';

const Stack = createStackNavigator();

const AppStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={ HomeScreen } />
    </Stack.Navigator>
);

export default AppStack;

export {
    rootNavigation,
};
