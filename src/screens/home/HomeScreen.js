import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import NfcManager, { NfcTech, NfcEvents, NfcError } from 'react-native-nfc-manager';
import { Button, useTheme } from '../../shared/modules';
import HomeHeader from './header';

import createStyles from './styles';

const HomeScreen = ({ navigation }) => {
    navigation.setOptions({
        header: HomeHeader,
    });

    const { themeStyles } = useTheme();
    const styles = useMemo(() => createStyles(themeStyles), [themeStyles]);
    const [isNfcSessionActive, setNfcSessionActive] = useState(false);
    const [isSafeTimeoutEnabled, setEnableSafeTimeout] = useState(false);

    useEffect(() => {
        const setupNfc = async () => {
            try {
                const nfcSupported = await NfcManager.isSupported(NfcTech.Iso15693IOS);

                if (!nfcSupported) {
                    console.error('[setupNfc] NFC is not supported');
                }

                await NfcManager.start();
            } catch (error) {
                console.error('[setupNfc] NfcManager did not start', { error });
            }
        };

        setupNfc();
    }, []);

    useEffect(() => {
        let timeoutId;

        NfcManager.setEventListener(NfcEvents.SessionClosed, () => {
            console.log('[NFC event] session closed');

            if (isSafeTimeoutEnabled) {
                timeoutId = setTimeout(() => {
                    setNfcSessionActive(false);
                }, 2000);
            } else {
                setNfcSessionActive(false);
            }
        });

        return () => {
            timeoutId && clearTimeout(timeoutId);
            NfcManager.setEventListener(NfcEvents.SessionClosed, null);
        };
    }, [isSafeTimeoutEnabled]);

    const toggleSafetyTimeout = useCallback(() => {
        setEnableSafeTimeout((state) => !state);
    }, []);

    const startNfcScan = useCallback(async () => {
        setNfcSessionActive(true);

        try {
            await NfcManager.requestTechnology(NfcTech.Iso15693IOS);
        } catch (error) {
            if (error instanceof NfcError.UserCancel) {
                console.log('[startNfcScan] requestTechnology canceled by user');

                return;
            }

            console.error('[startNfcScan] requestTechnology failed', { error: error.message });
        }
    }, []);

    return (
        <SafeAreaView style={ styles.safeArea }>
            <View style={ styles.container }>
                <Text style={ styles.text }>
                    { isNfcSessionActive ? 'NFC session still active, please wait...' : 'Ready to scan!' }
                </Text>
                <Text style={ styles.text }>
                    { isSafeTimeoutEnabled ? '2 second safety timeout enabled!' : 'Safety timeout disabled' }
                </Text>
                <Button
                    type="highlight"
                    title="Start NFC scan"
                    style={ [styles.button, isNfcSessionActive && styles.buttonDisabled] }
                    onPress={ startNfcScan }
                    textStyle={ styles.buttonText }
                    underlayColor="blue" />
                <Button
                    type="highlight"
                    title={ isSafeTimeoutEnabled ? 'Disable safety timeout' : 'Enable safety timeout' }
                    style={ styles.button }
                    onPress={ toggleSafetyTimeout }
                    textStyle={ styles.buttonText }
                    underlayColor="blue"
                    disabled={ isNfcSessionActive } />
            </View>
        </SafeAreaView>
    );
};

HomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
