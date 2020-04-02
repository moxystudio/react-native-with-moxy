import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { FormattedMessage } from 'react-intl';
import SafeAreaView from 'react-native-safe-area-view';
import { Button, useTheme, useLocale } from '../../shared/modules';
import HomeHeader from './header';

import createStyles from './styles';

const HomeScreen = ({ navigation }) => {
    navigation.setOptions({
        header: HomeHeader,
    });

    const { themeStyles } = useTheme();
    const styles = useMemo(() => createStyles(themeStyles), [themeStyles]);
    const locale = useLocale();
    const handleNavigateToProfile = useCallback(() => {
        navigation.navigate('Profile', { screen: 'Profile2' });
    }, [navigation]);
    const handleSwitchLanguage = useCallback(() => {
        locale.changeLocale(locale.id === 'pt-PT' ? 'en-US' : 'pt-PT');
    }, [locale]);

    return (
        <SafeAreaView style={ styles.safeArea }>
            <View style={ styles.container }>
                <Text
                    accessibilityLabel="title"
                    style={ styles.text }>
                    <FormattedMessage id="home.title" />
                </Text>
                <Button
                    accessibilityLabel="navigate to profile button"
                    type="highlight"
                    title={ <FormattedMessage id="home.buttons.navigate-to-profile" /> }
                    style={ styles.button }
                    onPress={ handleNavigateToProfile }
                    textStyle={ styles.buttonText }
                    underlayColor={ themeStyles.colors.terciary } />
                <Button
                    accessibilityLabel="switch language button"
                    type="highlight"
                    title={ <FormattedMessage id="home.buttons.switch-language" values={ { localeId: locale.id } } /> }
                    style={ styles.button }
                    onPress={ handleSwitchLanguage }
                    textStyle={ styles.buttonText }
                    underlayColor={ themeStyles.colors.terciary } />
            </View>
        </SafeAreaView>
    );
};

HomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
