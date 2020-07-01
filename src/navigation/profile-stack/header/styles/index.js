import { StyleSheet } from 'react-native';

export default ({ typography, colors, layout }) => StyleSheet.create({
    goBack: {
        ...typography.bold,
        color: colors.secondary,
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        paddingHorizontal: layout.gutter,
    },
    title: {
        ...typography.regular,
        color: colors.terciary,
    },
});
