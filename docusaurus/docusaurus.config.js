'use strict';

module.exports = {
    title: 'React Native with MOXY',
    tagline: 'MOXY\'s boilerplate to create React Native applications',
    url: 'https://react-native-with.moxy.tech',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'moxystudio',
    projectName: 'react-native-with-moxy',
    themeConfig: {
        algolia: {
            apiKey: 'baa3fe735b25b3fcee8ce0fc23228039',
            indexName: 'react-native-with-moxy',
        },
        navbar: {
            hideOnScroll: true,
            title: 'React Native with MOXY',
            logo: {
                alt: 'React Native with MOXY',
                src: 'img/logo-nwm.png',
            },
            links: [
                {
                    href: 'https://github.com/moxystudio/react-native-with-moxy',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            logo: {
                alt: 'MOXY studio logo',
                src: 'img/logo-moxy.svg',
            },
            copyright: `Copyright © ${new Date().getFullYear()} MOXY studio`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
