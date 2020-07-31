import 'react-native-gesture-handler';
import React from 'react';
import crashlytics from '@react-native-firebase/crashlytics';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import {
    AppConfigProvider,
    ThemeProvider,
    LocaleProvider,
    SplashScreen,
} from '../shared/modules';
import Navigation, { rootNavigation } from '../navigation';
import localeConfig from '../../intl';

const App = () => {
    try {
        throw new Error('Testing if the source maps will be readable');
    } catch (err) {
        Object.assign(err, { status: 'invalid data' });

        crashlytics().recordError(err);
    }

    return (
        <AppConfigProvider>
            <SafeAreaProvider>
                <ThemeProvider>
                    <LocaleProvider { ...localeConfig }>
                        <SplashScreen>
                            <NavigationContainer
                                ref={ rootNavigation.navigationRef }>
                                <Navigation />
                            </NavigationContainer>
                        </SplashScreen>
                    </LocaleProvider>
                </ThemeProvider>
            </SafeAreaProvider>
        </AppConfigProvider>
    );
};

export default App;
