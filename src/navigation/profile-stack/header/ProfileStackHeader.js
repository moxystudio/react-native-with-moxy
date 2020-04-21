import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button, useTheme } from '../../../shared/modules';
import { SafeAreaView } from 'react-native-safe-area-context';

import buildStyles from './styles';

const ProfileStackHeader = ({ navigation }) => {
    const { themeStyles } = useTheme();
    const styles = buildStyles(themeStyles);

    const handlePress = useCallback(() => {
        navigation.pop();
    }, [navigation]);

    return (
        <SafeAreaView style={ styles.safeAreaView }>
            <View style={ styles.header }>
                <Button title="Go back" textStyle={ styles.goBack } onPress={ handlePress } />
                <Text style={ styles.title }>Profile Stack</Text>
            </View>
        </SafeAreaView>
    );
};

ProfileStackHeader.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default ProfileStackHeader;
