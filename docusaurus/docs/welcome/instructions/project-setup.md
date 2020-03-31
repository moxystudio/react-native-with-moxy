---
id: project-setup
title: Project setup
sidebar_label: Project setup
---

To kick-start your own project from this boilerplate, you can fork it from its [repository](https://github.com/moxystudio/react-native-with-moxy).
Afterwards, you'll just need to install its dependencies and you're good to go! 🚀

Keep in mind, part of adapting this boilerplate into a deliverable project is also changing this document into one that's about your project in specific. There are some things you must change to clean up any evidence of using this boilerplate.

TODO
- How to update package name for Android, bundle identifier for iOS, project name, etc.
- Which files are unnecessary and should be deleted
- App signing: How to create a team, iOS' provisioning profile and developer certificates and add setup them up in the project
- How to update Android app icon
- How to update iOS app icon

## 1. Prepare your app

Follow the links in the order listed below to prepare your app for production:

- [Configure app signing for Android release builds](android-app-signing.md)
- [Create a splash screen](splash-screen.md)

## 2. Replace the root README.md

Replace the root README.md file of the project with:

````md
# {Project Name}

{Brief explanation of the project}

## Documentation

This project comes with a documentation web page. To view it:

```bash
npm i --prefix docusaurus
npm run docs
```

````

## 3. Setup documentation

1. Remove algolia search from Docusaurus config:

    Remove the `themeConfig.algolia` key from `docusaurus/docusaurus.config.js`. The reason is that the search results indexed by Algolia will become out of sync with the documentation, causing it to possibly return wrong results (404 pages).

2. Prepare the rest of the documentation website to be deliverable to your clients!

