// Initial tasks for each category
const tasks = {
    backlog: ['Task 1', 'Task 2', 'Task 3'],
    todo: ['Task 4', 'Task 5', 'Task 6'],
    ongoing: ['Task 7', 'Task 8'],
    done: ['Task 9', 'Task 10']
};

// The ordered array of statuses to determine left/right navigation
const statuses = ['backlog', 'todo', 'ongoing', 'done'];

// Function to render tasks
function renderTasks() {
    for (const status in tasks) {
        const taskList = document.getElementById(`${status}-tasks`);
        taskList.innerHTML = ''; // Clear existing tasks

        tasks[status].forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.textContent = task;
            taskItem.setAttribute('data-index', index);

            const statusIndex = statuses.indexOf(status);

            // Left move button (if not the first status)
            if (statusIndex > 0) {
                const leftButton = document.createElement('button');
                leftButton.style.marginLeft = '10px';

                const leftIcon = document.createElement('i');
                leftIcon.className = 'fas fa-arrow-left'; // Left arrow icon

                leftButton.appendChild(leftIcon);
                leftButton.addEventListener('click', () => moveTask(status, statuses[statusIndex - 1], index));

                taskItem.appendChild(leftButton); // Append the left button to the task item
            }

            // Right move button (if not the last status)
            if (statusIndex < statuses.length - 1) {
                const rightButton = document.createElement('button');
                rightButton.style.marginLeft = '10px';

                const rightIcon = document.createElement('i');
                rightIcon.className = 'fas fa-arrow-right'; // Right arrow icon

                rightButton.appendChild(rightIcon);
                rightButton.addEventListener('click', () => moveTask(status, statuses[statusIndex + 1], index));

                taskItem.appendChild(rightButton); // Append the right button to the task item
            }

            taskList.appendChild(taskItem); // Append the task item to the list
        });
    }
}

// Function to move tasks between status categories
function moveTask(from, to, index) {
    const task = tasks[from].splice(index, 1)[0];
    tasks[to].push(task);
    renderTasks(); // Re-render the tasks after moving
}

// Initial render of tasks
renderTasks();



// try 
