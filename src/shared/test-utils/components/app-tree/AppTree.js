import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '../../../components';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const AppTree = ({ children }) => (
    <SafeAreaProvider>
        <ThemeProvider>
            { children }
        </ThemeProvider>
    </SafeAreaProvider>
);

AppTree.propTypes = {
    children: PropTypes.node,
};

export default AppTree;
