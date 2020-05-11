/* eslint-env jest */

const createMigrate = jest.fn(() => () => Promise.resolve());
const persistStore = () => ({
    purge: jest.fn().mockResolvedValue(),
    persist: jest.fn(),
    pause: jest.fn(),
});
const persistReducer = (_, reducer) => reducer;

export {
    createMigrate,
    persistStore,
    persistReducer,
};
