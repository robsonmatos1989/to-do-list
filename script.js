/*
document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const taskTimer = document.getElementById( 'taskTimer');
  const addTaskButton = document.getElementById('addTaskButton');

  addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    const timerValue = parseInt(taskTimer.value);

    if (taskText !== '') {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskText;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = ' Excluir';


      taskItem.appendChild(taskInput);
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);

      deleteButton.addEventListener('click', function() {
        taskItem.remove();
      });

      taskInput.value = '';
      taskTimer.value = '';

      // Define um temporizador para exibir o alerta
      setTimeout(function() {

        showAlert(taskText);
      }, timerValue * 60 * 1000); 
    }
  });

  // Função para exibir o alerta
  function showAlert(taskText) {
    alert('Lembrete: ' + taskText);
  }

});
*/

document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const taskTimer = document.getElementById('taskTimer');
  const addTaskButton = document.getElementById('addTaskButton');

  addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    const timerValue = parseInt(taskTimer.value);

    if (taskText !== '') {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskText;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Excluir';

      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);

      deleteButton.addEventListener('click', function() {
        taskItem.remove();
        saveTasksToLocalStorage();
      });

      taskInput.value = '';
      taskTimer.value = '';

      saveTasksToLocalStorage();

      setTimeout(function() {
        showAlert(taskText);
      }, timerValue * 60 * 1000);
    }
  });

  function showAlert(taskText) {
    alert('Lembrete: ' + taskText);
  }

  function saveTasksToLocalStorage() {
    const tasks = Array.from(taskList.getElementsByTagName('li')).map(taskItem => taskItem.textContent);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      tasks.forEach(taskText => {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';

        deleteButton.addEventListener('click', function() {
          taskItem.remove();
          saveTasksToLocalStorage();
        });

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
      });
    }
  }

  // Chamar a função loadTasksFromLocalStorage após a definição dos elementos
  loadTasksFromLocalStorage();
});

