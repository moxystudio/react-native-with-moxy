import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Button from './Button';

it('should render a TouchableHighlight when no type is supplied', () => {
    const { getByLabelText } = render(
        <Button
            accessibilityLabel="button"
            title="button"
            onPress={ () => null } />,
    );

    const pressable = getByLabelText('button');

    expect(pressable.type).toBe('TouchableHighlight');
});

it('should render a TouchableOpacity when type is opacity', () => {
    const { getByLabelText } = render(
        <Button
            accessibilityLabel="button"
            title="button"
            onPress={ () => null }
            type="opacity" />,
    );

    const pressable = getByLabelText('button');

    expect(pressable.type).toBe('TouchableOpacity');
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
