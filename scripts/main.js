const taskInput = document.querySelector('#new-task-input');
const addTaskButton = document.querySelector('#add-task-button');
const taskList = document.querySelector('#taskList'); 

addTaskButton.addEventListener('click', function() {
  const newTaskText = taskInput.value.trim(); 
  if (newTaskText !== "") {
    const newTask = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = newTaskText;
    taskSpan.addEventListener('click', function() {
        const editedTaskText = prompt('Edit your task:', taskSpan.textContent);
        if (editedTaskText !== null) {
            taskSpan.textContent = editedTaskText.trim();
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Done';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(newTask);
    });

    newTask.appendChild(taskSpan);
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
    taskInput.value = ""; 
  }
});
