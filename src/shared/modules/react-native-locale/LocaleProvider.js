import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { RawIntlProvider, createIntl, createIntlCache } from 'react-intl';
import * as localize from 'react-native-localize';
import LocaleContext from './context';

const Provider = LocaleContext.Provider;

const findLocaleById = (locales, localeId) => locales.find((locale) => locale.id === localeId);
const getInitialLocale = (locales, defaultLocale, initialLocaleId) => {
    if (locales.length === 0) {
        throw new Error('Locales array is empty. Please provide at least one locale (default).');
    }

    if (initialLocaleId) {
        const locale = findLocaleById(locales, initialLocaleId);

        if (!locale) {
            throw new Error(`Unknown initial locale id: ${initialLocaleId}.`);
        }

        return locale;
    }

    const localeId = localize.findBestAvailableLanguage(locales.map((locale) => locale.id))?.languageTag;

    return findLocaleById(locales, localeId) ?? defaultLocale;
};

const ReactNativeLocaleProvider = ({
    children,
    locales,
    initialLocaleId,
    onLocaleChange,
}) => {
    const intlCache = useRef(createIntlCache());
    const [currentLocale, setCurrentLocale] = useState(getInitialLocale(locales, locales[0], initialLocaleId));

    const handleLocaleChange = useCallback((localeId) => {
        const nextLocale = findLocaleById(locales, localeId);

        if (!nextLocale) {
            return;
        }

        setCurrentLocale(nextLocale);

        if (localeId !== currentLocale.id) {
            onLocaleChange?.(nextLocale.id);
        }
    }, [setCurrentLocale, locales, onLocaleChange, currentLocale]);

    const value = useMemo(() => {
        const intl = createIntl({
            locale: currentLocale.id,
            messages: currentLocale.messages,
        }, intlCache);

        return {
            intl,
            localize,
            locales,
            id: currentLocale.id,
            changeLocale: handleLocaleChange,
        };
    }, [handleLocaleChange, currentLocale, locales]);

    useEffect(() => {
        const locale = findLocaleById(locales, currentLocale.id);

        if (!locale) {
            throw new Error('Locales array changed. However, the current locale does not exist anymore.');
        }
    }, [currentLocale, locales]);

    return (
        <Provider value={ value }>
            <RawIntlProvider value={ value.intl }>
                { children }
            </RawIntlProvider>
        </Provider>
    );
};

ReactNativeLocaleProvider.propTypes = {
    children: PropTypes.element,
    initialLocaleId: PropTypes.string,
    locales: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        messages: PropTypes.object.isRequired,
    })).isRequired,
    onLocaleChange: PropTypes.func,
};

export default ReactNativeLocaleProvider;
