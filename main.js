// console.log("Hello World");
// console.log(document.getElementById("main"));

// Set the inner HTML of the element with ID 'main' to "TO-DO LIST"
document.getElementById("main").innerHTML = "TO-DO LIST";

// Define the function to add a task to the to-do list
function addTask() {
    // Get the task input element by its ID
    const taskInput = document.getElementById('taskInput');
    // Get the value of the task input
    const taskText = taskInput.value;

    // If the task input is empty, alert the user and exit the function
    if (taskText === '') {
        alert('Please enter a task..');
        return;
    }

    // Get the task list element by its ID
    const taskList = document.getElementById('taskList');
    // Create a new list item element
    const listItem = document.createElement('li');

    // Create a new checkbox element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    // Define the onclick event for the checkbox
    checkbox.onclick = function() {
        // If the checkbox is checked, strike through the task text
        if (this.checked) {
            listItem.style.textDecoration = 'line-through';
        } else {
            // If the checkbox is unchecked, remove the strike through
            listItem.style.textDecoration = 'none';
        }
    };

    // Create an edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    // Define the onclick event for the edit button
    editButton.onclick = function() {
        // Prompt the user to enter the new task text
        const newTaskText = prompt('Edit your task:', taskText);
        // If the user enters a new task text, update the list item text
        if (newTaskText !== null && newTaskText.trim() !== '') {
            listItem.textContent = newTaskText;
            listItem.appendChild(checkbox); // Re-append the checkbox
            listItem.appendChild(editButton); // Re-append the edit button
            listItem.appendChild(deleteButton); // Re-append the delete button
        }
    };

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    // Define the onclick event for the delete button
    deleteButton.onclick = function() {
        // Remove the list item from the task list
        taskList.removeChild(listItem);
    };

    // Set the text content of the list item to the task text
    listItem.textContent = taskText;

    // Append the checkbox to the list item
    listItem.appendChild(checkbox);
    // Append the edit button to the list item
    listItem.appendChild(editButton);
    // Append the delete button to the list item
    listItem.appendChild(deleteButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the task input value
    taskInput.value = '';
}

// Add an event listener to the task input element to listen for keypress events
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    // If the Enter key is pressed, call the addTask function
    if (event.key === 'Enter') {
        addTask();
    }
});