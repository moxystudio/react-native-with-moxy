import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { mount } from 'enzyme';
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

    const tree = mount(
        <LocaleProvider locales={ locales }>
            <Text accessibilityLabel="message">
                <FormattedMessage id="apple" />
            </Text>
        </LocaleProvider>,
    );

    const message = tree.find("[accessibilityLabel='message']").first().text();

    expect(message).toBe(messages['ru-RU'].apple);
});

it("should load default locale if there is no matching user's device preferred locale", () => {
    findBestAvailableLanguage.mockImplementationOnce(() => ({
        languageTag: 'es-ES',
        isRTL: false,
    }));

    const tree = mount(
        <LocaleProvider locales={ locales }>
            <Text accessibilityLabel="message">
                <FormattedMessage id="apple" />
            </Text>
        </LocaleProvider>,
    );

    const message = tree.find("[accessibilityLabel='message']").first().text();

    expect(message).toBe(messages['en-US'].apple);
});

it('should load initial locale by id if it exists', () => {
    const tree = mount(
        <LocaleProvider locales={ locales } initialLocaleId="pt-PT">
            <Text accessibilityLabel="message">
                <FormattedMessage id="apple" />
            </Text>
        </LocaleProvider>,
    );

    const message = tree.find("[accessibilityLabel='message']").first().text();

    expect(message).toBe(messages['pt-PT'].apple);
});

it('should throw if initial locale id does not exist', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});

    expect(() =>
        mount(
            <LocaleProvider locales={ locales } initialLocaleId="es-ES">
                <Text accessibilityLabel="message">
                    <FormattedMessage id="apple" />
                </Text>
            </LocaleProvider>,
        ),
    ).toThrow(/Unknown initial locale id: es-ES./);
});

it('should throw if locales array is empty', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});

    expect(() =>
        mount(
            <LocaleProvider locales={ [] }>
                <Text accessibilityLabel="message">
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
                <TouchableOpacity accessibilityLabel="button-pt-pt" onPress={ changeLocaleToPtPt } />
                <TouchableOpacity accessibilityLabel="button-ru-ru" onPress={ changeLocaleToRuRu } />
                <Text accessibilityLabel="message">
                    <FormattedMessage id="apple" />
                </Text>
            </View>
        );
    };

    const tree = mount(
        <LocaleProvider locales={ locales } initialLocaleId="en-US">
            <MyComponent />
        </LocaleProvider>,
    );

    const buttonPtPt = tree.find("[accessibilityLabel='button-pt-pt']").first();
    const buttonRuRu = tree.find("[accessibilityLabel='button-ru-ru']").first();
    const getMessage = () => tree.find("[accessibilityLabel='message']").first().text();

    expect(getMessage()).toBe(messages['en-US'].apple);

    buttonPtPt.props().onPress();
    expect(getMessage()).toBe(messages['pt-PT'].apple);

    buttonRuRu.props().onPress();
    expect(getMessage()).toBe(messages['ru-RU'].apple);
});

it('should not change locale when a consumer requests an unknown locale', () => {
    const MyComponent = () => {
        const locale = useLocale();
        const changeLocaleToEsEs = () => locale.changeLocale('es-ES');

        return (
            <View>
                <TouchableOpacity accessibilityLabel="button-es-es" onPress={ changeLocaleToEsEs } />
                <Text accessibilityLabel="message">
                    <FormattedMessage id="apple" />
                </Text>
            </View>
        );
    };

    const tree = mount(
        <LocaleProvider locales={ locales } initialLocaleId="en-US">
            <MyComponent />
        </LocaleProvider>,
    );

    const buttonEsEs = tree.find("[accessibilityLabel='button-es-es']").first();
    const getMessage = () => tree.find("[accessibilityLabel='message']").first().text();

    expect(getMessage()).toBe(messages['en-US'].apple);

    buttonEsEs.props().onPress();
    expect(getMessage()).toBe(messages['en-US'].apple);
});

it('should callback when locale changes', () => {
    const onLocalChange = jest.fn();

    const MyComponent = () => {
        const locale = useLocale();
        const changeLocale = () => locale.changeLocale('ru-RU');

        return (
            <TouchableOpacity accessibilityLabel="button" onPress={ changeLocale } />
        );
    };

    const tree = mount(
        <LocaleProvider
            locales={ locales }
            initialLocaleId="en-US"
            onLocaleChange={ onLocalChange }>
            <MyComponent />
        </LocaleProvider>,
    );

    const buttonRuRu = tree.find("[accessibilityLabel='button']").first();

    expect(onLocalChange).not.toHaveBeenCalled();

    buttonRuRu.props().onPress();
    expect(onLocalChange).toHaveBeenNthCalledWith(1, 'ru-RU');
});

it('should fail if locales change but current locale does not exist', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});

    const tree = mount(
        <LocaleProvider locales={ locales } />,
    );

    expect(() => {
        tree.setProps({ locales: locales.slice(1) });
    }).toThrow(/Locales array changed. However, the current locale does not exist anymore./);
});

