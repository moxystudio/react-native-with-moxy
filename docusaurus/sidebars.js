'use strict';

module.exports = {
    docs: [
        {
            type: 'category',
            label: 'Welcome',
            items: [
                'welcome/what-is-this',
                {
                    type: 'category',
                    label: 'Instructions',
                    items: [
                        'welcome/instructions/project-setup',
                        'welcome/instructions/android-app-signing',
                        'welcome/instructions/splash-screen',
                    ],
                },
                'welcome/conventions',
            ],
        },
        {
            type: 'category',
            label: 'What\'s included',
            items: [
                'what-is-included/available-scripts',
                'what-is-included/react-navigation',
                'what-is-included/eslint',
                'what-is-included/internationalization',
                'what-is-included/testing-with-jest-native-testing-library',
                'what-is-included/environment-variables',
            ],
        },
        {
            type: 'category',
            label: 'Recipes',
            items: [
                'recipes/redux',
            ],
        },
        {
            type: 'doc',
            id: 'this-document',
        },
    ],
};
