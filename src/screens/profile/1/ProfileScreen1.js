import React from 'react';
import { Text, View } from 'react-native';
import { FormattedMessage } from 'react-intl';
import SafeAreaView from 'react-native-safe-area-view';
import { useTheme } from '../../../shared/modules';

import createStyles from '../styles';

const ProfileScreen1 = () => {
    const { themeStyles } = useTheme();
    const styles = createStyles(themeStyles);

    return (
        <SafeAreaView style={ styles.safeArea }>
            <View style={ styles.container }>
                <Text accessibilityLabel="title" accessibilityHint="title">
                    <FormattedMessage id="profile1.title" />
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen1;
