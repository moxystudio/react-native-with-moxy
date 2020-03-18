import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '../../../components';

const AppTree = ({ children }) => (
    <ThemeProvider>
        { children }
    </ThemeProvider>
);

AppTree.propTypes = {
    children: PropTypes.node,
};

export default AppTree;
