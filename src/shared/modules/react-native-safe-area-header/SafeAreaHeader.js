import React from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import RNSafeAreaView from 'react-native-safe-area-view';

const getStatusBarProps = (props) =>
    Object.entries(props).reduce((statusBarProps, [key, value]) => {
        const propNamePrefix = 'statusBar';

        if (key.startsWith(propNamePrefix)) {
            key = `${key.charAt(propNamePrefix.length).toLowerCase()}${key.slice(propNamePrefix.length + 1)}`;

            return { ...statusBarProps, [key]: value };
        }

        return statusBarProps;
    }, {});

const SafeAreaHeader = ({
    children,
    style,
    statusBarBackgroundColor,
    statusBarStyle,
    ...props
}) => {
    const statusBarProps = getStatusBarProps(props);
    const isBackgroundTransparent = statusBarBackgroundColor === 'transparent';

    return (
        <RNSafeAreaView
            style={ [
                style,
                // Style backgroundColor only works on iOS
                { backgroundColor: statusBarBackgroundColor },
            ] }
            { ...props }>
            <StatusBar
                barStyle={ statusBarStyle }
                // Prop backgroundColor only works on Android
                backgroundColor={ statusBarBackgroundColor }
                // Prop translucent only works on Android
                // If the background color is transparent but the status bar is not translucent,
                // a greyish color is rendered which is not the desired behavior in any circunstance.
                // Therefore, it only makes sense to make the status bar transparent when it's translucent as well.
                translucent={ isBackgroundTransparent }
                { ...statusBarProps } />
            { children }
        </RNSafeAreaView>
    );
};

SafeAreaHeader.propTypes = {
    children: PropTypes.element.isRequired,
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
    ]),
    statusBarStyle: PropTypes.string,
    statusBarBackgroundColor: PropTypes.string,
};

export default SafeAreaHeader;
