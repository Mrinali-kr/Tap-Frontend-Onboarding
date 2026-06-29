Workbook tasks:

1) Convert a promise chain to async/await

Before (Promise chain)

    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });

After (async/await)

    async function getUser() {
    try {
        const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
        );

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
    }

    getUser();