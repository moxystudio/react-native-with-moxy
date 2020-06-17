import React from 'react';
import { render } from '@testing-library/react-native';
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

it('should return the current provider value', () => {
    expect.assertions(1);

    const MyComponent = () => {
        const locale = useLocale();

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
    };

    render(
        <LocaleProvider locales={ locales }>
            <MyComponent />
        </LocaleProvider>,
    );
});
