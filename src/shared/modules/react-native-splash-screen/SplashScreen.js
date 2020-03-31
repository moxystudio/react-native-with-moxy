import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BootSplash from 'react-native-bootsplash';

const SplashScreen = ({ hide, fadeOutDurationMs, children }) => {
    const [isHidden, setHidden] = useState(false);
    const autoHide = hide === undefined;
    const doHide = autoHide || hide;

    useEffect(() => {
        if (doHide && !isHidden) {
            BootSplash.hide({ duration: fadeOutDurationMs });
            setHidden(true);
        }
    }, [doHide, fadeOutDurationMs, isHidden]);

    return isHidden ? children : null;
};

SplashScreen.propTypes = {
    children: PropTypes.element.isRequired,
    hide: PropTypes.bool,
    fadeOutDurationMs: PropTypes.number,
};

SplashScreen.defaultProps = {
    fadeOutDurationMs: 500,
};

export default SplashScreen;
