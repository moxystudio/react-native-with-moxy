import { StyleSheet } from 'react-native';

export default ({ typography, colors, layout }) => StyleSheet.create({
    header: {
        height: 50,
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
