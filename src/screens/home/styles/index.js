import { StyleSheet } from 'react-native';

export default ({ typography, colors, layout }) => StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: layout.gutter,
        height: 50,
        justifyContent: 'center',
        marginTop: layout.gutter,
        width: 200,
    },
    buttonText: {
        ...typography.bold,
        color: colors.secondary,
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
