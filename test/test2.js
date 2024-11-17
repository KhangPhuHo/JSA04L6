let tasks = [{id: 1, name: 'học bài'}, {id: 2, name: 'làm bài'}, {id: 3, name: 'chơi'}];

function addTask() {
    const add = document.getElementById('add');
    const newTaskTitle = add.value;
    if (newTaskTitle) {
        tasks.push({id: tasks.length + 1, name: newTaskTitle});
        add.value = '';
        updateTaskList();
    }
}

function deleteTask(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks.splice(i, 1);
        }
        break;
    }
    updateTaskList();
}

function editTask(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            const newTaskName = prompt("Enter new task name:", tasks[i].name);
            if (newTaskName !== null) {
                tasks[i].name = newTaskName;
            }
            break;
        }
    }
    updateTaskList();
}

function updateTaskList() {
    var taskList = document.getElementById("taskList");
    taskList.textContent = ""; // Xóa nội dung cũ của phần tử

    for (let i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        var taskItem = document.createElement("li");
        taskItem.textContent = task.name;

        // Thêm nút xóa cho mỗi task
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = () => deleteTask(task.id);

        // Thêm nút sửa cho mỗi task
        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add('edit-btn');
        editButton.onclick = () => editTask(task.id);

        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    }
}

// Khởi tạo danh sách nhiệm vụ ban đầu khi trang được tải
document.addEventListener("DOMContentLoaded", updateTaskList);
