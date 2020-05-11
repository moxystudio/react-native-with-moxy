import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import StoreProvider from './StoreProvider';

const mockPersistor = {
    purge: jest.fn().mockResolvedValue(),
    pause: jest.fn(),
    persist: jest.fn(),
};

const mockStore = {
    dispatch: jest.fn(),
    getState: jest.fn(),
    persistor: mockPersistor,
};

jest.mock('react-redux', () => ({
    Provider: jest.fn(({ children }) => children),
}));

beforeEach(() => {
    jest.clearAllMocks();
});

const render = (props) => {
    let renderProps;
    const childrenFn = jest.fn((props) => {
        renderProps = props;

        return <View />;
    });

    const wrapper = mount(
        <StoreProvider
            store={ mockStore }
            { ...props }>
            { childrenFn }
        </StoreProvider>,
    );

    return {
        wrapper,
        childrenFn,
        ...renderProps,
    };
};

it('should render Redux Provider and PersistGate', () => {
    const context = expect.any(Object);

    render();

    expect(Provider).toHaveBeenNthCalledWith(1, expect.objectContaining({ store: mockStore }), context);
    expect(PersistGate).toHaveBeenNthCalledWith(1, expect.objectContaining({ persistor: mockPersistor }), context);
});

it('should pause persistance when persist is false', () => {
    render({ persist: false });

    expect(mockPersistor.pause).toHaveBeenCalledTimes(1);
});

it('should render children with not ready persist store when hydrating and with store store ready after', () => {
    const MockPersistGate = ({ children }) => {
        const [isStoreReady, setStoreReady] = useState(false);

        useEffect(() => {
            setStoreReady(true);
        }, []);

        return children(isStoreReady);
    };

    PersistGate
        .mockImplementationOnce(MockPersistGate)
        .mockImplementationOnce(MockPersistGate);

    const { childrenFn } = render();

    expect(childrenFn).toHaveBeenNthCalledWith(1, expect.objectContaining({ store: mockStore, storeReady: false }));
    expect(childrenFn).toHaveBeenNthCalledWith(2, expect.objectContaining({ store: mockStore, storeReady: true }));
    expect(childrenFn.mock.calls).toHaveLength(2);
});

it('should not render Redux Provider nor PersistGate while purging state and do it after purge succeeds', async () => {
    const purgePromise = Promise.resolve();

    render({
        purge: true,
        store: {
            ...mockStore,
            persistor: { ...mockPersistor, purge: jest.fn(() => purgePromise) },
        },
    });

    expect(Provider).not.toHaveBeenCalled();
    expect(PersistGate).not.toHaveBeenCalled();

    await act(() => purgePromise);

    expect(Provider).toHaveBeenCalledTimes(1);
    expect(PersistGate).toHaveBeenCalledTimes(1);
});

it('should not render Redux Provider nor PersistGate while purging state and do it after purge fails', async () => {
    const errorFixture = new Error('error');
    const purgePromise = Promise.reject(errorFixture);

    render({
        purge: true,
        store: {
            ...mockStore,
            persistor: { ...mockPersistor, purge: jest.fn(() => purgePromise) },
        },
    });

    expect(Provider).not.toHaveBeenCalled();
    expect(PersistGate).not.toHaveBeenCalled();

    try {
        await act(() => purgePromise);
    } catch (error) {
        expect(Provider).toHaveBeenCalledTimes(1);
        expect(PersistGate).toHaveBeenCalledTimes(1);
    }
});

it('should not render PersistGate when store is not a persist store', () => {
    render({
        store: {
            ...mockStore,
            persistor: undefined,
        },
    });

    expect(Provider).toHaveBeenCalledTimes(1);
    expect(PersistGate).not.toHaveBeenCalled();
});
