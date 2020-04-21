import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '../../../shared/modules';
import { SafeAreaView } from 'react-native-safe-area-context';

import buildStyles from '../styles';

const ProfileScreen2 = () => {
    const { themeStyles } = useTheme();
    const styles = buildStyles(themeStyles);

    return (
        <SafeAreaView style={ styles.container }>
            <Text>This is the ProfileScreen2</Text>
        </SafeAreaView>
    );
};

export default ProfileScreen2;
