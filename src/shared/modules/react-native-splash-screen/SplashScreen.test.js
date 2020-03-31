import React from 'react';
import { View } from 'react-native';
import { render as ntlRender } from '@testing-library/react-native';
import BootSplash from 'react-native-bootsplash';
import SplashScreen from './SplashScreen';

const TestSplashScreen = (props) => (
    <SplashScreen { ...props }>
        <View testID="child-view" />
    </SplashScreen>
);

const render = (props) => ntlRender(<TestSplashScreen { ...props } />);

afterEach(jest.clearAllMocks);

it('should hide splash screen and render children when hide is true', () => {
    const { queryByTestId, rerender } = render({ hide: false });

    expect(queryByTestId('child-view')).toBeNull();

    rerender(<TestSplashScreen hide />);

    expect(BootSplash.hide).toHaveBeenCalled();
    expect(queryByTestId('child-view')).not.toBeNull();
});

it('should hide splash screen immediately when hide is undefined', () => {
    const { queryByTestId } = render();

    expect(BootSplash.hide).toHaveBeenCalled();
    expect(queryByTestId('child-view')).not.toBeNull();
});

it('should call hide with default fadeOutDurationMs value', () => {
    render();

    expect(BootSplash.hide).toHaveBeenCalledWith({ duration: 500 });
});

it('should call hide with custom fadeOutDurationMs value', () => {
    render({ fadeOutDurationMs: 300 });

    expect(BootSplash.hide).toHaveBeenCalledWith({ duration: 300 });
});

it("should call hide only once in component's lifetime", () => {
    const { rerender } = render();

    rerender(<TestSplashScreen hide />);
    rerender(<TestSplashScreen hide={ false } />);
    rerender(<TestSplashScreen hide />);

    expect(BootSplash.hide).toHaveBeenCalledTimes(1);
});
