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

> ❗️ The raw app icon asset's resolution should be 1024x1024px or bigger, so it can be used to generate both Android and iOS icons through the recommended generators.

#### Android

The Android assets can be generated using [Image Asset Studio](https://developer.android.com/studio/write/image-asset-studio).

To start Image Asset Studio, follow these steps:

1. Open the project on Android Studio.
2. In the **Project** window, select the [Android view](https://developer.android.com/studio/projects#ProjectFiles).
3. Right-click the **res** folder and select **New > Image Asset**.

![Image Asset Studio](/img/image-asset-studio.png)

The app icon should have both a square and a round version.
There tool offers a few options which you can tweak as much as you like, but we will only cover the necessary ones.

> ℹ️  The following instructions won't cover how to generate [adaptive icons](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive), which are icons that can display a variety of shapes across different device models.
> However it isn't much different, actually. To generate those, you should use the **Launcher Icons (Adaptive and Legacy)** option for the **Icon Type**.

##### Square icons:

-   **Icon Type** should be the **Launcher Icons (Legacy only)** option.
-   **Name** should be renamed from `ic_launcher` to `app_icon`.
-   **Asset Type** should be **Image** and the raw app icon path should be given.
-   **Shape** should be **Square**.

![Image Asset Studio - Launcher Icons (Legacy only) with Square shape](/img/image-asset-studio-launcher-icons-legacy-only-square.png)

After that you should click on **Next** and finally on the **Finish** button.

##### Round icons:

-   **Icon Type** should be the **Launcher Icons (Legacy only)** option.
-   **Name** should be renamed from `ic_launcher` to `app_icon_round`.
-   **Asset Type** should be **Image** and the raw app icon path should be given.
-   **Shape** should be **Circle**.

![Image Asset Studio - Launcher Icons (Legacy only) with Circle shape](/img/image-asset-studio-launcher-icons-legacy-only-circle.png)

After that you should click on **Next** and finally on the **Finish** button.

> ℹ️ Although [Android Asset Studio](https://github.com/romannurik/AndroidAssetStudio) was also considered, we decided to adopt [Image Asset Studio](https://developer.android.com/studio/write/image-asset-studio) because it's the official tool from Google, it's built in into Android Studio and it not only generates the assets but it also places them in the correct folders.

#### iOS

The iOS assets can be generated using [App Icon Generator](https://appicon.co/).
On the "iOS and macOS" section, only `iPhone` and `iPad` should be selected.
It is possible to either click and browse the image source or simply drag and drop it.
After selecting the image, click on the "Generate" button to download the assets.
Note that the filenames of the generated assets should be renamed according to the following pattern: `<resolution>@x<multiplier>`

> ℹ️  Unfortunately there isn't an official tool for app icon generation on iOS.
Even though there are Design related tools that solves this problem, there aren't similar ones which are non-designers friendly and significantly better than the recommended tool.

### Output assets location

#### Android

> 💡 Note that if you used Image Asset Studio, you won't have to bother about this, because the tool automatically places the assets into the correct locations.

##### Square icons:

-   **mdpi (48x48@1x):** `android/app/src/main/res/mipmap-mdpi/app_icon.png`
-   **hdpi (72x72@1\.5x):** `android/app/src/main/res/mipmap-hdpi/app_icon.png`
-   **xhdpi (96x96@2x):** `android/app/src/main/res/mipmap-xhdpi/app_icon.png`
-   **xxhdpi (144x144@3x):** `android/app/src/main/res/mipmap-xxhdpi/app_icon.png`
-   **xxxhdpi (192x192@4x):** `android/app/src/main/res/mipmap-xxxhdpi/app_icon.png`

##### Round icons:

-   **mdpi (48x48@1x):** `android/app/src/main/res/mipmap-mdpi/app_icon_round.png`
-   **hdpi (72x72@1\.5x):** `android/app/src/main/res/mipmap-hdpi/app_icon_round.png`
-   **xhdpi (96x96@2x):** `android/app/src/main/res/mipmap-xhdpi/app_icon_round.png`
-   **xxhdpi (144x144@3x):** `android/app/src/main/res/mipmap-xxhdpi/app_icon_round.png`
-   **xxxhdpi (192x192@4x):** `android/app/src/main/res/mipmap-xxxhdpi/app_icon_round.png`

After moving the assets to the following locations, there is nothing more to do.
Both "Square" and "Circle" shapes should work.

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
