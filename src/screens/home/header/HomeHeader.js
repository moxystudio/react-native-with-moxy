import React, { useMemo } from 'react';
import { Logo } from '../../../shared/media/icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import buildStyles from './styles';

const HomeHeader = () => {
    const styles = useMemo(() => buildStyles(), []);

    return (
        <SafeAreaView style={ styles.header }>
            <Logo width="120" height="50" />
        </SafeAreaView>
    );
};

export default HomeHeader;
