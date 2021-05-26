import React from 'react';
import { TouchableHighlight, TouchableOpacity } from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';
import Button from './Button';

it('should render a TouchableHighlight when no type is supplied', () => {
    const { UNSAFE_getByType: getByType } = render(
        <Button
            accessibilityLabel="button"
            title="button"
            onPress={ () => null } />,
    );

    const touchableHighlight = getByType(TouchableHighlight);

    expect(touchableHighlight).toBeDefined();
});

it('should render a TouchableOpacity when type is opacity', () => {
    const { UNSAFE_getByType: getByType } = render(
        <Button
            accessibilityLabel="button"
            title="button"
            onPress={ () => null }
            type="opacity" />,
    );

    const touchableOpacity = getByType(TouchableOpacity);

    expect(touchableOpacity).toBeDefined();
});

it('should render title', () => {
    const { queryByText } = render(
        <Button
            accessibilityLabel="button"
            title="button"
            onPress={ () => null }
            type="opacity" />,
    );

    expect(queryByText('button')).not.toBeNull();
});

it('should call onPress callback', () => {
    const onPress = jest.fn();
    const { getByLabelText } = render(
        <Button
            accessibilityLabel="button"
            title="button"
            onPress={ onPress }
            type="opacity" />,
    );

    const pressable = getByLabelText('button');

    fireEvent.press(pressable);

    expect(onPress).toHaveBeenCalledTimes(1);
});
