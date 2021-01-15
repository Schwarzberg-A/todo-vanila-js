'use strict';

let add = document.querySelector('.add');
let deleteButton = document.querySelector('.deleteButton');
let inputString = document.querySelector('.input');
let tasks = document.querySelector('.tasks');

add.addEventListener('click', addTask);
deleteButton.addEventListener('click', deleteTask);
tasks.addEventListener('click', targetTask);

function targetTask(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('crossOut');
  }
};

function addTask() {
  if (inputString.value) {
    let newTask = document.createElement('li');
    newTask.textContent = inputString.value;
    newTask.className = 'task';
    tasks.append(newTask);
    inputString.value = "";
  } else {
    alert('вы не ввели текст');
  }
};

function deleteTask() {
  for (let i = tasks.children.length - 1; i >= 0; i--) {
    if (tasks.children[i].classList.contains('crossOut')) {
      tasks.children[i].remove();
    };
  }
};

