import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../shared/components';

import buildStyles from '../styles';

const ProfileScreen1 = () => {
    const { themeStyles } = useTheme();
    const styles = buildStyles(themeStyles);

    return (
        <View style={ styles.container }>
            <Text>This is the ProfileScreen1</Text>
        </View>
    );
};

export default ProfileScreen1;
