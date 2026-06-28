Day 12 - Async JS & the npm package

Promises, async/await, fetch & publishing Project 3

The event loop, callbacks → promises → async/await, the Fetch API, and error handling. Then build, bundle, and publish a real npm package end to end.

1) Using promises & async/await

We use promises to handle asynchronous operations such as fetching data or reading files without blocking the rest of the program. A promise has three states: pending, fulfilled, and rejected. We can use .then() to handle successful results, .catch() to handle errors, and .finally() to run code after the promise finishes. Chaining promises helps us write asynchronous code in a cleaner and more organized way.

2) Creating & publishing a public package

We learn how to create an npm package by organizing the project, writing reusable code, and configuring the package.json file with important fields like name, version, main, module, types, and files. After testing the package locally, we publish it to the npm registry so other developers can install and use it in their own projects.

3) zero-config bundler

We use tsup to bundle JavaScript or TypeScript projects into optimized output files. It can generate CommonJS and ES Module builds, create TypeScript declaration files, minify code, watch for changes during development, and produce fast production builds with very little configuration. It simplifies the build process for libraries and npm packages.