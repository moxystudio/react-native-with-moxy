import React from 'react';
import { Text } from 'react-native';
import { FormattedMessage } from 'react-intl';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../shared/modules';

import buildStyles from '../styles';

const ProfileScreen2 = () => {
    const { themeStyles } = useTheme();
    const styles = buildStyles(themeStyles);

    return (
        <SafeAreaView style={ styles.container }>
            <Text accessibilityLabel="title">
                <FormattedMessage id="profile2.title" />
            </Text>
        </SafeAreaView>
    );
};

export default ProfileScreen2;
