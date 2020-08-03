---
id: available-scripts
title: Available Scripts
sidebar_label: Available Scripts
---

Here you'll find scripts that we have defined in our `package.json`.

You can run any of these commands using `npm run {script}` from the project's folder.

## `npm run start:ios:dev`

Runs the iOS app in debug mode.

This script will launch the app on the first available simulator it is found. You can override this behavior by passing the argument `--simulator <simulator name>` where `simulator name` can be obtained from the output of `list:ios:simulators` script. If you wish to run the app on an actual device, make sure you have a device connected and execute the script passing the argument `--device`.

## `npm run start:ios:prod`

Runs the iOS app in release mode.

This script will launch the app on the first available simulator it is found. You can override this behavior by passing the argument `--simulator <simulator name>` where `simulator name` can be obtained from the output of `list:ios:simulators` script. If you wish to run the app on an actual device, make sure you have a device connected and execute the script passing the argument `--device`.

## `npm run start:android:dev`

Runs the Android app in debug mode.

This script will launch the app on the first available connected device it is found. You can override this behavior by passing the argument `--deviceId <device id>` where `device id` can be obtained from the output of `list:android:devices` script.

## `npm run start:android:prod`

Runs the Android app in release mode.

This script will launch the app on the first available connected device it is found. You can override this behavior by passing the argument `--deviceId <device id>` where `device id` can be obtained from the output of `list:android:devices` script.

## `npm run build:ios:js:prod`

This script will generate a source map for the iOS platform.

You can find the source map file, `ios.bundle.map`, in the project's root directory.

## `npm run build:android:js:prod`

This script will create an optimized, production-ready JavaScript bundle targeted to the Android platform. It will also generate a source map.

You can find the both the bundle, `index.android.bundle`, in the project's `/android/app/src/main/assets/` directory. The source map file, `android.bundle.map`, will be in the project's root directory.

## `npm run build:android:aab`

This script will create a production-ready [Android App Bundle (AAB)](https://developer.android.com/platform/technology/app-bundle) configured for the production environment. This is the binary that you should upload to the Google Play Console to release the app.

You can find the AAB file at `android/app/build/outputs/bundle/<release|debug>/app.aab`.

## `npm run build:android:apk`

This script will create a production-ready Android package (APK) configured for the production environment.

You can find the APK file at `android/app/build/outputs/bundle/<release|debug>/app.apk`.

## `npm run list:ios:simulators`

This script will list all the available simulators for iOS.

## `npm run list:android:simulators`

This script will list all the available [Android Virtual Devices (AVD)](https://developer.android.com/studio/run/managing-avds).

## `npm run list:android:devices`

This script will list all the connected Android devices, either virtual (simulator) or physical.

## `npm run sourcemap:ios:resolve`

This script will resolve the `ios.bundle.map` file according to the given line and column.

Usage: `npm run sourcemap:ios:resolve 42 70`

## `npm run sourcemap:android:resolve`

This script will resolve the `android.bundle.map` file according to the given line and column.

Usage: `npm run sourcemap:android:resolve 42 70`

## `npm run pods`

This script will install [pods](https://cocoapods.org/) in your iOS project.

## `npm run clean`

This script will run both `clean:ios` and `clean:android` scripts.

## `npm run clean:ios`

This script will remove all [pod](https://cocoapods.org/) and build files previously generated for iOS.

## `npm run clean:android`

This script will remove all build files previously generated for Android.

## `npm run docs`

This script prepares the documentation for reading.
This script will automatically open the documentation in your default browser.

Keep in mind, you must have your documentation's dependencies installed before running this script!
To to so, please run `npm install --prefix docusaurus` first.

## `npm run prerelease`

This script will run both `build:android:js` and `build:ios:js:prod` scripts, preparing for a release.

## `npm run release`

This script updates your CHANGELOG.md file, following [Semantic Versioning](https://semver.org/) and [Conventional Commits](conventionalcommits.org) conventions and generates a new Git tag (to read more about this process, you can read through the standard-version documentation).

## `npm run lint`

This script lints your JavaScript files.

## `npm run test`

This script will run your tests. Our configuration shows coverage reports for all tests. Please refer to the `jest.config.js` file for more configuration details.

### Note

We currently don't provide any script to generate the iOS App Store Package (.ipa) file, you should use Xcode for this purpose.
