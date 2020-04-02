import React, { forwardRef } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import useAppConfig from './use-app-config';

const withAppConfig = (WrappedComponent) => {
    const withAppConfig = forwardRef((props, ref) => {
        const appConfig = useAppConfig();

        return (
            <WrappedComponent ref={ ref } appConfig={ appConfig } { ...props } />
        );
    });

    withAppConfig.displayName = `withAppConfig(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
    hoistNonReactStatics(withAppConfig, WrappedComponent);

    return withAppConfig;
};

export default withAppConfig;
