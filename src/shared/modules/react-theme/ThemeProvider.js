import React from 'react';
import PropTypes from 'prop-types';
import * as themeStyles from '../../styles';
import ThemeContext from './context';

const Provider = ThemeContext.Provider;

const ThemeProvider = ({ children }) => (
    <Provider value={ { themeStyles } }>
        { children }
    </Provider>
);

ThemeProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export default ThemeProvider;
