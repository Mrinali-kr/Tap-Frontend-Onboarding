const button = document.getElementById("btn");
const heading = document.getElementById("title");

// Load the saved message when the popup opens
chrome.storage.local.get(["message"], (result) => {
    if (result.message) {
        heading.textContent = result.message;
    }
});

// Save a message when the button is clicked
button.addEventListener("click", () => {

    heading.textContent = "Button Clicked!";

    chrome.storage.local.set({
        message: "Button Clicked!"
    });

    console.log("Message saved!");
});