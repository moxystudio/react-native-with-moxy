import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

it('should render correctly when no type is supplied', () => {
    const tree = shallow(
        <Button title="Test" onPress={ () => null } />,
    );

    expect(tree.find('TouchableHighlight').exists()).toBe(true);
});

it('should render correctly when type is opacity', () => {
    const tree = shallow(
        <Button title="Test" onPress={ () => null } type="opacity" />,
    );

    expect(tree.find('TouchableOpacity').exists()).toBe(true);
});
