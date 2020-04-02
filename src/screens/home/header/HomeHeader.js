import React, { useMemo } from 'react';
import { View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { Logo } from '../../../shared/media/icons';

import createStyles from './styles';

const HomeHeader = () => {
    const styles = useMemo(() => createStyles(), []);

    return (
        <SafeAreaView>
            <View style={ styles.container }>
                <Logo width="120" height="50" />
            </View>
        </SafeAreaView>
    );
};

export default HomeHeader;
