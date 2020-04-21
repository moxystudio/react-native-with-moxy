/* eslint-env jest */

const STACK_NAVIGATOR = ({
    Navigator: jest.fn(({ children }) => children),
    Screen: jest.fn(() => null),
});

const createStackNavigator = () => STACK_NAVIGATOR;

export {
    createStackNavigator,
};
