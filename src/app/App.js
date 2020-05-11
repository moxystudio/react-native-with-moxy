import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AppConfigProvider, ThemeProvider, LocaleProvider, StoreProvider } from '../shared/modules';
import buildStore from '../shared/state/buildStore';
import AppStack, { rootNavigation } from '../navigation';
import localeConfig from '../../intl';

const store = buildStore();

const App = () => (
    <AppConfigProvider>
        <SafeAreaProvider>
            <ThemeProvider>
                <LocaleProvider { ...localeConfig }>
                    <StoreProvider store={ store }>
                        { () => (
                            <NavigationContainer ref={ rootNavigation.navigationRef }>
                                <AppStack />
                            </NavigationContainer>
                        ) }
                    </StoreProvider>
                </LocaleProvider>
            </ThemeProvider>
        </SafeAreaProvider>
    </AppConfigProvider>
);

export default App;
