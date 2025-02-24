document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    const clearAllButton = document.getElementById("clearAll");
    const searchInput = document.getElementById("searchInput");

    // Add Task Functionality
    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    function addTask(text) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${text}</span>
            <button onclick="removeTask(this)"><i class="fas fa-times"></i></button>
        `;
        taskList.appendChild(li);
    }

    // Remove Task
    window.removeTask = function(button) {
        button.parentElement.remove();
    };

    // Clear All Tasks
    clearAllButton.addEventListener("click", () => {
        taskList.innerHTML = "";
    });

    // Live Search
    searchInput.addEventListener("input", () => {
        const filter = searchInput.value.toLowerCase();
        const tasks = taskList.getElementsByTagName("li");
        Array.from(tasks).forEach(task => {
            const text = task.textContent.toLowerCase();
            task.style.display = text.includes(filter) ? "flex" : "none";
        });
    });
});
