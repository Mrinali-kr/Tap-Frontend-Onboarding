Workbook tasks:

1) Explain let vs const vs var & hoisting

    var
        var name = "Mrinali";

        Function scoped
        Can be redeclared
        Hoisted


    let
        let age = 22;
        Block scoped
        Can be reassigned
        Cannot be redeclared in same scope

    const
        const pi = 3.14;
        Block scoped
        Cannot be reassigned
        Preferred by default

2) Predict 10 == vs === / coercion results

    10 == "10" will be true

    10 === "10" will be false

   === (strict equality) checks both the value and the data type of the operands, while == (loose equality) checks only the value after converting the operands to a common type.

3) Write a closure-based counter from scratch

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

4) Describe scope & the call stack in your words

    Scope
        Scope determines where a variable can be accessed in a program. Variables declared inside a block or function are only available within that block or function. Variables declared outside functions are in the global scope and can be accessed from anywhere in the program.
    
    call stack
        The call stack is the mechanism JavaScript uses to keep track of which function is currently running. When a function is called, it is added to the top of the stack. When the function finishes, it is removed from the stack. JavaScript executes functions in a Last In, First Out (LIFO) order.