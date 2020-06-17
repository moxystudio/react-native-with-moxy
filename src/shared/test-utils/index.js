import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import idObj from 'identity-obj-proxy';
import { AppConfigProvider, ThemeProvider, LocaleProvider } from '../modules';

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

const Providers = ({ children }) => (
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

Providers.propTypes = {
    children: PropTypes.element.isRequired,
};

const customRender = (ui, options) => render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react-native';

// Override render method
export { customRender as render };
