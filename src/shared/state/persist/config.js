/* istanbul ignore file */

import { createMigrate } from 'redux-persist';
import migrations from './migrations';

export default {
    root: {
        debug: __DEV__,
        version: Object.keys(migrations).pop() || 0,
        blacklist: [],
        transforms: [],
        migrate: createMigrate(migrations, { debug: __DEV__ }),
    },
};
