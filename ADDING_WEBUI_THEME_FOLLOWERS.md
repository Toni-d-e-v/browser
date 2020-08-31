## Add a theme follower to a Web UI page

1. Add the Web UI url to `BrowserGlue.jsm`.
    ```js
      LightweightTheme: {
        child: {
          moduleURI: "resource:///actors/LightweightThemeChild.jsm",
          events: {
            pageshow: { mozSystemGroup: true },
          },
        },
        includeChrome: true,
        allFrames: true,
        matches: [
          "about:home",
          "about:newtab",
          "about:welcome",
          "about:mywebuipage", // You would add your Web UI here for example
          "chrome://browser/content/syncedtabs/sidebar.xhtml",
          "chrome://browser/content/places/historySidebar.xhtml",
          "chrome://browser/content/places/bookmarksSidebar.xhtml",
        ],
      },
     ```
     
2. Include `chrome://browser/content/contentTheme.js` in your Web UI code.
     For `about:preferences` for example you would append the script to the head.
      ```html
      <script src="chrome://browser/content/utilityOverlay.js"/>
      <script src="chrome://global/content/preferencesBindings.js"/>
      <script src="chrome://browser/content/preferences/preferences.js"/>
      <script src="chrome://browser/content/preferences/extensionControlled.js"/>
      <script src="chrome://browser/content/preferences/findInPage.js"/>
      <script src="chrome://browser/content/contentTheme.js"/> // <----
      ```
