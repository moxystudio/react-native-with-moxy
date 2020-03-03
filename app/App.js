import 'react-native-gesture-handler';
import React from 'react';
import AppStack, { rootNavigation } from './navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => (
    <NavigationContainer ref={ rootNavigation }>
        <AppStack />
    </NavigationContainer>
);

export default App;
