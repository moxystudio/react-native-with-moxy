import React from 'react';
import PropTypes from 'prop-types';
import * as themeStyles from '../../styles';

export const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => (
    <ThemeContext.Provider value={ { themeStyles } }>
        { children }
    </ThemeContext.Provider>
);

ThemeContextProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export default ThemeContextProvider;
