---
id: splash-screen
title: Splash screen
sidebar_label: Splash screen
---

React Native with MOXY includes a splash screen which was generated from MOXY's logo by [`react-native-bootsplash`](https://github.com/zoontek/react-native-bootsplash). Nowadays, it's common for apps to have a splash screen with a plain background color and a logo both vertically and horizontally centered in the screen. As such, by default, we adhere to this principle. Take Twitter and Notion apps for example:

| Notion   | Twitter   |
|:--------:|:---------:|
| ![Twitter splash screen](/img/twitter-splash-screen.png) | ![Notion splash screen](/img/notion-splash-screen.png) |

`react-native-bootsplash` conveniently ships with a [CLI](https://github.com/zoontek/react-native-bootsplash#assets-generation) to generate the necessary assets to create a splash screen for both iOS and Android. The recommended size for the logo is 100dp which is equivalent to 100px in medium-density screens (~160dpi or _mdpi_, the base line density) on Android. In a 640dpi screen (_xxxhdpi_, the largest density), 100dp equals 400px. Therefore, you should use a logo 400x400px in size. You can use the same size for iOS because 100dp is _roughly_ equivalent to 100pt (actually more like ~102pt) on a base line density of 163dpi. However, you can go for a greater size if you wish.

> 💡 If you don't understand what's the relationship between px (pixels) and dp (density-independent pixels), we recommend you to have a look at the [official Android documentation](https://developer.android.com/training/multiscreen/screendensities).

To create a splash screen with your own logo, replacing the existing one, run the following command from the root of your project:

```sh
$ npx generate-bootsplash
```

The CLI will prompt you to answer a few [questions](/img/generate-splash-screen.png). Please follow the instructions and answer yes when you're prompted to replace all existing images. If all goes well, fire up the app and you should see your splash screen come up to life! Otherwise, if you have any doubt or run into trouble, confer `react-native-bootsplash`'s [`README`](https://github.com/zoontek/react-native-bootsplash/blob/2.1.0/README.md) or ask for [help](https://github.com/zoontek/react-native-bootsplash/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) if you get stuck.

> ℹ️ Feel free to remove the `assets` directory that is created after you're done. You won't need it.

### Output assets location

#### Android

- **mdpi:** `android/app/src/main/res/mipmap-mdpi/bootsplash_logo.png`
- **hdpi:** `android/app/src/main/res/mipmap-hdpi/bootsplash_logo.png`
- **xhdpi:** `android/app/src/main/res/mipmap-xhdpi/bootsplash_logo.png`
- **xxhdpi:** `android/app/src/main/res/mipmap-xxhdpi/bootsplash_logo.png`
- **xxxhdpi:** `android/app/src/main/res/mipmap-xxxhdpi/bootsplash_logo.png`

#### iOS

- **1x**: `ios/reactNativeWithMoxy/Images.xcassets/BootSplashLogo.imageset/bootsplash_logo.png`
- **2x**: `ios/reactNativeWithMoxy/Images.xcassets/BootSplashLogo.imageset/bootsplash_logo@2x.png`
- **3x**: `ios/reactNativeWithMoxy/Images.xcassets/BootSplashLogo.imageset/bootsplash_logo@3x.png`
- **4x**: `ios/reactNativeWithMoxy/Images.xcassets/BootSplashLogo.imageset/bootsplash_logo@4x.png`

### Custom splash screens

It shouldn't be difficult to create a customized splash screen for iOS by fiddling with `BootSplash.storyboard` through Xcode, which can be found at `ios/reactNativeWithMoxy` directory. However, you should know your way around iOS' Storyboards and Xcode Layout Editor.

In case of Android, it's a bit more complicated because you have to create a custom layout, either imperatively with Java or declaratively with XML. Whatever route you take, at the time of writing, `react-native-bootsplash` [does not offer support for custom layouts](https://github.com/zoontek/react-native-bootsplash/issues/112). Nonetheless, you should be able to add extra drawables to `layer-list` and position them to your liking by manipulating `bootsplash.xml`, which can can be found at `android/app/src/main/res/drawable` directory. Confer the [official Android documentation](https://developer.android.com/guide/topics/resources/drawable-resource#LayerList).

## `SplashScreen` component

This component, which you can find at `src/shared/modules/react-native-splash-screen`, wraps `react-native-bootsplash` and takes care of hiding the splash screen once the app is ready. It does, however, provide some configuration which you can control, in the form of the following props:

* `hide`: _true_ or _false_. If left untouched, the splash screen will be hidden automatically when the JavaScript is done loading. This prop is useful if you need to need to delay startup until one or more asynchronous operations are completed.
* `fadeOutDurationMs`: value in milliseconds. Determines the duration of the fade out transition.

> ❗️Your app's navigation should be a children of `SplashScreen` so it's not rendered until the splash screen is being displayed. See `src/app/App.js`.

