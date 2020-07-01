import { StyleSheet } from 'react-native';

export default ({ colors }) => StyleSheet.create({
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
});
