import React from 'react';
import { mount } from 'enzyme';
import AppConfigProvider from './AppConfigProvider';
import useAppConfig from './use-app-config';

it('should pass the app config through the component tree', () => {
    expect.assertions(1);

    const MyComponent = () => {
        const appConfig = useAppConfig();

        expect(appConfig).toEqual(expect.objectContaining({
            FOO: 'foo',
            BAR: 'bar',
        }));

        return null;
    };

    mount(
        <AppConfigProvider>
            <MyComponent />
        </AppConfigProvider>,
    );
});
