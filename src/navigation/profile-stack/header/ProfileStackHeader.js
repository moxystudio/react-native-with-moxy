import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { FormattedMessage } from 'react-intl';
import SafeAreaView from 'react-native-safe-area-view';
import { Button, useTheme } from '../../../shared/modules';

import createStyles from './styles';

const ProfileStackHeader = ({ navigation }) => {
    const { themeStyles } = useTheme();
    const styles = createStyles(themeStyles);

    const handlePress = useCallback(() => {
        navigation.pop();
    }, [navigation]);

    return (
        <SafeAreaView>
            <View style={ styles.header }>
                <Button
                    accessibilityLabel="back button"
                    title={ <FormattedMessage id="profile.header.buttons.back" /> }
                    textStyle={ styles.goBack }
                    onPress={ handlePress } />
                <Text
                    accessibilityLabel="title"
                    style={ styles.title }>
                    <FormattedMessage id="profile.header.title" />
                </Text>
            </View>
        </SafeAreaView>
    );
};

ProfileStackHeader.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default ProfileStackHeader;
