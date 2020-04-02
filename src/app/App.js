import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from '../shared/react';
import AppStack, { rootNavigation } from '../navigation';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => (
    <SafeAreaProvider>
        <ThemeProvider>
            <NavigationContainer ref={ rootNavigation.navigationRef }>
                <AppStack />
            </NavigationContainer>
        </ThemeProvider>
    </SafeAreaProvider>
);

export default App;
