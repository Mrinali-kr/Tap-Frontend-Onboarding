Day 01 - Rendering pipeline & engines

How a browser turns code into pixels

The critical rendering path end to end — networking, parsing, DOM + CSSOM, render tree, layout (reflow), paint, compositing — plus what makes the five major engines tick.

1) Populating the page: how browsers work:

When we visit a website, our browser first sends a request to the server for the files that make up the website. The server sends back HTML , CSS and JavaScript . The browser then interprets the HTML to understand the content and structure of the page and then uses the CSS to understand how everything should look. It takes this information and works out where each element should go on the screen, and draws the page for us to see.So all this processing it then runs the Javascript code which makes the webpage interactive for the users.

2) Critical rendering path

Critical Rendering Path is the process we follow to turn HTML, CSS, and JavaScript into the webpage we see on the screen.We build the DOM(how browser sees html) from HTML, the CSSOM(how browser sees CSS) from CSS, combine them into a Render Tree (all the visible elements and their styles), and then Paint the page on the screen.The faster we complete these steps, the faster the page loads for the user.

(DOM->CSSOM->Render tree->Layout->Paint)

3) How browsers load websites

Our browser sends requests to get various files from the server, downloads HTML, CSS, JavaScript files, and other resources, and processes everything until the Render Tree is built, layout is made, and the final painting of the web page is done.

4) Understand the critical path

Critical path - Everything we need to do before being able to see something on screen.

In order to load a website, certain files like HTML and CSS are required immediately while others are not so important. These critical resources get priority since they determine what will appear on screen. It will take more time for us to see the page if any of these critical resources take too long to process. By reducing the size and number of critical resources, we can improve page load performance and make websites feel faster.

Critical path - important resources a page needs
CRP - Steps to see content on page.

5) Critical Rendering Path series

How does critical Rendering Path works, DOM and CSSOM construction, Render Tree creation,What is Layout, What is Paint, and how render-blocking resources impact how a page renders.

## Browser Engines

Blink + V8
Chrome, Edge, Opera, Samsung Internet

WebKit + JavaScriptCore
Safari

Gecko + SpiderMonkey
Firefox