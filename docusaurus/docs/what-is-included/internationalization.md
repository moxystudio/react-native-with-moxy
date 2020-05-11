---
id: internationalization
title: Internationalization
sidebar_label: Internationalization
---

All of our projects have i18n support built-in, even if there's no need to initially have more than one locale. By having i18n support from the very beginning, the project itself is built with that in mind, making it very easy to add new locales in the future without having to refactor a good portion of your app.

We have chosen [`react-intl`](https://github.com/formatjs/react-intl/) for internationalization and localization because:

- It has a large community and is being actively maintained.
- Built on the standard [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) API.
- It can localize strings, numbers, dates and relative dates.
- Runs in the browser, Node.js and React Native.

Additionally, we also make use of [`react-native-localize`](https://github.com/react-native-community/react-native-localize) to get hold of locale settings from the device's operating system.

## How to use

The boilerplate ships with a few modules which you can use to format and translate your app's messages:
- `LocaleProvider` - React context provider. Wraps your app's navigation in `src/app/App.js`.
- `LocaleConsumer` - React context consumer.
- `useLocale` - React hook.
- `withLocale` - React HOC (high-order component).

All four modules above belong to `src/shared/modules/react-native-locale` package. In the Home screen of the app, you can find an example of how to use `useLocale` and how to create a handler to switch the selected language between English and Portuguese when a button is pressed. The value returned by `useLocale` is exactly the same one injected by `withLocale` and rendered by `LocaleConsumer`.

## Locale resolution

When the app is launched, if `initialLocaleId` is not defined, `LocaleProvider` attempts to find the best possible match between the preferred locales defined in the device's operating system and the locales defined for the app. If a match is found, the translations for the matched locale are loaded. Otherwise, the translations for the default locale, `en-US`, are loaded. If your app offers an in-app locale picker and persists the user's choice, i.e. with Redux, make sure to pass it to `initialLocaleId` when `LocaleProvider` is first rendered.

## Adding a new locale

1. Add the locale to the `intl/index.js` file, following the default `en-US` locale.
2. Add the messages file to `intl/messages/<locale>.json`.

## Removing this feature

If you are really sure internationalization is not needed in your project, you'll want to remove all the unnecessary `intl` related code. Be sure to follow these steps in order to clean your project properly:

1. Uninstall `react-intl`, `react-native-localize` and `full-icu`.
2. Remove the `NODE_ICU_DATA` environment variable from `test` script, found in `package.json`.
3. Remove the `intl` folder.
4. Search globally for `react-intl` and remove the corresponding code across the project.
5. Update your unit tests if necessary so that they all pass!
