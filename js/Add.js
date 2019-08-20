console.log('loaded Add.js');

function TaskField() {
    this.inputNew = document.querySelector('#inputNew');
    this.buttonAdd = document.querySelector("#buttonAdd");
    this.valueLength = function () {
        return this.inputNew.addEventListener('input', function () {
            this.value.length ? (buttonAdd.disabled = false) : (buttonAdd.disabled = true)
        })
    }
}

function Add() {
    this.button = document.querySelector('#buttonAdd');
    this.buttonClick = function () {
        var id = 0;
        var ul = document.querySelector('.form-wrap');
        var countId = function () {
            console.log('id',id++);
        }
        var addElem = function () {
            ul.insertAdjacentHTML('beforeend',
                '<li class="task-item" id="task'+id+'"> ' +
                '<button class="button delete">delete</button>' +
                '<button class="button done" id="buttonDone'+id+'">done</button> ' +
                ' <p>'+ store.data.value +'</p> ' +
                '</li>');
        }
        return this.button.addEventListener('click', function () {
            store.data.value = taskField.inputNew.value;
            countId();
            addElem();
            taskField.inputNew.value = null;
            buttonAdd.disabled = true;
        })
    }
}

var add = new Add();
var taskField = new TaskField();
var store = new Store();

add.buttonClick();
taskField.valueLength();
