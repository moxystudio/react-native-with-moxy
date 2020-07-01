import { StyleSheet } from 'react-native';

export default ({ colors }) => StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.background,
        height: 50,
        justifyContent: 'center',
    },
});
