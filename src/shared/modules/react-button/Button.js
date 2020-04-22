import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, TouchableHighlight } from 'react-native';

const Button = ({ type, style, title, onPress, textStyle, ...props }) => {
    const Touchable = type === 'highlight' ? TouchableHighlight : TouchableOpacity;

    return (
        <Touchable style={ style } onPress={ onPress } { ...props }>
            <Text style={ textStyle }>{ title }</Text>
        </Touchable>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(['highlight', 'opacity']),
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object),
    ]),
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]).isRequired,
    textStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object),
    ]),
    onPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
    type: 'highlight',
};

export default Button;
