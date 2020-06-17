import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';
import { FormattedMessage } from 'react-intl';
import { findBestAvailableLanguage } from 'react-native-localize';
import LocaleProvider from './LocaleProvider';
import useLocale from './use-locale';

const messages = {
    'en-US': { apple: 'apple' }, // Default locale
    'pt-PT': { apple: 'maça' },
    'ru-RU': { apple: 'яблоко' },
};

const locales = [
    { id: 'en-US', name: 'English', messages: messages['en-US'] },
    { id: 'pt-PT', name: 'Português', messages: messages['pt-PT'] },
    { id: 'ru-RU', name: 'русский', messages: messages['ru-RU'] },
];

beforeEach(() => {
    jest.clearAllMocks();
    console.error.mockRestore?.();
});

it("should load matching user's device preferred locale", () => {
    findBestAvailableLanguage.mockImplementationOnce(() => ({
        languageTag: 'ru-RU',
        isRTL: false,
    }));

    const { queryByText } = render(
        <LocaleProvider locales={ locales }>
            <Text>
                <FormattedMessage id="apple" />
            </Text>
        </LocaleProvider>,
    );

    expect(queryByText(messages['ru-RU'].apple)).not.toBeNull();
});

it("should load default locale if there is no matching user's device preferred locale", () => {
    findBestAvailableLanguage.mockImplementationOnce(() => ({
        languageTag: 'es-ES',
        isRTL: false,
    }));

    const { queryByText } = render(
        <LocaleProvider locales={ locales }>
            <Text>
                <FormattedMessage id="apple" />
            </Text>
        </LocaleProvider>,
    );

    expect(queryByText(messages['en-US'].apple)).not.toBeNull();
});

it('should load initial locale by id if it exists', () => {
    const { queryByText } = render(
        <LocaleProvider locales={ locales } initialLocaleId="pt-PT">
            <Text>
                <FormattedMessage id="apple" />
            </Text>
        </LocaleProvider>,
    );

    expect(queryByText(messages['pt-PT'].apple)).not.toBeNull();
});

it('should throw if initial locale id does not exist', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});

    expect(() =>
        render(
            <LocaleProvider locales={ locales } initialLocaleId="es-ES">
                <Text>
                    <FormattedMessage id="apple" />
                </Text>
            </LocaleProvider>,
        ),
    ).toThrow(/Unknown initial locale id: es-ES./);
});

it('should throw if locales array is empty', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});

    expect(() =>
        render(
            <LocaleProvider locales={ [] }>
                <Text>
                    <FormattedMessage id="apple" />
                </Text>
            </LocaleProvider>,
        ),
    ).toThrow(/Locales array is empty. Please provide at least one locale \(default\)./);
});

it('should change locale when requested by a consumer', () => {
    const MyComponent = () => {
        const locale = useLocale();
        const changeLocaleToPtPt = () => locale.changeLocale('pt-PT');
        const changeLocaleToRuRu = () => locale.changeLocale('ru-RU');

        return (
            <View>
                <TouchableOpacity testID="button-pt-pt" onPress={ changeLocaleToPtPt } />
                <TouchableOpacity testID="button-ru-ru" onPress={ changeLocaleToRuRu } />
                <Text>
                    <FormattedMessage id="apple" />
                </Text>
            </View>
        );
    };

    const { getByTestId, getByText } = render(
        <LocaleProvider locales={ locales } initialLocaleId="en-US">
            <MyComponent />
        </LocaleProvider>,
    );

    expect(getByText(messages['en-US'].apple)).not.toBeNull();

    fireEvent.press(getByTestId('button-pt-pt'));
    expect(getByText(messages['pt-PT'].apple)).not.toBeNull();

    fireEvent.press(getByTestId('button-ru-ru'));
    expect(getByText(messages['ru-RU'].apple)).not.toBeNull();
});

it('should not change locale when a consumer requests an unknown locale', () => {
    const MyComponent = () => {
        const locale = useLocale();
        const changeLocaleToEsEs = () => locale.changeLocale('es-ES');

        return (
            <View>
                <TouchableOpacity testID="button-es-es" onPress={ changeLocaleToEsEs } />
                <Text>
                    <FormattedMessage id="apple" />
                </Text>
            </View>
        );
    };

    const { getByTestId, getByText } = render(
        <LocaleProvider locales={ locales } initialLocaleId="en-US">
            <MyComponent />
        </LocaleProvider>,
    );

    expect(getByText(messages['en-US'].apple)).not.toBeNull();

    fireEvent.press(getByTestId('button-es-es'));
    expect(getByText(messages['en-US'].apple)).not.toBeNull();
});

it('should callback when locale changes', () => {
    const onLocalChange = jest.fn();

    const MyComponent = () => {
        const locale = useLocale();
        const changeLocale = () => locale.changeLocale('ru-RU');

        return (
            <TouchableOpacity testID="button" onPress={ changeLocale } />
        );
    };

    const { getByTestId } = render(
        <LocaleProvider
            locales={ locales }
            initialLocaleId="en-US"
            onLocaleChange={ onLocalChange }>
            <MyComponent />
        </LocaleProvider>,
    );

    expect(onLocalChange).not.toHaveBeenCalled();

    fireEvent.press(getByTestId('button'));
    expect(onLocalChange).toHaveBeenNthCalledWith(1, 'ru-RU');
});

it('should fail if locales change but current locale does not exist', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});

    const { rerender } = render(<LocaleProvider locales={ locales } />);

    expect(() => {
        rerender(<LocaleProvider locales={ locales.slice(1) } />);
    }).toThrow(/Locales array changed. However, the current locale does not exist anymore./);
});

