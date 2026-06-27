
export function renderTasks(tasks, taskList) {


    taskList.innerHTML = "";

    tasks.forEach(({ id, text, completed }) => {

        const li = document.createElement("li");

        if (completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span class="task-text" data-id="${id}">
                ${text}
            </span>

            <button class="delete-btn" data-id="${id}">
                🗑
            </button>
        `;

        taskList.appendChild(li);

    });

}