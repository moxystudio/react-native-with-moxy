import { StyleSheet } from 'react-native';

export default ({ typography, colors, layout }) => StyleSheet.create({
    safeAreaView: {
        height: 100,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: layout.gutter,
    },
    goBack: {
        ...typography.bold,
        color: colors.secondary,
    },
    title: {
        ...typography.regular,
        color: colors.terciary,
    },
});
