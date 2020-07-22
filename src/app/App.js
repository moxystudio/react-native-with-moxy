import 'react-native-gesture-handler';
import React, { useState } from 'react';
import crashlytics from '@react-native-firebase/crashlytics';
import { View, Button, Text } from 'react-native';
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
    const [enabled, setEnabled] = useState(
        crashlytics().isCrashlyticsCollectionEnabled,
    );

    async function toggleCrashlytics() {
        await crashlytics()
            .setCrashlyticsCollectionEnabled(!enabled)
            .then(() =>
                setEnabled(crashlytics().isCrashlyticsCollectionEnabled),
            );
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
                                <View>
                                    <Button
                                        title="Toggle Crashlytics"
                                        onPress={ toggleCrashlytics } />
                                    <Button
                                        title="Crash"
                                        onPress={ () => crashlytics().crash() } />
                                    <Text>
                                        Crashlytics is currently{' '}
                                        {enabled ? 'enabled' : 'disabled'}
                                    </Text>
                                </View>
                            </NavigationContainer>
                        </SplashScreen>
                    </LocaleProvider>
                </ThemeProvider>
            </SafeAreaProvider>
        </AppConfigProvider>
    );
};

export default App;
