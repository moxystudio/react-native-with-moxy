import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AppConfigProvider, ThemeProvider, LocaleProvider, SplashScreen } from '../shared/modules';
import Navigation, { rootNavigation } from '../navigation';
import localeConfig from '../../intl';

const App = () => (
    <AppConfigProvider>
        <SafeAreaProvider>
            <ThemeProvider>
                <LocaleProvider { ...localeConfig }>
                    <SplashScreen>
                        <NavigationContainer ref={ rootNavigation.navigationRef }>
                            <Navigation />
                        </NavigationContainer>
                    </SplashScreen>
                </LocaleProvider>
            </ThemeProvider>
        </SafeAreaProvider>
    </AppConfigProvider>
);

export default App;
