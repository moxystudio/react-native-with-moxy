/* eslint-disable react-native/no-color-literals */

import { StyleSheet } from 'react-native';

export default ({ typography, colors, layout }) => StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: layout.gutter,
        height: 50,
        justifyContent: 'center',
        marginTop: layout.gutter,
        width: 200,
    },
    buttonDisabled: {
        backgroundColor: 'red',
    },
    buttonText: {
        ...typography.bold,
        color: 'white',
        fontSize: 16,
    },
    container: {
        alignItems: 'center',
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'center',
    },
    safeArea: {
        backgroundColor: colors.background,
        flex: 1,
    },
    text: {
        ...typography.regular,
        color: colors.primary,
    },
});
