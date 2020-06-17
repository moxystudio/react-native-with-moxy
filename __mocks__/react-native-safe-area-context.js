/* eslint-env jest */

const insets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
};

export const SafeAreaProvider = jest.fn(({ children }) => children);
export const SafeAreaConsumer = ({ children }) => children(insets);
export const SafeAreaView = ({ children }) => children;
export const SafeAreaContext = null;
export const EdgeInsets = insets;
export const useSafeArea = () => insets;
export const initialWindowSafeAreaInsets = insets;

