const toggleLightDark = document.getElementById('lightdark');
const clearBtn = document.getElementById('clear');
const showAll = document.getElementById('show-all');
const showActive = document.getElementById('show-active');
const showCompleted = document.getElementById('show-completed');
const taskinput = document.getElementById('new-task');
const taskDisplay = document.querySelector('#tasks');
const tasksRemaining = document.getElementById('remaining');
const deleteEl = document.querySelector('.delete-el');
const taskNav = document.getElementById('task-nav');

// Add a light-dark mode toggle
toggleLightDark.onclick = () => {
  document.body.classList.toggle('lightmode');
};

//Add tasks on enter
taskinput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    taskDisplay.insertAdjacentHTML(
      'afterbegin',
      `<div class="task" draggable="true" id="task">
      <button id="set-complete" class='set-complete'></button>
      <span class="task-text">${taskinput.value}</span>
      <button id="delete-el" class='delete-el'></button>
      </div>
    `
    );
    const task = document.querySelectorAll('.task');
    taskinput.value = '';
    tasksRemaining.textContent = document.querySelectorAll('.task').length;

    //Showing active tasks
    showActive.addEventListener('click', function () {
      task.forEach((t) => {
        if (t.classList.contains('active')) {
          t.classList.remove('hidden');
        } else {
          t.classList.add('hidden');
        }
      });
    });
    //Showing completed tasks
    showCompleted.addEventListener('click', function () {
      task.forEach((t) => {
        if (t.classList.contains('complete')) {
          t.classList.remove('hidden');
        } else {
          t.classList.add('hidden');
        }
      });
    });
    //show all removes all restrictions
    showAll.addEventListener('çlick', function () {
      task.forEach((t) => {
        t.classList.remove('hidden');
      });
    });
  }
});

//Set the state of a task to complete by clicking the complete button
taskDisplay.addEventListener('click', function (e) {
  if (e.target.classList.contains('set-complete')) {
    e.target.classList.toggle('complete');
    e.target.parentNode.classList.toggle('complete');
  }
});

//Set the state of the delete button by activating the tasks
taskDisplay.addEventListener('click', function (e) {
  if (e.target.classList.contains('task')) {
    e.target.classList.toggle('active');
    tasksRemaining.textContent = document.querySelectorAll('.task').length;
  }
});

//delete button remove a single input
taskDisplay.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-el')) {
    e.target.parentNode.remove();
    tasksRemaining.textContent--;
  }
});

//clear button clears all entries
clearBtn.addEventListener('click', function () {
  taskDisplay.textContent = '';
  tasksRemaining.textContent = 0;
});

//Drag and Drop (To be added)
