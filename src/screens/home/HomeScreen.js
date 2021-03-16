import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { FormattedMessage } from 'react-intl';
import SafeAreaView from 'react-native-safe-area-view';
import { authorize } from 'react-native-app-auth';
import decodeJwt from 'jwt-decode';
import { Button, useTheme, useLocale } from '../../shared/modules';
import HomeHeader from './header';

import createStyles from './styles';

const handleLogin = async () => {
    const config = {
        issuer: 'https://acompanhamentos.b2clogin.com/acompanhamentos.onmicrosoft.com/b2c_1_susi/v2.0/',
        clientId: '99da3af7-3e1b-4c86-9e55-2de8a6cf8ede',
        redirectUrl: 'rnwm://login/callback/',
        scopes: ['openid', 'profile', 'email'],
    };

    try {
        const authState = await authorize(config);

        console.log('handleLogin', { authState, decodedJwt: decodeJwt(authState.idToken) });
    } catch (error) {
        console.log('handleLogin', { error });
    }
};

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
                    accessibilityHint="title"
                    style={ styles.text }>
                    <FormattedMessage id="home.title" />
                </Text>
                <Button
                    accessibilityLabel="navigate to profile screen"
                    accessibilityHint="navigate to profile screen"
                    type="highlight"
                    title={ <FormattedMessage id="home.buttons.navigate-to-profile" /> }
                    style={ styles.button }
                    onPress={ handleNavigateToProfile }
                    textStyle={ styles.buttonText }
                    underlayColor={ themeStyles.colors.terciary } />
                <Button
                    accessibilityLabel="switch language button"
                    accessibilityHint="switch language button"
                    type="highlight"
                    title={ <FormattedMessage id="home.buttons.switch-language" values={ { localeId: locale.id } } /> }
                    style={ styles.button }
                    onPress={ handleSwitchLanguage }
                    textStyle={ styles.buttonText }
                    underlayColor={ themeStyles.colors.terciary } />
                <Button
                    accessibilityLabel="login"
                    accessibilityHint="login"
                    type="highlight"
                    title="Login"
                    style={ styles.button }
                    onPress={ handleLogin }
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
