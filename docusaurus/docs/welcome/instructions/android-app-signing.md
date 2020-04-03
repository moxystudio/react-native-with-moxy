---
id: android-app-signing
title: Android app signing
sidebar_label: Android app signing
---

To distribute an Android app via Google Play store it is required to digitally sign it with a certificate. If you're not yet familiar with how app signing works, have a look at [Android Developers' official documentation](https://developer.android.com/studio/publish/app-signing). 

> ℹ️ Debug builds are automatically signed but your app should have its own, unique secure signing configuration for release builds. Otherwise, you won't be able to publish your app to Google Play. 

The first step is to [generate an upload key and a keystore](https://developer.android.com/studio/publish/app-signing#sign-apk) and follow the instructions and recommendations therein. The second step is to configure the boilerplate to use them.

> ❗️ Keep your keystore file private and in safe place! Never check it in into source control. By default, files ending in `.jks` and `.keystore` are already added to `.gitignore`.

> 💡 You can securely save your keystore file, keystore password and upload key password in a password manager such as 1Password.

The boilerplate offers three configuration options to sign release builds:

1. Environment variables
2. Properties file
3. Properties file and macOS keychain

Regardless of the option you chose, all the following variables _MUST_ be defined at build time:

| Identifier | Description |
|----------- | ----------- |
| ANDROID_SIGNING_KEYSTORE_FILE | The absolute path to the keystore file. |
| ANDROID_SIGNING_KEYSTORE_PASSWORD | The password you chose when generating the keystore. |
| ANDROID_SIGNING_KEY_PASSWORD | The password you chose when generating the upload key. |
| ANDROID_SIGNING_KEY_ALIAS | The name you chose to identify your key when generating it. | 

### Enviroment variables

This is the default option if nothing else is done. Define the variables to reflect your signing configuration accordingly.

> ℹ️ Configuration is only picked up from the environment if the secrets' properties file does not exist. In other words, the environment does not override the configuration provided by the file. 

### Properties file

The boilerplate ships with `sample.secrets.properties` file which you can find in the `android/` directory. Rename the file to `secrets.properties` and edit each property value to reflect your signing configuration accordingly.

> ❗️ Never check your `secrets.properties` file into source control! By default, this file is already added to `.gitignore`.

### Properties file and macOS keychain (macOS users only)

For increased security, instead of storing your keystore and upload key passwords in plaintext you can opt-in to store them in macOS' Keychain Access app.

> ℹ️ You still need to create a `secrets.properties` file for this configuration option. If you haven't done it yet, confer section [Properties file](#properties-file). 

1. Edit the file `android/gradle.properties` and replace the values of the variables below:

```
macos.keychain.service=<your-project-name>
macos.keychain.account.key=android-upload-key-password
macos.keychain.account.keystore=android-upload-keystore-password
```

If you'd like, you can use the values already specified for `macos.keychain.account.key` and `macos.keychain.account.keystore` properties. Replace `<your-app-name>` with the actual name of your app.

2. Open the Keychain Access app.
3. Select the Passwords category.
4. Press the plus sign to create a new Password entry.
5. Fill in "Keychain Item Name" field with the value you defined for `macos.keychain.service`.
6. Fill in "Account Name" field with value you defined for `macos.keychain.account.keystore`.
7. Fill in "Password" field with the password you chose when generating the keystore.
8. Click "Add" button to save the Password.
9. Repeat steps 4-8 but this time to create a Password entry for the upload key password.
10. Remove `ANDROID_SIGNING_KEYSTORE_PASSWORD` and `ANDROID_SIGNING_KEY_PASSWORD` properties from the `secrets.properties` file.
