/* eslint-env jest */

const PersistGate = jest.fn(({ children }) => children(false));

export {
    PersistGate,
};
