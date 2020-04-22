import React, { forwardRef } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import useLocale from './use-locale';

const withReactNativeLocale = (WrappedComponent) => {
    const withReactNativeLocale = forwardRef((props, ref) => {
        const reactNativeLocale = useLocale();

        return (
            <WrappedComponent ref={ ref } reactNativeLocale={ reactNativeLocale } { ...props } />
        );
    });

    withReactNativeLocale.displayName = `withReactNativeLocale(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
    hoistNonReactStatics(withReactNativeLocale, WrappedComponent);

    return withReactNativeLocale;
};

export default withReactNativeLocale;
