import React from 'react';
import { render } from '@testing-library/react-native';
import AppConfigProvider from './AppConfigProvider';
import useAppConfig from './use-app-config';

it('should return the current provider value', () => {
    expect.assertions(1);

    const MyComponent = () => {
        const appConfig = useAppConfig();

        expect(appConfig).toEqual(
            expect.objectContaining({
                FOO: 'foo',
                BAR: 'bar',
            }),
        );

        return null;
    };

    render(
        <AppConfigProvider>
            <MyComponent />
        </AppConfigProvider>,
    );
});
