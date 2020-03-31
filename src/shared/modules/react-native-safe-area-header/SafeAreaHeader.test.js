import React from 'react';
import { StatusBar, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { render } from '../../test-utils';
import SafeAreaHeader from './';

beforeEach(jest.clearAllMocks);

const TestSafeAreaHeader = (props) => (
    <SafeAreaHeader { ...props }>
        <View testID="child-view" />
    </SafeAreaHeader>
);

it('should render children', () => {
    const { queryByTestId } = render(<TestSafeAreaHeader />);

    expect(queryByTestId('child-view')).not.toBeNull();
});

it('should render SafeAreaView', () => {
    render(<TestSafeAreaHeader />);

    expect(SafeAreaView).toHaveBeenCalledTimes(1);
});

it('should propagate style to SafeAreaView', () => {
    render(<TestSafeAreaHeader style={ { foo: 'bar' } } />);

    expect(SafeAreaView).toHaveBeenCalledWith(expect.objectContaining({
        style: expect.arrayContaining([{ foo: 'bar' }]),
    }), {});
});

it('should set backgroundColor style on SafeAreaView when statusBarBackgroundColor is passed', () => {
    render(<TestSafeAreaHeader statusBarBackgroundColor="#123456" />);

    expect(SafeAreaView).toHaveBeenCalledWith(expect.objectContaining({
        style: expect.arrayContaining([{ backgroundColor: '#123456' }]),
    }), {});
});

it('should render StatusBar', () => {
    render(<TestSafeAreaHeader />);

    expect(StatusBar).toHaveBeenCalledTimes(1);
});

it('should set backgroundColor prop on StatusBar when statusBarBackgroundColor is passed', () => {
    render(<TestSafeAreaHeader statusBarBackgroundColor="#123456" />);

    expect(StatusBar).toHaveBeenCalledWith(expect.objectContaining({
        backgroundColor: '#123456',
    }), {});
});

it('should make StatusBar translucent when background color is transparent', () => {
    render(<TestSafeAreaHeader statusBarBackgroundColor="transparent" />);

    expect(StatusBar).toHaveBeenCalledWith(expect.objectContaining({
        backgroundColor: 'transparent',
        translucent: true,
    }), {});
});

it("should propagate all props prefixed with 'statusBar' to StatusBar", () => {
    render(
        <TestSafeAreaHeader
            statusBarBackgroundColor="transparent"
            statusBarStyle="dark-content"
            statusBarProp1="foo"
            statusBarProp2="bar" />,
    );

    expect(StatusBar).toHaveBeenCalledWith(expect.objectContaining({
        backgroundColor: 'transparent',
        barStyle: 'dark-content',
        prop1: 'foo',
        prop2: 'bar',
    }), {});
});

