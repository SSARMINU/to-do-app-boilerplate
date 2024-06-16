document.addEventListener('DOMContentLoaded', () => {
  const taskArray = [];

  const taskInputField = document.getElementById('task-input-field');
  const taskListContainer = document.getElementById('task-list-container');
  const addTaskButton = document.getElementById('add-task-button');

  addTaskButton.addEventListener('click', addTask);

  function addTask() {
    if (taskInputField.value.trim() !== '') {
      taskArray.push(taskInputField.value.trim());
      taskInputField.value = '';
      displayTasks();
    }
  }

  function displayTasks() {
    taskListContainer.innerHTML = '';

    taskArray.forEach((task, index) => {
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `${task}
        <a href="#" class="edit-task" data-index="${index}">Edit</a>
        <a href="#" class="delete-task" data-index="${index}">&times; |</a>`;
      taskListContainer.appendChild(taskItem);
    });

    document.querySelectorAll('.delete-task').forEach(button => {
      button.addEventListener('click', removeTask);
    });

    document.querySelectorAll('.edit-task').forEach(button => {
      button.addEventListener('click', modifyTask);
    });
  }

  function removeTask(event) {
    const index = event.target.getAttribute('data-index');
    taskArray.splice(index, 1);
    displayTasks();
  }

  function modifyTask(event) {
    const index = event.target.getAttribute('data-index');
    const newValue = prompt('Please insert your new value', taskArray[index]);
    if (newValue !== null && newValue.trim() !== '') {
      taskArray[index] = newValue.trim();
      displayTasks();
    }
  }
});
