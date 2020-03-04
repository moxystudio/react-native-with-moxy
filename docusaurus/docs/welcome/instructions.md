---
id: instructions
title: Instructions
sidebar_label: Instructions
---

To kick-start your own project from this boilerplate, you can fork it from its [repository](https://github.com/moxystudio/react-native-with-moxy).
Afterwards, you'll just need to install its dependencies and you're good to go! 🚀

Keep in mind, part of adapting this boilerplate into a deliverable project is also changing this document into one that's about your project in specific. There are some things you must change to clean up any evidence of using this boilerplate.

## 1. Tweak some project files

### TODO
Add instructions on:
- How to update package name for Android, bundle identifier for iOS, project name, etc.
- How to setup environment (.env) configuration
- Which files are unnecessary and should be deleted
- App signing: How to create Android's upload key and add it to the project
- App signing: How to create a team, iOS' provisioning profile and developer certificates and add setup them up in the project
- How to update Android app icon
- How to update iOS app icon

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

