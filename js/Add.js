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
    this.inputNew = document.querySelector('#inputNew');
    this.button = document.querySelector('#buttonAdd');
    this.addTaskToDOM = function () {
        // var id = 1;
        var ul = document.querySelector('.form-wrap>ul');
        // var countId = function () {
        //     return id = new Date().getTime();
        // };

        var addElemToArr = function () {
            store.data.arr.push({
                id : new Date().getTime(),
                value : taskField.inputNew.value,
                state : 1
            });
        };
        var updateElemDOM = function () {
            ul.insertAdjacentHTML('beforeend',
                '<li class="task-item" id="'+store.data.arr[store.data.arr.length - 1].id+'"> ' +
                    '<button class="button delete">delete</button>' +
                    '<button class="button done">done</button> ' +
                    ' <p>'+ store.data.arr[store.data.arr.length - 1].value +'</p> ' +
                '</li>');
        };
        var onEnter = function () {
            addElemToArr();
            updateElemDOM();
            taskField.inputNew.value = null;
            buttonAdd.disabled = true;
            console.log(store.data.arr)
        };
        return this.button.addEventListener('click', function () {
                    onEnter()
                }) ||
                this.inputNew.addEventListener("keyup", function(event) {
                    if (event.keyCode === 13) {
                        if (taskField.inputNew.value !== '') {
                            onEnter()
                        }
                    }
                });
    }
}

var add = new Add();
var taskField = new TaskField();
var store = new Store();

add.addTaskToDOM();
taskField.valueLength();
