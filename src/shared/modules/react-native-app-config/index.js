import AppConfigContext from './context';

const AppConfigConsumer = AppConfigContext.Consumer;

export { default as AppConfigProvider } from './AppConfigProvider';
export { AppConfigConsumer };
export { default as useAppConfig } from './use-app-config';
export { default as withAppConfig } from './with-app-config';
