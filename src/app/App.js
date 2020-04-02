import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AppConfigProvider, ThemeProvider, LocaleProvider } from '../shared/modules';
import AppStack, { rootNavigation } from '../navigation';
import localeConfig from '../../intl';

const App = () => (
    <AppConfigProvider>
        <SafeAreaProvider>
            <ThemeProvider>
                <LocaleProvider { ...localeConfig }>
                    <NavigationContainer ref={ rootNavigation.navigationRef }>
                        <AppStack />
                    </NavigationContainer>
                </LocaleProvider>
            </ThemeProvider>
        </SafeAreaProvider>
    </AppConfigProvider>
);

export default App;
