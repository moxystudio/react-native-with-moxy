/* istanbul ignore file */

import enUS from './messages/en-US.json';
import ptPT from './messages/pt-PT.json';

export default {
    locales: [
        {
            id: 'en-US',
            name: 'English',
            messages: enUS,
        },
        {
            id: 'pt-PT',
            name: 'Português',
            messages: ptPT,
        },
    ],
};
