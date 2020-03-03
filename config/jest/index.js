// https://enzymejs.github.io/enzyme/docs/guides/react-native.html
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'http://www.wook.pt' });
const { window } = jsdom;

function copyProps(src, target) {
    Object.defineProperties(target, {
        ...Object.getOwnPropertyDescriptors(src),
        ...Object.getOwnPropertyDescriptors(target),
    });
}

global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: 'node.js',
};
copyProps(window, global);

const originalConsoleError = console.error;

console.error = (message) => {
    if (message.startsWith('Warning:')) {
        return;
    }

    originalConsoleError(message);
};
