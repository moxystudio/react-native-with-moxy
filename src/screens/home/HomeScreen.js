import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import HomeHeader from './header';
import { Button, useTheme } from '../../shared/react';
import { SafeAreaView } from 'react-native-safe-area-context';

import buildStyles from './styles';

const HomeScreen = ({ navigation }) => {
    navigation.setOptions({
        header: () => <HomeHeader />,
    });

    const { themeStyles } = useTheme();
    const styles = useMemo(() => buildStyles(themeStyles), [themeStyles]);

    const handlePress = useCallback(() => {
        navigation.navigate('Profile', { screen: 'Profile2' });
    }, [navigation]);

    return (
        <SafeAreaView style={ styles.container }>
            <Text style={ styles.text }>This is the Homescreen</Text>
            <Button
                type="highlight"
                title="Go To Profile"
                style={ styles.button }
                onPress={ handlePress }
                textStyle={ styles.buttonText }
                underlayColor={ themeStyles.colors.terciary } />
        </SafeAreaView>
    );
};

HomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
