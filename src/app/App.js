import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider, LocaleProvider } from '../shared/modules';
import AppStack, { rootNavigation } from '../navigation';
import localeConfig from '../../intl';

const App = () => (
    <SafeAreaProvider>
        <ThemeProvider>
            <LocaleProvider { ...localeConfig }>
                <NavigationContainer ref={ rootNavigation.navigationRef }>
                    <AppStack />
                </NavigationContainer>
            </LocaleProvider>
        </ThemeProvider>
    </SafeAreaProvider>
);

export default App;
