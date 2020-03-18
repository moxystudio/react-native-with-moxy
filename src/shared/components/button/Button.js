import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, TouchableHighlight } from 'react-native';

const Button = ({ type, style, title, onPress, textStyle, ...props }) => {
    const Component = type === 'highlight' ? TouchableHighlight : TouchableOpacity;

    return (
        <Component style={ style } onPress={ onPress } { ...props }>
            <Text style={ textStyle }>{ title }</Text>
        </Component>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(['highlight', 'opacity']),
    style: PropTypes.object,
    title: PropTypes.string,
    textStyle: PropTypes.object,
    onPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
    type: 'highlight',
};

export default Button;
