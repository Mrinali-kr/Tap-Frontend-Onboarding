import { saveTasks, loadTasks } from "./storage.js";
import { renderTasks } from "./ui.js";

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

loadTasks((savedTasks) => {
    tasks = savedTasks;
    renderTasks(tasks, taskList);
});

addBtn.addEventListener("click", () => {

    const text = taskInput.value.trim();

    if (!text) return;

    const newTask = {
        id: Date.now(),
        text,
        completed: false
    };

    tasks.push(newTask);

    saveTasks(tasks);

    renderTasks(tasks, taskList);

    taskInput.value = "";
});


taskList.addEventListener("click", (event) => {

    const id = Number(event.target.dataset.id);

    // Delete Task
    if (event.target.classList.contains("delete-btn")) {

        tasks = tasks.filter(task => task.id !== id);

    }

    else if (event.target.classList.contains("task-text")) {

        const task = tasks.find(task => task.id === id);

        if (task) {
            task.completed = !task.completed;
        }

    }

    saveTasks(tasks);

    renderTasks(tasks, taskList);

});