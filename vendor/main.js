
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create Edit button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the click from toggling the completed state
            const newTaskText = prompt('Edit your task:', li.firstChild.textContent);
            if (newTaskText) {
                li.firstChild.textContent = newTaskText; // Update task text
            }
        });

        // Create Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the click from toggling the completed state
            taskList.removeChild(li); // Remove the list item from the task list
        });

        li.appendChild(editBtn); // Add the Edit button to the list item
        li.appendChild(deleteBtn); // Add the Delete button to the list item
        
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        taskList.appendChild(li); // Add the list item to the task list
        taskInput.value = ''; // Clear the input field
    }
});