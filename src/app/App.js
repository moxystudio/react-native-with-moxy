import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Client } from 'rollbar-react-native';
import { NavigationContainer } from '@react-navigation/native';
import appConfig from 'react-native-config';
import { AppConfigProvider, ThemeProvider, LocaleProvider, SplashScreen } from '../shared/modules';
import Navigation, { rootNavigation } from '../navigation';
import localeConfig from '../../intl';

const rollbar = new Client(appConfig.POST_CLIENT_ITEM_ACCESS_TOKEN);

rollbar.log('Rollbar log');

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
