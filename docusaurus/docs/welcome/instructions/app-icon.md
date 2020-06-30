---
id: app-icon
title: App icon
sidebar_label: App icon
---

Every app should have an impactul icon that stands out from all the others apps available on the user's device.

An app icon is a graphic that represents your app to users. It can:

-   Appear in the list of apps installed on a device and on the Home screen.
-   Represent shortcuts into your app (for example, a contact shortcut icon that opens detail information for a contact).
-   Help users find your app on Google Play and App Store.

> ℹ️ An app icon is mandatory to publish the app to TestFlight/App Store and Google Play

### How to generate the assets

First and foremost, we need to take into consideration that automatic generation won't work everytime.
Sometimes, small adjustments to an icon may be necessary and that should probably be done manually so it looks exactly how it is supposed to.
Nonetheless, automatic generation should always be the first step.

#### Android

The Android assets can be generated using [Android Asset Studio](https://github.com/romannurik/AndroidAssetStudio).

The tool from the Android Asset Studio that generates the assets is the [Launcher icon generator](<https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html#foreground.type=clipart&foreground.clipart=android&foreground.space.trim=1&foreground.space.pad=0.25&foreColor=rgba(96%2C%20125%2C%20139%2C%200)&backColor=rgb(68%2C%20138%2C%20255)&crop=0&backgroundShape=square&effects=none&name=ic_launcher>).
There are some options which you can tweak as much as you like, but the only ones we care about are the "Shape" and "Name".
You should create two versions of the app icon. The first one should have the "Square" shape and its "Name" should be "app_icon".
The second's version shape should be the "Circle" and its "Name" should be "app_icon_round".

> ℹ️ Although [Image Asset Studio](https://developer.android.com/studio/write/image-asset-studio) was also considered, it isn't as intuitive and straightforward as the [Android Asset Studio](https://github.com/romannurik/AndroidAssetStudio).

#### iOS

The iOS assets can be generated using [App Icon Generator](https://appicon.co/).
On the "iOS and macOS" section, only `iPhone` and `iPad` should be selected.
It is possible to either click and browse the image source or simply drag and drop it.
After selecting the image, click on the "Generate" button to download the assets.
Note that the filenames of the generated assets should be renamed according to the following pattern: `<resolution>@x<multiplier>`

### Output assets location

#### Android

After moving the assets to the following locations, there is nothing more to do.
Both "Square" and "Circle" shapes should work.

##### Square icons:

-   **mdpi:** `android/app/src/main/res/mipmap-mdpi/app_icon.png`
-   **hdpi:** `android/app/src/main/res/mipmap-hdpi/app_icon.png`
-   **xhdpi:** `android/app/src/main/res/mipmap-xhdpi/app_icon.png`
-   **xxhdpi:** `android/app/src/main/res/mipmap-xxhdpi/app_icon.png`
-   **xxxhdpi:** `android/app/src/main/res/mipmap-xxxhdpi/app_icon.png`

##### Round icons:

-   **mdpi:** `android/app/src/main/res/mipmap-mdpi/app_icon_round.png`
-   **hdpi:** `android/app/src/main/res/mipmap-hdpi/app_icon_round.png`
-   **xhdpi:** `android/app/src/main/res/mipmap-xhdpi/app_icon_round.png`
-   **xxhdpi:** `android/app/src/main/res/mipmap-xxhdpi/app_icon_round.png`
-   **xxxhdpi:** `android/app/src/main/res/mipmap-xxxhdpi/app_icon_round.png`

#### iOS

There are two options: either you manually move the icons and reflect the changes on the `ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/Contents.json` file or
drag and drop the assets using XCode, which will automatically update it.

Using XCode:

On the project tree, navigate to `reactNativeWithMoxy > Images.xcassets`.

![XCode AppIcon](/img/xcode-app-icon.png)

Now you should be able to drag and drop each asset to its correct location.

![XCode AppIcon Drag and Drop](/img/xcode-app-icon-drag-n-drop.png)

##### iPhone Notifications (iOS 7-13 20pt)

-   **40x40@2x**: `ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/40x40@2x.png`
-   **60x60@3x**: `ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/60x60@3x.png`

##### iPhone Settings (iOS 7-13 29pt)

-   **58x58@2x**: `ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/58x58@2x.png`
-   **87x87@3x**: `ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/87x87@3x.png`

##### iPhone Spotlight (iOS 7-13 40pt)

-   **80x80@2x**: `ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/80x80@2x.png`
-   **120x120@3x**: `ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/120x120@3x.png`

##### iPhone App (iOS 7-13 60pt)

-   **120x120@2x**: `ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/120x120@2x.png`
-   **180x180@3x**: `ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/180x180@3x.png`

##### iPad Notifications (iOS 7-13 20pt)

-   **20x20@1x**: `ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/20x20@1x.png`
-   **40x40@2x**: `ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/40x40@2x.png`

##### iPad Settings (iOS 7-13 29pt)

-   **29x29@1x**: `ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/29x29@1x.png`
-   **58x58@2x**: `ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/58x58@2x.png`

##### iPad Spotlight (iOS 7-13 40pt)

-   **40x40@1x**: `ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/40x40@1x.png`
-   **80x80@2x**: `ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/80x80@2x.png`

##### iPad App (iOS 7-13 76pt)

-   **76x76@1x**: `ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/76x76@1x.png`
-   **152x152@2x**: `ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/152x152@2x.png`

##### iPad Pro App (iOS 7-13 83.5pt)

-   **167x167@2x**: `ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/167x167@2x.png`

##### App Store (iOS 1024pt)

-   **1024x1024**: `ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/1024x1024.png`
