<div align="center">
<img src="https://raw.githubusercontent.com/dothq/browser-ff/master/browser/branding/dot/default64.png" height="80" length="80">

# Dot Browser
Dot Browser is a privacy-conscious web browser with smarts built-in for protection against trackers and advertisments online.

[![Discord](https://discordapp.com/api/guilds/525056817399726102/widget.png?style=shield)](https://invite.gg/dot)
![GitHub All Releases](https://img.shields.io/github/downloads/dothq/browser/total?color=black) ![GitHub stars](https://img.shields.io/github/stars/dothq/browser?style=social) ![GitHub watchers](https://img.shields.io/github/watchers/dothq/browser?style=social) <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<img src="https://dothq.co/static/landing-showcase-0a396cdd550cc2515aa0925f4aa01f31.png" />

</div>

## 🚀 Features

* **Built-in adblocker** - Dot Browser automatically blocks advertisements and trackers out of the box so you can get back to what you do best, browsing!
* **Clean and familiar UI** - You won't need to re-invent the wheel to understand the layout.
* **We don't track you** - We've based Dot Browser on the Firefox source code, and we've stripped out all the Mozilla tracking.
* **Sync all your important data to your Dot ID** - You can backup and sync all your browsing history, bookmarks and even passwords.
* **Modify every aspect of the browser** - With the `config` page, you can tweak and fine-tune anything in the browser. 
* **Modern New Tab Page** - Our New Tab page features a search box and the latest news in your area. Anything is customisable.
* **All our code is open-source** - We love transparency, which is why all our code is open-source and publically-available on GitHub.

## ❗ Issues / Support
Create issues [here](https://github.com/dothq/browser/issues/new). Get support from our discord server, by clicking the banner below.

<a href="https://invite.gg/dot">
  <img src="https://discordapp.com/api/guilds/525056817399726102/widget.png?style=banner2" />
</a>

## 📚 Versions

Product | Build status | Latest stable | Latest beta
---|---|---|--
[Dot Browser for Desktop](https://github.com/dothq/browser-ff) | [![Build Status](https://ci.dothq.co/api/badges/dothq/browser-ff/status.svg)](https://ci.dothq.co/dothq/browser-ff) | ![Latest stable](https://img.shields.io/github/v/release/dothq/browser-ff?color=white&label=latest%20version) | ![Latest beta](https://img.shields.io/github/v/release/dothq/browser-ff?color=white&include_prereleases&label=latest%20beta%20version)
[Dot Browser for iOS](https://github.com/dothq/browser-ios) | [![Build Status](https://ci.dothq.co/api/badges/dothq/browser-ios/status.svg)](https://ci.dothq.co/dothq/browser-ios) | ![Latest stable](https://img.shields.io/github/v/release/dothq/browser-ios?color=white&label=latest%20version) | ![Latest beta](https://img.shields.io/github/v/release/dothq/browser-ios?color=white&include_prereleases&label=latest%20beta%20version)
[Dot Browser for Android](https://github.com/dothq/browser-android) | [![Build Status](https://ci.dothq.co/api/badges/dothq/browser-android/status.svg)](https://ci.dothq.co/dothq/browser-android) | ![Latest stable](https://img.shields.io/github/v/release/dothq/browser-android?color=white&label=latest%20version) | ![Latest beta](https://img.shields.io/github/v/release/dothq/browser-android?color=white&include_prereleases&label=latest%20beta%20version)


## 💻 Build Dot Browser
> The following steps are designed for unix-based operating systems, if you want to build Dot Browser on Windows, please refer to [this doc](https://dothq.github.io/browser/build-for-windows).

**1.** Download our build tool from [here](https://raw.githubusercontent.com/dothq/browser/main/bootstrap.py)

**2.** Grab our source code by typing `python3 bootstrap.py`, this may take a few hours.

**3.** You can now pick which build type you want to do when `mach` asks you to choose a build type.
  * You'll need to pick the appropriate build type as different parts of the project require different methods of being built.
  
    * **Artifact builds** - When building with the Artifact type instead of compiling the C++ code on your system, `mach` will fetch pre-built binaries from Mozilla and then   will link the frontend (html, js, css) with the binary. Artifact builds take under a minute to build on a mid-range system.
    
    * **Full builds** - Full builds are used when you want to modify the C++ code or want to generate a custom binary for distribution.
    
**4.** You can then start the build once `mach` says your system is ready, the command to build the project is `./mach build`. This may take a few seconds up to a few hours.

**5.** If you've made it this far, you've successfully built Dot Browser! Now, you'll want to run the binary you built, you can do this by running `./mach run`.

## ❤️ Acknowledgements
- Dot Browser wouldn't be possible without the amazing [Firefox open-source project](https://hg.mozilla.org/mozilla-central/), developed by [Mozilla](https://mozilla.org).

## 🤝 Contributors
- [EnderDev](https://github.com/EnderDev) - ***Main Developer***
- [AwesomeTech10](https://github.com/AwesomeTech10) - ***Main Developer***
- [KaiLikesLinux](https://github.com/KaiLikesLinux) - ***Documentation***

## 💸 Donations
We accept one-time donations on Ko-Fi to keep our servers running, (you'll have to pay each month if you want a monthly payment)

<a href="https://ko-fi.com/dothq">
  <img alt="Ko-Fi" width="180" src="https://i.imgur.com/Di0tfki.png" />
</a>

## 📜 License
**Dot Browser** is licensed under the [MPL-2.0](https://www.mozilla.org/en-US/MPL/2.0) license.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/HVENetworks"><img src="https://avatars2.githubusercontent.com/u/36706682?v=4" width="100px;" alt=""/><br /><sub><b>HVENetworks</b></sub></a><br /><a href="#security-HVENetworks" title="Security">🛡️</a></td>
    <td align="center"><a href="http://awesometech10.js.org"><img src="https://avatars1.githubusercontent.com/u/22264706?v=4" width="100px;" alt=""/><br /><sub><b>Trevor</b></sub></a><br /><a href="https://github.com/dothq/browser/commits?author=AwesomeTech10" title="Code">💻</a></td>

  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
