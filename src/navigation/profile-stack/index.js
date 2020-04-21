import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileHeader from './header';
import ProfileScreen1 from '../../screens/profile/1/ProfileScreen1';
import ProfileScreen2 from '../../screens/profile/2/ProfileScreen2';

const Stack = createStackNavigator();

const ProfileStack = () => (
    <Stack.Navigator screenOptions={ {
        header: ProfileHeader,
    } }>
        <Stack.Screen name="Profile1" component={ ProfileScreen1 } />
        <Stack.Screen name="Profile2" component={ ProfileScreen2 } />
    </Stack.Navigator>
);

export default ProfileStack;
