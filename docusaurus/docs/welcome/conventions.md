---
id: conventions
title: Conventions
sidebar_label: Conventions
---

This boilerplate establishes some conventions that the team executing the project should follow.

## Folder structure

The folder structure convention favours co-location of assets and their requesters. Here's how it looks like:

```
├── package-lock.json
├── package.json
└── src
    ├── app
    │   ├── App.js
    │   └── App.test.js
    ├── navigation
    │   ├── index.js
    │   ├── index.test.js
    │   ├── profile-stack
    │   │   ├── header
    │   │   │   ├── ProfileStackHeader.js
    │   │   │   ├── ProfileStackHeader.test.js
    │   │   │   ├── styles
    │   │   │   │   └── index.js
    │   │   │   └── index.js
    │   │   ├── index.js
    │   │   └── index.test.js
    │   └── root
    │       ├── index.js
    │       └── index.test.js
    ├── screens
    │   ├── home
    │   │   ├── HomeScreen.js
    │   │   ├── HomeScreen.test.js
    │   │   ├── header
    │   │   ├── styles
    │   │   │   └── index.js
    |   |   └── index.js
    │   └── profile
    │       ├── ProfileScreen.js
    │       ├── ProfileScreen.test.js
    │       ├── styles
    │       │   └── index.js
    |       └── index.js
    └── shared
        ├── components
        ├── media
        │   ├── fonts
        │   └── icons
        ├── styles
        └── test-utils
            └── components
```

...where:

- `src`: Where the code for your application will be.
    - `app`: Where your App component will be.
    - `navigation`: Where you can define your navigators and corresponding routes for your application.
        - `index.js`: This file is where the root stack is defined and other navigators are imported in.
        - `profile-stack`: This is an example of a navigator that you'll reference in the root stack and the structure you'll find inside it. The folder must always be sufixed with the type of navigator it refers to (in this case, it is a stack navigator). Commonly, you'll find the following files / folders here:
            - `index.js`: This is your navigator file.
            - `index.test.js`: This is the test file corresponding to this navigator.
            - `header`: Sometimes a navigator may have an header different from the rest of the app. Default headers are set at navigator creation via options.
                - `ProfileStackHeader.js` - This is your header component file.
                - `ProfileStackHeader.index.js` - This is the test file corresponding to this component.
                - `index.js` - This file will simply export your header file.
                - `styles` - This is where you'll have styles that are only used in this component. As in React Native we do not have CSS, the folder contains a single `index.js` file which exports the styles.
                - `components`: If you have abstracted parts of this component into smaller components, use this folder to co-locate them.
    - `screens`: Where you can store the source code of your screens. The screens are referenced in the navigator so you will be getting the screen files to the navigation route component from here.
        - `home`: This an example of a component and the structure you'll find inside. Commonly, you'll find the following files here:
            - `index.js`: This file will simply export your component file.
            - `Home.js`: This is your component file.
            - `Home.test.js`: This is the test file corresponding to this component.
            - `header`: Similar to what happens in navigation this folder is where we define a custom header for this screen. The structure is the same as the one specified for navigator-level headers. Custom screen headers are configured in the render function through the `navigation` prop as follows: `navigation.setOptions({ header: () => <HomeHeader /> })`.
            - `styles`: This is where you'll have styles that are only used in this component. As in React Native there is no CSS, the folder contains a single `index.js` file which exports the styles.
            - `components`: If you have abstracted parts of this component into smaller components, use this folder to co-locate them.
    - `shared`: Where you can put content that is shared between pages and cannot be directly co-located with its interested parties.
        - `components`: The folder for components that are shared between screens. You can find an example just above of what files each component is expected to have.
        - `media`: The folder for media (images, fonts, etc.) that is shared between many components.
            - `fonts`: This is where you can store your font files.
            - `images`: This is where you can store image files.
        - `styles`:  The folder for `.js` files that will passed down through the components tree using `ThemeContext`. This contains mostly what we usually have on web projects: `mixins`, `typography`, `colors` with a slight twist on its definitions as it is JavaScript only.
        - `services`: This is where you can store your web API clients.
