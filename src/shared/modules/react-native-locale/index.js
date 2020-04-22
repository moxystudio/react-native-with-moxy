import LocaleContext from './context';

const LocaleConsumer = LocaleContext.Consumer;

export { default as LocaleProvider } from './LocaleProvider';
export { LocaleConsumer };
export { default as useLocale } from './use-locale';
export { default as withLocale } from './with-locale';
