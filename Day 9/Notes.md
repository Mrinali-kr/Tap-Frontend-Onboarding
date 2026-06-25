Day 09 - JavaScript foundations

JavaScript: the language core

1) JavaScript first steps (Core hub)

Variables and the data types, operators, control flow, functions, scope, and the call stack. Get the fundamentals airtight before the DOM.JavaScript allows us to add behavior and interactivity to web pages.How to work with variables, data types, operators, conditions, loops, functions, objects, arrays, and events to create dynamic applications. JavaScript can read and modify page content, respond to user actions, perform calculations, and communicate with web APIs, making it one of the core technologies of modern web development.

2) Solve small console exercises by hand: temperature converter, FizzBuzz, a function that returns a closure counter. Explain each result before you run it.

1. Temperature Converter:

    function cToF(celsius) {
    return (celsius * 9) / 5 + 32;
    }

    console.log(cToF(25));

    Explanation:

    The function converts Celsius to Fahrenheit using the formula:
    (°C × 9/5) + 32

    For 25°C:
        (25 × 9) / 5 + 32
        225 / 5 + 32
        45 + 32
        77

    Expected Output
    77

    Actual Output
    77

    2. FizzBuzz:

    for (let i = 1; i <= 15; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
    }

    Explanation:

    Rules:
    Multiple of 3 → Fizz
    Multiple of 5 → Buzz
    Multiple of both → FizzBuzz

    Expected sequence:
    1
    2
    Fizz
    4
    Buzz
    Fizz
    7
    8
    Fizz
    Buzz
    11
    Fizz
    13
    14
    FizzBuzz

    Actual Output
    1
    2
    Fizz
    4
    Buzz
    Fizz
    7
    8
    Fizz
    Buzz
    11
    Fizz
    13
    14
    FizzBuzz

    3. Closure Counter:

    function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
    }

    const counter = createCounter();

    console.log(counter());
    console.log(counter());
    console.log(counter());

    Explanation:

    When createCounter() runs:

    let count = 0;

    The returned inner function remembers this variable.

    First call: count becomes:1
    Second call:2
    Third call: 3

    Expected Output
    1
    2
    3

    Actual Output
    1
    2
    3