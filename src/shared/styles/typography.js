/* istanbul ignore file */

import { Platform } from 'react-native';

export default {
    regular: {
        fontFamily: 'Lato-Regular',
        fontWeight: 'normal',
        paddingTop: 4,
        paddingBottom: 6,
    },
    thin: {
        fontFamily: Platform.isIOS ? 'Lato-Hairline' : 'Lato-Thin',
        fontWeight: 'normal',
        paddingTop: 4,
        paddingBottom: 6,
    },
    bold: {
        fontFamily: 'Lato-Bold',
        fontWeight: 'normal',
        paddingTop: 4,
        paddingBottom: 6,
    },
};
