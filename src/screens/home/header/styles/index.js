import { StyleSheet } from 'react-native';

export default ({ colors }) => StyleSheet.create({
    container: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
    },
});
