Day 02 - Landscape · DevTools · storage · security · devices

The browser landscape & the developer's toolbox

The top five browsers and their market reality, the DevTools panels you'll live in, client-side storage, the security model, and how rendering differs across desktop, mobile, tablet, and TV OS.

1) Chrome DevTools — official docs

Chrome DevTools A set of tools built into the Chrome browser that helps us inspect and debug websites. It is divided into different panels, each panel covering a specific part of the website.

Panels are :
    Elements: Displays the HTML structure of the page and the CSS styles applied to the elements. We can look at them and edit them in real time.

    Console: Displays JavaScript errors, warnings and logs. And we can run javascript commands directly.

    Network : Displays all resources being downloaded such as HTML, CSS, Javascript, images and API requests. Can help you analyze load times.

    Performance: Records your browser activity to help us analyze page loading, rendering, layout, and paint performance.

    Sources: Lets us view and debug JavaScript files with breakpoints and step-by-step execution.

    Application: Display browser-stored data such as cookies, local storage, session storage and cache.

    Memory: Used to identify memory usage and memory leaks in web applications.

    Lighthouse: Generates reports on performance, accessibility, SEO, best practices.

2) localStorage · sessionStorage

localStorage, sessionStorage are two browser storages techniques in which we store the data in the user’s browser as key-value pairs.

    localStorage : This keeps data until the user or the application itself explicitly deletes it. The data still remains after closing and opening the browser.

    sessionStorage: It stores data only in the current browser tab or session.  When you close the tab, any data you store is lost.

Both types of storage can only store data in the form of strings . So the data stored is either parsed to string with JSON.stringify() or JSON.parse().

3) IndexedDB API

IndexedDB is a browser database, which allows us to store large amounts of structured data right in the user's browser.IndexedDB is used for storing and retrieving objects indexed by a key.

IndexedDB Interfaces:

    IDBFactory: Used to open or create a database.
    IDBOpenDBRequest:A request to open a database.
    IDBDatabase: A connection to a database.
    IDBTransaction: Used to perform database operations.
    IDBRequest: A database operation and its result.
    IDBObjectStore: Stores and manages records in the database.
    IDBIndex: Helps search and retrieve data faster.
    IDBCursor: Iterates through records one at a time.
    IDBCursorWithValue: Iterates through records and returns their values.
    IDBKeyRange: Defines a range of keys for querying data.
    IDBVersionChangeEvent: Triggered when the database version changes.

4) HTTP caching

A system in which browsers and servers save copies of web resources (like HTML, CSS, JavaScript and images) so they can be reused instead of downloaded again. It reduces network requests, speeds up load time and provides a faster user experience.

When we request a resource, the first thing the browser does is to check its cache. It uses a valid cached version if available (cache hit). If the resource is not available or is stale (cache miss), the browser fetches a new version from the server.

Types:  

    Private Cache: Cache that is stored by a particular client (most often the browser). It can only be accessed by that user and may contain personal data.

    Shared Cache: A cache between the client and server which may be shared by multiple users.

    Proxy Cache - A cache shared by an intermediate proxy server. It caches answers to avoid making repetitive requests to the original server.

    Managed Cache: Cache created and managed by developers on purpose (e.g., CDN, reverse proxy, service worker cache). This can help reduce server load and speed up content delivery.”

    Heuristic Caching: In the absence of caching directives such as Cache-Control, browsers use their own heuristic to decide whether a response is cacheable and for how long it should be cached.

    Fresh Cache: A cache response that is still valid and can be used directly without going to the server.

    Stale Cache A cache response that has expired and must be validated with the server before it can be reused.

    Validation/Revalidation: The browser checks with the server to see if a stale cached response is still good, using headers like ETag or Last-Modified.

4) Same-origin policy

The Same-Origin Policy is a browser security rule that prevents one website from accessing or reading data from another website unless they have the same origin.

An origin is made up of three parts:

Protocol (http/https)
Domain (example.com)
Port (80, 443, etc.)

Two URLs have the same origin only if all three are the same.

5) CORS · CSP

CORS (Cross-Origin Resource Sharing) 

    CORS is a security feature, which allows a website to request resources from a different origin, if the server allows it. The server sends CORS headers to indicate which websites are permitted to access its data. It cooperates with the Same-Origin Policy to permit safe cross-origin communication.

Content Security Policy (CSP) Headers

    Content Security Policy (CSP) is a security feature that helps prevent attacks like cross-site scripting (XSS) by allowing you to define which sources the browser should allow to load. We can define where scripts, styles, images and other files are allowed to be sourced from, and prevent unwanted or malicious code from being run.

6) Service Worker API

A Service Worker is a script that runs in the background, independent of the webpage, acting as a middle layer between the website and the network. It can intercept network requests, cache resources and provide offline support, background updates and push notifications .