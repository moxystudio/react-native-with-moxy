---
id: environment-variables
title: Environment Variables
sidebar_label: Environment Variables
---

The boilerplate uses [`react-native-config`](https://github.com/luggit/react-native-config) to setup environment variables and expose them to javascript code. You can then access those variables and use them at any time when coding. It goes without saying that support for both iOS and Android platforms is available.

By default, `react-native-config` will look for a `.env` file in the root of the project. An example file is already provided in `.env.sample`, with two commented variables: `API_KEY` AND `API_URL`. Go check that out to get a feel of how variable declaration works. Then, just rename that same file to `.env` and setup as many variables as you want, following the examples provided. Remember to uncomment the lines, by removing the `#` at the beginning. You can then run your project, in either platform, and you should be able to access the variables you just set. Check the `Basic Usage` section of the [official documentation](https://github.com/luggit/react-native-config#basic-usage) to see how.

### Multiple environments

Sometimes, there will be a need to have multiple environment files. For this, you can make use of the `ENVFILE` environment variable, as explained in the `react-native-config` [docs](https://github.com/luggit/react-native-config#different-environments). If you don't feel like using `ENVFILE`, that section of the docs also contain some more specific setups for each platform, so feel free to check them out.