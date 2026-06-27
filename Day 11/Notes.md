Day 11 - Modern JS & finishing the extension

ES6+, array methods & shipping Project 2

Destructuring, spread/rest, template literals, arrow functions, modules, the essential array methods (map/filter/reduce/find), this, and prototypes. Finish and load the extension.

1) JavaScript reference (array methods, modules)

JavaScript provides built in methods to work with arrays more efficiently, such as transforming, filtering, searching, and combining data without writing manual loops. We also learn how modules help organize code by splitting it into separate files that can export and import functions, variables, or classes, making projects easier to manage, reuse, and maintain.

2) MV3 extension tutorial

We build a complete Chrome extension using Manifest V3 by creating the required files such as manifest.json, popup HTML, CSS, JavaScript, and a service worker. We learn how the manifest defines the extension, how permissions control access to browser features and websites, how the popup provides the user interface, and how the service worker handles background tasks like fetching data. Finally, we load, test, debug, and update the extension using Chrome's Developer Mode.

3)  Build · Project 2 ship
Refactor the extension's logic with array methods and modules. Finish the feature, test it across reloads, and push the repo. Record the load steps in the sheet.

    1. Chrome reads manifest.json.
    2. Chrome validates the manifest and registers the extension.
    3. Chrome grants the requested permissions (e.g., storage).
    4. Chrome registers the service worker.
    5. The extension icon is added to the browser toolbar.
    6. When the user clicks the extension icon, Chrome loads popup.html.
    7. The popup loads its linked resources (styles.css and popup.js).
    8. popup.js executes, selects DOM elements, attaches event listeners, and retrieves any saved data from chrome.storage.local.
    9. The popup is displayed and the user can interact with it.
    10. Any changes made by the user are saved to chrome.storage.local.
    11. When the popup is closed, it is destroyed. The saved data remains, and the service worker stays registered to wake up when needed.