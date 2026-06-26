Workbook tasks:

1) Select, create & remove DOM nodes fluently

    index.html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>DOM Practice</title>
        </head>
        <body>

        <h1>DOM Practice</h1>

        <button id="addBtn">Add Item</button>

        <ul id="list"></ul>

        <script src="script.js"></script>

        </body>
        </html>

    script.js
        const addBtn = document.getElementById("addBtn");
        const list = document.getElementById("list");

        addBtn.addEventListener("click", () => {

            const li = document.createElement("li");

            li.textContent = "New Task";

            list.appendChild(li);

            li.addEventListener("click", () => {
                li.remove();
            });

        });

2) Implement event delegation on a list

    index.html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Event Delegation</title>
        </head>
        <body>

        <ul id="list">
            <li>Apple</li>
            <li>Banana</li>
            <li>Mango</li>
        </ul>

        <script src="script.js"></script>

        </body>
        </html>

    script.js
        const list = document.getElementById("list");

        list.addEventListener("click", (event) => {

            if (event.target.tagName === "LI") {

                alert(event.target.textContent);

            }

        });

3) Load the unpacked extension in chrome://extensions

    1. Opened chrome://extensions
    2. Turned on Developer mode
    3. Clicked Load unpacked
    4. Selected the project-2 folder
    5. Reloaded after every code change

4) Persist a value via chrome.storage

    const button = document.getElementById("btn");
    const heading = document.getElementById("title");

    // Load saved value
    chrome.storage.local.get(["message"], (result) => {
        if (result.message) {
            heading.textContent = result.message;
        }
    });

    // Save value
    button.addEventListener("click", () => {

        heading.textContent = "Button Clicked!";

        chrome.storage.local.set({
            message: "Button Clicked!"
        });

    });