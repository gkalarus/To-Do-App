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
    counterElement.innerText = 'Number of things to do : ' + counter;
    counterElement.classList.add('hidden');
    todo.insertBefore(counterElement, inputTask);

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
            removeButton.classList.remove('hidden');
            counterElement.classList.remove('hidden');
            
            newHeader.innerText = inputTask.value;
            deleteButton.innerText = '\u274C';
            completeButton.innerText = '\u2714';
            inputTask.value = '';
            counterElement.innerText ='Number of things to do: ' + ++counter;
        }

        completeButton.addEventListener('click', function (event) {
            var taskText = this.parentElement.firstElementChild;
            taskText.classList.toggle('done');
            if (taskText.classList.contains('done')) {
                counterElement.innerText ='Number of things to do : ' + --counter;
            } else {
                counterElement.innerText ='Number of things to do : ' + ++counter;
            }
        });

        deleteButton.addEventListener('click', function (event) {
            var allItems = document.querySelector('#taskList').querySelectorAll('li');
            var targetedLi = this.parentElement;
            targetedLi.parentElement.removeChild(targetedLi);

            if(targetedLi.firstChild.classList.contains('done')) {
                counterElement.innerText ='Number of things to do : ' + counter;
            } else {
                counterElement.innerText ='Number of things to do : ' + --counter;
            }

            if(counter === 0 && allItems.length === 1 ) {
                removeButton.classList.add('hidden');
                counterElement.classList.add('hidden');
            }
        });
    }

    addTaskButton.addEventListener('click', newTask);

    removeButton.addEventListener('click', function (event) {
        var targets = document.querySelector('#taskList').querySelectorAll('.done');
        var doneItems = document.querySelector('#taskList').querySelectorAll('.done');
        var allItems = document.querySelector('#taskList').querySelectorAll('li');
        if (targets.length > 0) {
            targets.forEach(function (target) {
                var parentItem = target.parentElement;
                parentItem.parentElement.removeChild(parentItem);
            })
        }
        if(counter === 0 && doneItems.length === allItems.length ) {
            removeButton.classList.add('hidden');
            counterElement.classList.add('hidden');
        }
    });
});