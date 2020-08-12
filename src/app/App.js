import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import * as Sentry from '@sentry/react-native';
import appConfig from 'react-native-config';
import { AppConfigProvider, ThemeProvider, LocaleProvider, SplashScreen } from '../shared/modules';
import Navigation, { rootNavigation } from '../navigation';
import localeConfig from '../../intl';

Sentry.init({
    dsn: appConfig.SENTRY_DSN,
});

const aFunctionThatMightFail = () => {
    throw new Error('💣 BOOM from the JavaScript code!');
};

try {
    aFunctionThatMightFail();
} catch (err) {
    Sentry.captureException(err);
}

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
