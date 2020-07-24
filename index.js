import './shims';

import { AppRegistry } from 'react-native';
import { Client } from 'bugsnag-react-native';
import appConfig from 'react-native-config';
import App from './src/app/App';
import { name as appName } from './app.json';

const bugsnag = new Client(appConfig.BUGSNAG_TOKEN);

bugsnag.notify(new Error('Test error'));

AppRegistry.registerComponent(appName, () => App);
