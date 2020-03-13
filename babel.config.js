module.exports = function (api) {
    const babelConfig = { presets: ['module:metro-react-native-babel-preset'] };

    if (api.env('production')) {
        babelConfig.plugins = ['transform-remove-console'];
    }

    return babelConfig;
};
