import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
// import { FormattedMessage } from 'react-intl';
import SafeAreaView from 'react-native-safe-area-view';
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';
import { Button, useTheme, useLocale } from '../../shared/modules';
import HomeHeader from './header';

import createStyles from './styles';

const HomeScreen = ({ navigation }) => {
    navigation.setOptions({
        header: HomeHeader,
    });

    const { themeStyles } = useTheme();
    const styles = useMemo(() => createStyles(themeStyles), [themeStyles]);
    const [isConferenceInProgress, setConferenceInProgress] = useState(false);
    // const locale = useLocale();
    // const handleNavigateToProfile = useCallback(() => {
    //     navigation.navigate('Profile', { screen: 'Profile2' });
    // }, [navigation]);
    // const handleSwitchLanguage = useCallback(() => {
    //     locale.changeLocale(locale.id === 'pt-PT' ? 'en-US' : 'pt-PT');
    // }, [locale]);

    const onConferenceTerminated = (nativeEvent) => {
        console.log('onConferenceTerminated', { nativeEvent });
        setConferenceInProgress(false);
    };

    const onConferenceJoined = (nativeEvent) => {
        console.log('onConferenceJoined', { nativeEvent });
    };

    const onConferenceWillJoin = (nativeEvent) => {
        console.log('onConferenceWillJoin', { nativeEvent });
    };

    const handleConferenceStartPress = () => {
        setConferenceInProgress(true);
    };

    useEffect(() => {
        if (isConferenceInProgress) {
            setTimeout(() => JitsiMeet.call('https://meet.jit.si/RNWMJitsi'), 1000);
        }
    }, [isConferenceInProgress]);

    return (
        <SafeAreaView style={ styles.safeArea }>
            <View style={ styles.container }>
                {/* <Text
                    accessibilityLabel="title"
                    accessibilityHint="title"
                    style={ styles.text }>
                    <FormattedMessage id="home.title" />
                </Text> */}
                { !isConferenceInProgress && <Button
                    accessibilityLabel="navigate to profile screen"
                    accessibilityHint="navigate to profile screen"
                    type="highlight"
                    title="Join conference"
                    style={ styles.button }
                    onPress={ handleConferenceStartPress }
                    textStyle={ styles.buttonText }
                    underlayColor={ themeStyles.colors.terciary } /> }
                {/* <Button
                    accessibilityLabel="switch language button"
                    accessibilityHint="switch language button"
                    type="highlight"
                    title={ <FormattedMessage id="home.buttons.switch-language" values={ { localeId: locale.id } } /> }
                    style={ styles.button }
                    onPress={ handleSwitchLanguage }
                    textStyle={ styles.buttonText }
                    underlayColor={ themeStyles.colors.terciary } /> */}
                { isConferenceInProgress && <JitsiMeetView
                    style={ styles.jitsi }
                    onConferenceWillJoin={ onConferenceWillJoin }
                    onConferenceTerminated={ onConferenceTerminated }
                    onConferenceJoined={ onConferenceJoined } /> }
            </View>
        </SafeAreaView>
    );
};

HomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
