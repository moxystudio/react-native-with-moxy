import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from '../shared/components';
import AppStack, { rootNavigation } from '../navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => (
    <ThemeProvider>
        <NavigationContainer ref={ rootNavigation.navigationRef }>
            <AppStack />
        </NavigationContainer>
    </ThemeProvider>
);

export default App;
