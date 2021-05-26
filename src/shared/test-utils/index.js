import React from 'react';
import { Text } from 'react-native';
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
    // Consider the following React code:
    //
    // <Text>
    //    <FormattedMessage id="foo" />
    // </Text>
    //
    // In this case, the "foo" key will resolve into the text "bar", and the following will be rendered:
    //
    // <Text>
    //    <Text>
    //       bar
    //    </Text>
    // </Text>
    //
    // This a is necessary workaround because *ByText queries can only look up a string if it's
    // a direct child of a Text component.
    textComponent: Text,
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

// Export everything from NTL
export * from '@testing-library/react-native';

// Override render method
export { customRender as render };
