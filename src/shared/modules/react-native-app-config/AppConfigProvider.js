import React from 'react';
import PropTypes from 'prop-types';
import AppConfigContext from './context';
import appConfig from './app-config';

const Provider = AppConfigContext.Provider;

const AppConfigProvider = ({ children }) => (
    <Provider value={ appConfig }>
        { children }
    </Provider>
);

AppConfigProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export default AppConfigProvider;
