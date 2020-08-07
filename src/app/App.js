import 'react-native-gesture-handler';
import React, { useCallback } from 'react';
import { NativeModules, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Client, Configuration } from 'bugsnag-react-native';
import appConfig from 'react-native-config';
import { AppConfigProvider, ThemeProvider, LocaleProvider, SplashScreen } from '../shared/modules';
import Navigation, { rootNavigation } from '../navigation';
import localeConfig from '../../intl';
import { version } from '../../package.json';

const config = new Configuration(appConfig.BUGSNAG_TOKEN);

config.appVersion = version;
config.releaseStage = 'production';

const bugsnag = new Client(config);

const App = () => {
    const onPressCrash = useCallback(() => {
        NativeModules.CrashyCrashy.generateCrash();
    }, []);

    const onPressNotify = useCallback(() => {
        bugsnag.notify(new Error('Test error from prod build with dSYM files uploaded'));
    }, []);

    return (
        <AppConfigProvider>
            <SafeAreaProvider>
                <ThemeProvider>
                    <LocaleProvider { ...localeConfig }>
                        <SplashScreen>
                            <NavigationContainer ref={ rootNavigation.navigationRef }>
                                <Navigation />
                                <Button title="Crash" onPress={ onPressCrash } />
                                <Button title="Notify Error" onPress={ onPressNotify } />
                            </NavigationContainer>
                        </SplashScreen>
                    </LocaleProvider>
                </ThemeProvider>
            </SafeAreaProvider>
        </AppConfigProvider>
    );
};

export default App;
