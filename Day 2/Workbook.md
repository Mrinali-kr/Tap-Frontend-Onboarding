Workbook tasks:

1) Write a DevTools teardown of a live site (Network, Performance, Application, Lighthouse)

Site choosen : Github - my profile 

Network : 

    Loading order - Document, styleshet, script, png
    So HTML,CSS,JS,Images or media then Fetch

Performance:

    Main thread time was taken by scripting and rendering.

Application:
    Storage:
    28.3 kB used out of 599,467 MB storage quota
    
Lighthouse:
        69 - Performance
        100 - Accessibility
        100 - Best Practices
        100 - SEO

2) Explain same-origin policy, CORS, and CSP in one paragraph each

Same-Origin Policy (SOP)

    Same-Origin Policy is a browser security rule that prevents one website from accessing data or resources from another website unless both websites have the same origin. An origin is defined by the combo of protocol, domain, and port. 

CORS (Cross-Origin Resource Sharing)

    CORS is a mechanism that allows servers to control which other origins can access their resources. When a website makes a request to a different origin, the server can use CORS headers to tell the browser whether that request is allowed. 

CSP (Content Security Policy)

    CSP is a security feature that helps protect websites from attacks like Cross-Site Scripting (XSS). It allows developers to define rules about which sources the browser can load resources from, such as scripts, styles, images, and other files. 

3) Compare localStorage vs sessionStorage vs IndexedDB vs cookies

localStorage - We use it when we want data to stay in the browser even after closing it, like theme settings.

sessionStorage - We use it when data should exist only while a browser tab is open, like temporary form information.

IndexedDB - We use it when we need a proper browser database for large and complex data, like offline applications.

Cookies - We use them when the browser needs to send small pieces of data back to the server, mainly for authentication and sessions.

4) List 5 concrete desktop-vs-mobile rendering differences

Feed Layout
    Desktop: Shows a wider layout with the main feed in the center and extra sections like profile information and recommendations on the sides.
    Mobile: Uses a single-column feed and hides extra sections to fit the smaller screen.

Navigation
    Desktop: Has a top navigation bar with options like Home, Jobs, Messages, and Notifications.
    Mobile: Uses a bottom navigation bar with fewer visible options for easier tapping.

Images and Media
    Desktop: Can load larger images because there is more screen space.
    Mobile: Uses smaller or optimized images to reduce loading time and data usage.

Interaction
    Desktop: Uses mouse actions like hovering over profiles and clicking menus.
    Mobile: Uses touch actions like tapping, swiping, and scrolling.
    
Content:
    Desktop: Shows more information at the same time, like side panels, recommendations, and job suggestions.
    Mobile: Shows only the important content first and moves extra features into menus.