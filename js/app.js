/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function () {
    var counter = 0;
    var inputTask = document.querySelector('#taskInput');
    var addTaskButton = document.querySelector('#addTaskButton');
    var taskList = document.querySelector('#taskList');
    var removeButton = document.querySelector('#removeFinishedTasksButton');
    var taskCounter = document.querySelector('#counter');
    var todo = document.querySelector('#todo');
    var counterElement = document.createElement('h3');
    counterElement.innerText = 'Liczba zadań do zrobienia : ' + counter;
    todo.insertBefore(counterElement, taskList);

    function newTask () {
        var newLi = document.createElement('li');
        var newHeader = document.createElement('p');
        newHeader.classList.add('task');
        var deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteBtn');
        var completeButton = document.createElement('button');
        completeButton.classList.add('completeBtn');
        var doneTasks = document.querySelectorAll('.done');
        var val = inputTask.value;

        if (val.length >= 1 && val.length < 100) {
            taskList.appendChild(newLi);
            newLi.appendChild(newHeader);
            newLi.appendChild(completeButton);
            newLi.appendChild(deleteButton);
            
            newHeader.innerText = inputTask.value;
            deleteButton.innerText = '\u274C';
            completeButton.innerText = '\u2714';
            inputTask.value = '';
            counterElement.innerText ='Liczba zadań do zrobienia : ' + ++counter;
        }

        completeButton.addEventListener('click', function (event) {
            var taskText = this.parentElement.firstElementChild;
            taskText.classList.toggle('done');
            if (taskText.classList.contains('done')) {
                counterElement.innerText ='Liczba zadań do zrobienia : ' + --counter;
            } else {
                counterElement.innerText ='Liczba zadań do zrobienia : ' + ++counter;
            }
        });

        deleteButton.addEventListener('click', function (event) {
            var targetedLi = this.parentElement;
            targetedLi.parentElement.removeChild(targetedLi);

            if(targetedLi.firstChild.classList.contains('done')) {
                counterElement.innerText ='Liczba zadań do zrobienia : ' + counter;
            } else {
                counterElement.innerText ='Liczba zadań do zrobienia : ' + --counter;
            }
        });
    }

    addTaskButton.addEventListener('click', newTask);

    removeButton.addEventListener('click', function (event) {
        var targets = document.querySelector('#taskList').querySelectorAll('.done');
        console.log(targets);
        if (targets.length > 0) {
            targets.forEach(function (target) {
                var parentItem = target.parentElement;
                parentItem.parentElement.removeChild(parentItem);
            })
        }
    });
});