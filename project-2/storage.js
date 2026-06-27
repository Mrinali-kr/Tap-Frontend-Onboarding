
export function saveTasks(tasks) {
    chrome.storage.local.set({ tasks });
}

export function loadTasks(callback) {
    chrome.storage.local.get(["tasks"], (result) => {
        callback(result.tasks || []);
    });
}