import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const StoreProvider = ({ children, ...props }) => {
    const { current: { store, purge, persist } } = useRef(props);
    const [isPurging, setPurging] = useState(purge && !!store.persistor);
    const childrenFn = (storeReady) => children({ storeReady, store });

    useEffect(() => {
        if (!persist) {
            store.persistor?.pause();
        }

        if (purge) {
            store.persistor?.purge()
                .catch(() => null)
                .finally(() => setPurging(false));
        }
    }, []); /* eslint-disable-line react-hooks/exhaustive-deps */

    if (isPurging) {
        return childrenFn(false);
    }

    if (!store.persistor) {
        return (
            <Provider store={ store }>
                { childrenFn(true) }
            </Provider>
        );
    }

    return (
        <Provider store={ store }>
            <PersistGate persistor={ store.persistor }>
                { childrenFn }
            </PersistGate>
        </Provider>
    );
};

StoreProvider.propTypes = {
    children: PropTypes.func.isRequired,
    persist: PropTypes.bool,
    purge: PropTypes.bool,
    store: PropTypes.shape({
        dispatch: PropTypes.func.isRequired,
        getState: PropTypes.func.isRequired,
        persistor: PropTypes.shape({
            purge: PropTypes.func.isRequired,
            pause: PropTypes.func.isRequired,
        }),
    }).isRequired,
};

StoreProvider.defaultProps = {
    persist: true,
    purge: false,
};

export default StoreProvider;
