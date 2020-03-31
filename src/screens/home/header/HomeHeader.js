import React, { useMemo } from 'react';
import { View } from 'react-native';
import { Logo } from '../../../shared/media/icons';
import { useTheme, SafeAreaHeader } from '../../../shared/modules';

import createStyles from './styles';

const HomeHeader = () => {
    const { themeStyles } = useTheme();
    const styles = useMemo(() => createStyles(themeStyles), [themeStyles]);

    return (
        <SafeAreaHeader
            statusBarBackgroundColor={ themeStyles.colors.background }
            statusBarStyle="dark-content">
            <View style={ styles.container }>
                <Logo width="120" height="50" />
            </View>
        </SafeAreaHeader>
    );
};

export default HomeHeader;
