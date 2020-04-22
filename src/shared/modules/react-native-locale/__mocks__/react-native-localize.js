/* eslint-env jest */

const getLocales = jest.fn(() => [
    { countryCode: 'US', languageTag: 'en-US', languageCode: 'en', isRTL: false },
    { countryCode: 'FR', languageTag: 'fr-FR', languageCode: 'fr', isRTL: false },
]);

const findBestAvailableLanguage = jest.fn(() => ({
    languageTag: 'en-US',
    isRTL: false,
}));

const getNumberFormatSettings = jest.fn(() => ({
    decimalSeparator: '.',
    groupingSeparator: ',',
}));

const getCalendar = jest.fn(() => 'gregorian');
const getCountry = jest.fn(() => 'US');
const getCurrencies = jest.fn(() => ['USD', 'EUR']);
const getTemperatureUnit = jest.fn(() => 'celsius');
const getTimeZone = jest.fn(() => 'Europe/Paris');
const uses24HourClock = jest.fn(() => true);
const usesMetricSystem = jest.fn(() => true);
const addEventListener = jest.fn();
const removeEventListener = jest.fn();

export {
    findBestAvailableLanguage,
    getLocales,
    getNumberFormatSettings,
    getCalendar,
    getCountry,
    getCurrencies,
    getTemperatureUnit,
    getTimeZone,
    uses24HourClock,
    usesMetricSystem,
    addEventListener,
    removeEventListener,
};
