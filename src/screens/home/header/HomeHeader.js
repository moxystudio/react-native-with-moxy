import React, { useMemo } from 'react';
import { View } from 'react-native';
import { Logo } from '../../../shared/media/icons';

import buildStyles from './styles';

const HomeHeader = () => {
    const styles = useMemo(() => buildStyles(), []);

    return (
        <View style={ styles.header }>
            <Logo width="120" height="50" />
        </View>
    );
};

export default HomeHeader;
