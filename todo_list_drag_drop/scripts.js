
const tasks = {
    backlog: ['Task 1', 'Task 2', 'Task 3'],
    todo: ['Task 4', 'Task 5', 'Task 6'],
    ongoing: ['Task 7', 'Task 8'],
    done: ['Task 9', 'Task 10']
};

// Function to render tasks
function renderTasks() {
    for (const status in tasks) {
        const taskList = document.getElementById(`${status}-tasks`);
        taskList.innerHTML = '';
        tasks[status].forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.textContent = task;
            taskItem.setAttribute('draggable', 'true');
            taskItem.setAttribute('data-index', index);
            taskItem.setAttribute('data-status', status);
            taskItem.addEventListener('dragstart', dragStart);
            taskList.appendChild(taskItem);
        });
    }
}

// Drag and Drop Functions
function allowDrop(event) {
    event.preventDefault();
}


function dragStart(event) {
    event.dataTransfer.setData('text', event.target.getAttribute('data-index'));
    event.dataTransfer.setData('status', event.target.getAttribute('data-status'));
    event.target.classList.add('dragging');
}

function drop(event) {
    event.preventDefault();
    const target = event.target.closest('.todo-card');
    const fromStatus = event.dataTransfer.getData('status');
    const toStatus = target.id;
    const taskIndex = event.dataTransfer.getData('text');
    
    if (fromStatus !== toStatus) {
        const task = tasks[fromStatus].splice(taskIndex, 1)[0];
        tasks[toStatus].push(task);
        renderTasks();
    }
}

// Initial render of tasks
renderTasks();
