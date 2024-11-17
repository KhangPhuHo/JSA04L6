let tasks = [{ id:1, name: 'Dohomework', completed: false},{ id:2, name: 'Playbasketball', completed: false},{ id:3, name: 'Dodenise', completed: false}];
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task.name;
        if (task.completed) {
            taskItem.classList.add('completed');
        }

        const toggleButton = document.createElement('button');
        toggleButton.textContent = task.completed ? 'Uncomplete' : 'Complete';
        toggleButton.onclick = () => toggleTaskCompletion(index);

        taskItem.appendChild(toggleButton);
        taskList.appendChild(taskItem);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = () => deleteTask(index);
        taskItem.appendChild(deleteButton)
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const newTaskTitle = taskInput.value;
    if (newTaskTitle) {
        tasks.push({ name: newTaskTitle, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
renderTasks();
