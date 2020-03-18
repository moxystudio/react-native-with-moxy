import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button, useTheme } from '../../../shared/components';

import buildStyles from './styles';

const ProfileHeader = ({ navigation }) => {
    const { themeStyles } = useTheme();
    const styles = buildStyles(themeStyles);

    const handlePress = useCallback(() => {
        navigation.pop();
    }, [navigation]);

    return (
        <View style={ styles.header }>
            <Button title="Go back" textStyle={ styles.goBack } onPress={ handlePress } />
            <Text style={ styles.title }>Profile Stack</Text>
        </View>
    );
};

ProfileHeader.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default ProfileHeader;
