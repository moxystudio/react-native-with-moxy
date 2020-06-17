import React, { Component, createRef } from 'react';
import { render } from '@testing-library/react-native';
import AppConfigProvider from './AppConfigProvider';
import withAppConfig from './with-app-config';

it('should inject the appConfig prop with the current provider value', () => {
    expect.assertions(1);

    const MyComponent = withAppConfig(({ appConfig }) => {
        expect(appConfig).toEqual(
            expect.objectContaining({
                FOO: 'foo',
                BAR: 'bar',
            }),
        );

        return null;
    });

    render(
        <AppConfigProvider>
            <MyComponent />
        </AppConfigProvider>,
    );
});

it('should forward refs', () => {
    class MyComponent extends Component {
        render() {
            return null;
        }

        handlePress = () => {};
    }

    const EnhancedMyComponent = withAppConfig(MyComponent);
    const ref = createRef();

    render(
        <AppConfigProvider>
            <EnhancedMyComponent ref={ ref } />
        </AppConfigProvider>,
    );

    expect(ref.current.handlePress).toBeDefined();
});

it('should copy statics', () => {
    const MyComponent = () => {};

    MyComponent.foo = 'bar';

    const EnhancedMyComponent = withAppConfig(MyComponent);

    expect(EnhancedMyComponent.foo).toBe('bar');
});
