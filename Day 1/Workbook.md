Workbook tasks: 

1) Describe the critical rendering path in your own words - Done

The Critical Rendering Path is the process the browser undergoes to convert HTML, CSS and JavaScript into a webpage users can see and interact with. The browser then downloads the resources it needs , parses HTML into the DOM and CSS into the CSSOM , merges them into a Render Tree , works out the layout of elements , paints them on the screen and finally composites the layers to show the finished page . The quicker these steps are completed, the quicker the page loads for the user.

2) Explain the difference between reflow and repaint - Done

Reflow (aka layout) is when the browser has to recalculate the positions and sizes of elements in the page. This can happen when an element’s size changes, or new content is added. Repaint happens when the visual appearance of an element changes , for example its background or color , but it doesn ’t change the layout . Reflow is often more expensive and may also require repainting.

3) Note what render-blocking CSS/JS is and why it matters - Done

Render-blocking resources are files that prevent the browser from rendering content until they are downloaded and processed. CSS is render blocking because the browser needs to know what styles there are before it can render the page properly. 

JavaScript can be render blocking, because scripts can alter the DOM during the parsing of the page. Render-blocking resources that are slow and heavy can slow page rendering and degrade the user experience.

4) Reproduce the engine → browser map from memory - Done

Blink + V8:
Chrome
Edge
Opera
Samsung Internet

WebKit + JavaScriptCore:
Safari

Gecko + SpiderMonkey:
Firefox