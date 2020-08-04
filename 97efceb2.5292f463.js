(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{69:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return d})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),a=(r(0),r(81)),s=r(83),i={id:"redux",title:"Setting up Redux",sidebar_label:"Redux"},c={unversionedId:"recipes/redux",id:"recipes/redux",isDocsHomePage:!1,title:"Setting up Redux",description:"In this recipe, you will be guided through the process of setting up a disk persistence-enabled Redux store in your React Native app.",source:"@site/docs/recipes/redux.mdx",permalink:"/docs/recipes/redux",sidebar_label:"Redux",sidebar:"docs",previous:{title:"Environment Variables",permalink:"/docs/what-is-included/environment-variables"},next:{title:"This document",permalink:"/docs/this-document"}},d=[{value:"1. Install dependencies",id:"1-install-dependencies",children:[]},{value:"2. Configuring your store",id:"2-configuring-your-store",children:[]},{value:"3. Create <code>StoreProvider</code>",id:"3-create-storeprovider",children:[]},{value:"3. Wrap navigation with <code>StoreProvider</code>",id:"3-wrap-navigation-with-storeprovider",children:[]},{value:"4. State directory tree",id:"4-state-directory-tree",children:[]},{value:"5. Complete store configuration",id:"5-complete-store-configuration",children:[]},{value:"6. Source code",id:"6-source-code",children:[]}],p={rightToc:d};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("img",{src:Object(s.a)("recipes-assets/setting-up-redux/redux-logo.svg"),alt:"Redux",width:"300"}),Object(a.b)("p",null,"In this recipe, you will be guided through the process of setting up a disk persistence-enabled Redux store in your React Native app."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u2139\ufe0f It is assumed you have an understanding of Redux concepts, how it works, and knowledge of the most common tools revolving Redux's ecosystem. In case you don't, first please go through the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux.js.org/basics/basic-tutorial"}),"official introductory document")," before proceeding. We also recommend you read the Advanced Tutorial material, otherwise, it might be difficult for you to follow this recipe.")),Object(a.b)("h2",{id:"1-install-dependencies"},"1. Install dependencies"),Object(a.b)("p",null,"Install the following packages:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"redux")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"react-redux")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"redux-devtools-extension")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"redux-thunk")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"redux-persist")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@react-native-community/async-storage"))),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"$ npm i redux react-redux redux-devtools-extension redux-thunk redux-persist @react-native-community/async-storage\n")),Object(a.b)("h2",{id:"2-configuring-your-store"},"2. Configuring your store"),Object(a.b)("p",null,"This section demonstrates how to create your Redux store. The store is wired up with the following functionality:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Dispatch (asynchronous) action creators with ",Object(a.b)("inlineCode",{parentName:"li"},"redux-thunk")," middleware."),Object(a.b)("li",{parentName:"ul"},"Debug, while in development, what's going on in the store with ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux-devtools"}),"Redux DevTools")," by activating ",Object(a.b)("inlineCode",{parentName:"li"},"redux-devtools-extension"),"."),Object(a.b)("li",{parentName:"ul"},"Manage state persisted in disk with ",Object(a.b)("inlineCode",{parentName:"li"},"redux-persist")," backed by ",Object(a.b)("inlineCode",{parentName:"li"},"@react-native-community/async-storage")," as storage engine. The state is rehydrated back automatically to the point where it was left off when the app was closed.")),Object(a.b)("p",null,"Create the files as shown in the sections below."),Object(a.b)("h4",{id:"srcsharedstatebuildstorejs"},Object(a.b)("inlineCode",{parentName:"h4"},"src/shared/state/buildStore.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { createStore, applyMiddleware, combineReducers } from 'redux';\nimport thunkMiddleware from 'redux-thunk';\nimport { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';\nimport { createPersistReducer, createStorePersistor } from './persist';\n\nconst reducers = {\n    app: (state = {}) => state,\n};\n\nconst initialState = {};\n\nconst modules = {};\n\nconst buildStore = (reducerFn = combineReducers) => {\n    const middlewares = [\n        thunkMiddleware.withExtraArgument(modules),\n    ];\n    const enhancer = composeWithDevTools(\n        applyMiddleware(...middlewares),\n    );\n    const rootReducer = reducerFn(reducers);\n    const store = createStore(rootReducer, initialState, enhancer);\n\n    return store;\n};\n\nconst buildPersistStore = () => {\n    const store = buildStore(createPersistReducer);\n\n    return {\n        ...store,\n        persistor: createStorePersistor(store),\n    };\n};\n\nexport default buildPersistStore;\n")),Object(a.b)("p",null,"How to use your store and tweak it further:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Add your own reducers to the ",Object(a.b)("inlineCode",{parentName:"li"},"reducers")," object. The ",Object(a.b)("inlineCode",{parentName:"li"},"app")," reducer above is just a sample reducer."),Object(a.b)("li",{parentName:"ul"},"Add your own middlewares to the ",Object(a.b)("inlineCode",{parentName:"li"},"middleware")," array."),Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"modules")," object allows you to pass arbitrary data to your action creators and middlewares. An API client module is a good example of what ",Object(a.b)("inlineCode",{parentName:"li"},"modules")," can be used for. Feel free to rename this variable to better suit your needs.")),Object(a.b)("h4",{id:"srcsharedstatepersistindexjs"},Object(a.b)("inlineCode",{parentName:"h4"},"src/shared/state/persist/index.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { combineReducers } from 'redux';\nimport { persistReducer, persistStore } from 'redux-persist';\nimport AsyncStorage from '@react-native-community/async-storage';\nimport config from './config';\n\nexport const createPersistReducer = (reducers) => persistReducer(\n    { key: 'root', storage: AsyncStorage, ...config.root },\n    combineReducers(\n        Object.entries(reducers).reduce((reducers, [key, reducer]) => ({\n            ...reducers,\n            [key]: config[key] ?\n                persistReducer({ ...config[key], key, storage: AsyncStorage }, reducer) :\n                reducer,\n        }), {}),\n    ),\n);\n\nexport const createStorePersistor = (store) => persistStore(store);\n")),Object(a.b)("h4",{id:"srcsharedstatepersistconfigjs"},Object(a.b)("inlineCode",{parentName:"h4"},"src/shared/state/persist/config.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { createMigrate } from 'redux-persist';\nimport migrations from './migrations';\n\nexport default {\n    root: {\n        debug: __DEV__,\n        version: Object.keys(migrations).pop() || 0,\n        blacklist: [],\n        transforms: [],\n        migrate: createMigrate(migrations, { debug: __DEV__ }),\n    },\n};\n")),Object(a.b)("h4",{id:"srcsharedstatepersistmigrationsjs"},Object(a.b)("inlineCode",{parentName:"h4"},"src/shared/state/persist/migrations.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"export default {};\n")),Object(a.b)("p",null,"Persistence allows you to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Select, through blacklists, whitelists and transforms, which parts of the state get to be serialized to disk and deserialized (rehydrated) back to the app."),Object(a.b)("li",{parentName:"ul"},"Maintain different versions of the state and move from an older version to a newer one with migrations.")),Object(a.b)("p",null,"By default, the whole state tree is persisted. Head to ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/rt2zz/redux-persist"}),Object(a.b)("inlineCode",{parentName:"a"},"redux-persist"))," repository to learn more about how Redux store persistence works and how it can be configured and customized."),Object(a.b)("h2",{id:"3-create-storeprovider"},"3. Create ",Object(a.b)("inlineCode",{parentName:"h2"},"StoreProvider")),Object(a.b)("p",null,"The next step is to put together Redux's ",Object(a.b)("inlineCode",{parentName:"p"},"Provider")," and ",Object(a.b)("inlineCode",{parentName:"p"},"redux-persist"),"'s ",Object(a.b)("inlineCode",{parentName:"p"},"PersistGate"),"."),Object(a.b)("p",null,"Create the files as shown in the sections below."),Object(a.b)("h4",{id:"srcsharedmodulesreact-native-storestoreproviderjs"},Object(a.b)("inlineCode",{parentName:"h4"},"src/shared/modules/react-native-store/StoreProvider.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import React, { useEffect, useState, useRef } from 'react';\nimport PropTypes from 'prop-types';\nimport { Provider } from 'react-redux';\nimport { PersistGate } from 'redux-persist/integration/react';\n\nconst StoreProvider = ({ children, ...props }) => {\n    const { current: { store, purge, persist } } = useRef(props);\n    const [isPurging, setPurging] = useState(purge && !!store.persistor);\n    const childrenFn = (storeReady) => children({ storeReady });\n\n    useEffect(() => {\n        if (!persist) {\n            store.persistor?.pause();\n        }\n\n        if (purge) {\n            store.persistor?.purge()\n                .catch(() => null)\n                .finally(() => setPurging(false));\n        }\n    }, []); /* eslint-disable-line react-hooks/exhaustive-deps */\n\n    if (isPurging) {\n        return childrenFn(false);\n    }\n\n    if (!store.persistor) {\n        return (\n            <Provider store={ store }>\n                { childrenFn(true) }\n            </Provider>\n        );\n    }\n\n    return (\n        <Provider store={ store }>\n            <PersistGate persistor={ store.persistor }>\n                { childrenFn }\n            </PersistGate>\n        </Provider>\n    );\n};\n\nStoreProvider.propTypes = {\n    children: PropTypes.func.isRequired,\n    persist: PropTypes.bool,\n    purge: PropTypes.bool,\n    store: PropTypes.shape({\n        dispatch: PropTypes.func.isRequired,\n        getState: PropTypes.func.isRequired,\n        persistor: PropTypes.shape({\n            purge: PropTypes.func.isRequired,\n            pause: PropTypes.func.isRequired,\n        }),\n    }).isRequired,\n};\n\nStoreProvider.defaultProps = {\n    persist: true,\n    purge: false,\n};\n\nexport default StoreProvider;\n")),Object(a.b)("p",null,"How ",Object(a.b)("inlineCode",{parentName:"p"},"StoreProvider")," works:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Persistence is enabled by default. You can choose to disable persistence by setting ",Object(a.b)("inlineCode",{parentName:"li"},"persist")," prop to ",Object(a.b)("inlineCode",{parentName:"li"},"false"),". ",Object(a.b)("inlineCode",{parentName:"li"},"StoreProvider")," does not listen to changes to ",Object(a.b)("inlineCode",{parentName:"li"},"persist")," after mounting."),Object(a.b)("li",{parentName:"ul"},"You can choose to purge the persisted state by setting ",Object(a.b)("inlineCode",{parentName:"li"},"purge")," prop to ",Object(a.b)("inlineCode",{parentName:"li"},"true"),". ",Object(a.b)("inlineCode",{parentName:"li"},"StoreProvider")," does not listen to changes to ",Object(a.b)("inlineCode",{parentName:"li"},"purge")," after mounting."),Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"children")," render prop is called with ",Object(a.b)("inlineCode",{parentName:"li"},"storeReady")," set to ",Object(a.b)("inlineCode",{parentName:"li"},"false")," while the store is rehydrating. Once rehydrated, ",Object(a.b)("inlineCode",{parentName:"li"},"storeReady")," changes to ",Object(a.b)("inlineCode",{parentName:"li"},"true"),".")),Object(a.b)("h2",{id:"3-wrap-navigation-with-storeprovider"},"3. Wrap navigation with ",Object(a.b)("inlineCode",{parentName:"h2"},"StoreProvider")),Object(a.b)("p",null,"Finally, all that is left to do is render ",Object(a.b)("inlineCode",{parentName:"p"},"StoreProvider")," on top of your app's navigation."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u2757\ufe0fNote that if you have other components that require access to the Redux store, make sure ",Object(a.b)("inlineCode",{parentName:"p"},"StoreProvider")," is rendered before them.")),Object(a.b)("h4",{id:"srcappappjs"},"src/app/App.js"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// ...\nimport buildStore from '../shared/state/buildStore';\n// ...\n\nconst App = () => {\n    // ...\n    <StoreProvider store={ buildStore() }>\n        { ({ storeReady }) => (\n            <NavigationContainer ref={ rootNavigation.navigationRef }>\n                <AppStack />\n            </NavigationContainer>\n        ) }\n    </StoreProvider>\n    // ...\n}\n// ...\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u2757\ufe0fDo not render your app's navigation before the store is rehydrated! Use ",Object(a.b)("inlineCode",{parentName:"p"},"storeReady")," to determine when the navigation should be rendered. You should render a splash screen while the store is being rehydrated and then hide it when it's done rehydrating.")),Object(a.b)("h2",{id:"4-state-directory-tree"},"4. State directory tree"),Object(a.b)("p",null,"We recommend the following structure to organize Redux's concerns: actions, action types, reducers, selectors and middlewares. In the simplistic and contrived example below, the ",Object(a.b)("inlineCode",{parentName:"p"},"app")," directory represents a slice of the global state your app manages. As your app's state grows, this approach scales really well as it enables you to split up concerns by domains. Suppose you need state to manage user-related information: all you have to do is create a ",Object(a.b)("inlineCode",{parentName:"p"},"user")," directory, at the same level as ",Object(a.b)("inlineCode",{parentName:"p"},"app"),"'s, and replicate the file structure."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),".\n\u2514\u2500\u2500 app\n    \u251c\u2500\u2500 actionTypes.js\n    \u251c\u2500\u2500 actions.js\n    \u251c\u2500\u2500 index.js\n    \u251c\u2500\u2500 reducer.js\n    \u2514\u2500\u2500 selectors.js\n")),Object(a.b)("h4",{id:"srcsharedstateappindexjs"},Object(a.b)("inlineCode",{parentName:"h4"},"src/shared/state/app/index.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import reducer from './reducer';\nimport * as actionTypes from './actionTypes';\nimport * as actions from './actions';\nimport * as selectors from './selectors';\nimport * as middlewares from './middlewares';\n\nexport {\n    actionTypes,\n    actions,\n    reducer,\n    selectors,\n    middlewares,\n};\n")),Object(a.b)("h4",{id:"srcsharedstateappactiontypesjs"},Object(a.b)("inlineCode",{parentName:"h4"},"src/shared/state/app/actionTypes.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"export const SET_APP_VERSION = 'app/SET_APP_VERSION';\n")),Object(a.b)("h4",{id:"srcsharedstateappactionsjs"},Object(a.b)("inlineCode",{parentName:"h4"},"src/shared/state/app/actions.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import * as actionTypes from './actionTypes';\n\nconst setAppVersion = (version) => ({\n    type: actionTypes.SET_APP_VERSION,\n    payload: version,\n});\n\nexport {\n    setAppVersion,\n};\n")),Object(a.b)("h4",{id:"srcsharedstateappreducerjs"},Object(a.b)("inlineCode",{parentName:"h4"},"src/shared/state/app/reducer.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import * as actionTypes from './actionTypes';\n\nconst initialState = {\n    version: null,\n};\n\nexport default (state, action) => {\n    if (action.type !== actionTypes.SET_APP_VERSION) {\n        return state;\n    }\n\n    return {\n        ...state,\n        version: action.payload,\n    }\n}\n")),Object(a.b)("h4",{id:"srcsharedstateappselectorsjs"},Object(a.b)("inlineCode",{parentName:"h4"},"src/shared/state/app/selectors.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const getAppVersion = (state) => state.app.version;\n\nexport {\n    getAppVersion,\n};\n")),Object(a.b)("h4",{id:"srcsharedstateappmiddlewaresjs"},Object(a.b)("inlineCode",{parentName:"h4"},"src/shared/state/app/middlewares.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import * as actionTypes from './actionTypes';\nimport * as selectors from './selectors';\n\nconst logVersionChangeMiddleware = (store) => (next) => (action) => {\n    if (action.type !== actionTypes.SET_APP_VERSION) {\n        return next(action);\n    }\n\n    const previousAppVersion = selectors.getAppVersion(store.getState());\n\n    console.log(`Previous app version: ${previousAppVersion}`);\n\n    const result = next(action);\n    const currentAppVersion = selectors.getAppVersion(store.getState());\n\n    console.log(`Current app version: ${currentAppVersion}`);\n\n    return result;\n};\n\nexport {\n    logVersionChangeMiddleware,\n};\n")),Object(a.b)("h2",{id:"5-complete-store-configuration"},"5. Complete store configuration"),Object(a.b)("p",null,"Following through the example ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"#4-state-directory-tree"}),"above"),", the store setup needs to be concluded by adding ",Object(a.b)("inlineCode",{parentName:"p"},"app"),"'s reducer and middleware(s):"),Object(a.b)("h4",{id:"srcsharedstatebuildstorejs-1"},Object(a.b)("inlineCode",{parentName:"h4"},"src/shared/state/buildStore.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { createStore, applyMiddleware, combineReducers } from 'redux';\nimport thunkMiddleware from 'redux-thunk';\nimport { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';\nimport { createPersistReducer, createStorePersistor } from './persist';\nimport { reducer as appReducer, middlewares as appMiddlewares } from './app';\n\nconst reducers = {\n    app: appReducer,\n};\n\nconst initialState = {};\n\nconst modules = {};\n\nconst buildStore = (reducerFn = combineReducers) => {\n    const middlewares = [\n        thunkMiddleware.withExtraArgument(modules),\n        appMiddlewares.logVersionChangeMiddleware,\n    ];\n    const enhancer = composeWithDevTools(\n        applyMiddleware(...middlewares),\n    );\n    const rootReducer = reducerFn(reducers);\n    const store = createStore(rootReducer, initialState, enhancer);\n\n    return store;\n};\n\nconst buildPersistStore = () => {\n    const store = buildStore(createPersistReducer);\n\n    return {\n        ...store,\n        persistor: createStorePersistor(store),\n    };\n};\n\nexport default buildPersistStore;\n")),Object(a.b)("h2",{id:"6-source-code"},"6. Source code"),Object(a.b)("p",null,"If'd like, feel free to checkout the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/moxystudio/react-native-with-moxy/tree/feat/add-store-provider"}),"branch")," from the boilerplate's repository to see the persistence-enabled Redux store working on both Android and iOS. You can also find tests for ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/moxystudio/react-native-with-moxy/blob/feat/add-store-provider/src/shared/modules/react-native-store/StoreProvider.test.js"}),Object(a.b)("inlineCode",{parentName:"a"},"StoreProvider")),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Full diff:")," ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/moxystudio/react-native-with-moxy/compare/master...feat/add-store-provider"}),"https://github.com/moxystudio/react-native-with-moxy/compare/master...feat/add-store-provider")))}l.isMDXComponent=!0},81:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=o.a.createContext({}),p=function(e){var t=o.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=p(r),b=n,m=l["".concat(s,".").concat(b)]||l[b]||u[b]||a;return r?o.a.createElement(m,i(i({ref:t},d),{},{components:r})):o.a.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var d=2;d<a;d++)s[d]=r[d];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},82:function(e,t,r){"use strict";var n=r(0),o=r(20);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},83:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return s}));var n=r(82),o=r(86);function a(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,s=a.forcePrependBaseUrl,i=void 0!==s&&s,c=a.absolute,d=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(i)return t+r;var p=!r.startsWith(t)?t+r.replace(/^\//,""):r;return d?e+p:p}(a,r,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},86:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))}}]);