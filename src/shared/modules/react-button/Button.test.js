import React from 'react';
import { TouchableHighlight, TouchableOpacity } from 'react-native';
import { mount } from 'enzyme';
import Button from './Button';

it('should render a TouchableHighlight when no type is supplied', () => {
    const tree = mount(
        <Button
            accessibilityLabel="button"
            title="button"
            onPress={ () => null } />,
    );

    expect(tree.find("[accessibilityLabel='button']").exists()).toBe(true);
    expect(tree.children().first().type()).toBe(TouchableHighlight);
});

it('should render a TouchableOpacity when type is opacity', () => {
    const tree = mount(
        <Button
            accessibilityLabel="button"
            title="button"
            onPress={ () => null }
            type="opacity" />,
    );

    expect(tree.find("[accessibilityLabel='button']").exists()).toBe(true);
    expect(tree.children().first().type()).toBe(TouchableOpacity);
});

it('should render title', () => {
    const tree = mount(
        <Button
            accessibilityLabel="button"
            title="button"
            onPress={ () => null }
            type="opacity" />,
    );

    expect(tree.find("[accessibilityLabel='button']").first().text()).toBe('button');
});

it('should call onPress callback', () => {
    const onPress = jest.fn();
    const tree = mount(
        <Button
            accessibilityLabel="button"
            title="button"
            onPress={ onPress }
            type="opacity" />,
    );

    tree.find("[accessibilityLabel='button']").first().props().onPress();

    expect(onPress).toHaveBeenCalledTimes(1);
});
