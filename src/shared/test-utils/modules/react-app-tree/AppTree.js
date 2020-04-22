import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import idObj from 'identity-obj-proxy';
import { ThemeProvider, LocaleProvider } from '../../../modules';

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
    <SafeAreaProvider>
        <ThemeProvider>
            <LocaleProvider { ...localeConfig }>
                { children }
            </LocaleProvider>
        </ThemeProvider>
    </SafeAreaProvider>
);

AppTree.propTypes = {
    children: PropTypes.element.isRequired,
};

export default AppTree;
