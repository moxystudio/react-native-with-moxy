import './shims';

import { AppRegistry } from 'react-native';
import { Client, Configuration } from 'bugsnag-react-native';
import appConfig from 'react-native-config';
import App from './src/app/App';
import { name as appName } from './app.json';
import { version } from './package.json';

const config = new Configuration(appConfig.BUGSNAG_TOKEN);

config.appVersion = version;

const bugsnag = new Client(config);

bugsnag.notify(new Error('Test error from prod build with dSYM files uploaded'));

AppRegistry.registerComponent(appName, () => App);
