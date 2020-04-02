import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import idObj from 'identity-obj-proxy';
import { AppConfigProvider, ThemeProvider, LocaleProvider } from '../../../modules';

const localeConfig = {
    locales: [
        {
            id: 'en-US',
            name: 'English',
            messages: idObj,
        },
        {
            id: 'pt-PT',
            name: 'Português',
            messages: idObj,
        },
    ],
};

const AppTree = ({ children }) => (
    <AppConfigProvider>
        <SafeAreaProvider>
            <ThemeProvider>
                <LocaleProvider { ...localeConfig }>
                    { children }
                </LocaleProvider>
            </ThemeProvider>
        </SafeAreaProvider>
    </AppConfigProvider>
);

AppTree.propTypes = {
    children: PropTypes.element.isRequired,
};

export default AppTree;
