import React, { Component, createRef } from 'react';
import { mount } from 'enzyme';
import LocaleProvider from './LocaleProvider';
import withLocale from './with-locale';

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

it('should inject the reactNativeLocale prop with the current provider value', () => {
    expect.assertions(1);

    const MyComponent = withLocale(({ reactNativeLocale: locale }) => {
        expect(locale).toEqual(
            expect.objectContaining({
                id: 'en-US',
                locales,
                changeLocale: expect.any(Function),
                intl: expect.any(Object),
                localize: expect.any(Object),
            }),
        );

        return null;
    });

    mount(
        <LocaleProvider locales={ locales }>
            <MyComponent />
        </LocaleProvider>,
    );
});

it('should forward refs', () => {
    class MyComponent extends Component {
        render() {
            return null;
        }

        handlePress = () => {};
    }

    const EnhancedMyComponent = withLocale(MyComponent);
    const ref = createRef();

    mount(
        <LocaleProvider locales={ locales }>
            <EnhancedMyComponent ref={ ref } />
        </LocaleProvider>,
    );

    expect(ref.current.handlePress).toBeDefined();
});

it('should copy statics', () => {
    const MyComponent = () => {};

    MyComponent.foo = 'bar';

    const EnhancedMyComponent = withLocale(MyComponent);

    expect(EnhancedMyComponent.foo).toBe('bar');
});
