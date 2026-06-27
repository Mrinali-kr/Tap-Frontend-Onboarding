Workbook tasks:

1) Rewrite a loop three ways with map/filter/reduce

const tasks = [
  { text: "Learn JS", completed: true },
  { text: "Workout", completed: false },
  { text: "Push to GitHub", completed: true }
];

filter() - Returns only the elements that match a condition.
const completedTasks = tasks.filter(task => task.completed);

map() - Transform every element into something else.
const taskNames = tasks.map(task => task.text);

Output:
["Learn JS", "Workout", "Push to GitHub"]

reduce() - Reduce an array to a single value (sum, object, count, etc.)
const completedCount = tasks.reduce((count, task) => {
  return task.completed ? count + 1 : count;
}, 0);

Output:
2

2) Explain how `this` is determined in 4 cases

1. Global context
    console.log(this);

    In a browser (non-module script), this refers to the global window object.In ES modules, this at the top level is undefined.

2. Object method
    const user = {
    name: "Mrinali",

    greet() {
        console.log(this.name);
    }
    };

    user.greet();

    Output: 
        Mrinali

    this refers to the object before the dot (user).

3. Regular function
    function greet() {
    console.log(this);
    }

    greet();

    In non-strict mode (browser script): this is window.In strict mode or ES modules: this is undefined.


4. Arrow function
    const user = {
    name: "Mrinali",

    greet: () => {
        console.log(this);
    }
    };

    user.greet();

    Arrow functions don't have their own this. They inherit it from the surrounding scope.
