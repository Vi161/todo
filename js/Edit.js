console.log('loaded edit.js');

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
    this.list = document.querySelector('.form-wrap>ul');
    this.addTaskToDOM = function () {
        let id = 0;
        let countId = function () {
            return ++id;
        };

        let addElemToArr = function () {
            store.data.arr.push({
                id : id,
                value : taskField.inputNew.value,
                state : 1
            });
        };
        let temp = function () {
            add.list.insertAdjacentHTML('beforeend',
                '<li class="task-item" id="'+store.data.arr[store.data.arr.length - 1].id+'"> ' +
                '<button class="button delete">delete</button>' +
                '<button class="button done">done</button> ' +
                ' <p>'+ store.data.arr[store.data.arr.length - 1].value +'</p> ' +
                '</li>');
        };
        let onEnter = function () {
            addElemToArr();
            add.updateElemDOM();
            taskField.inputNew.value = null;
            buttonAdd.disabled = true;
        };
        return this.button.addEventListener('click', function () {
                countId();
                onEnter();
            }) ||
            this.inputNew.addEventListener("keyup", function(event) {
                if (event.keyCode === 13) {
                    if (taskField.inputNew.value !== '') {
                        countId();
                        onEnter();
                    }
                }
            });
    }
    this.updateElemDOM = function () {
        this.list.innerHTML = "";
        for (let i = 0; i < store.data.arr.length; i++) {
            add.list.insertAdjacentHTML('beforeend',
                '<li class="task-item" id="'+store.data.arr[i].id+'"> ' +
                '<button class="button delete">delete</button>' +
                '<button class="button done">done</button> ' +
                ' <p>'+ store.data.arr[i].value +'</p> ' +
                '</li>');
        }

    };
}



function Edit() {
    this.elem = document.querySelector('ul');
    this.done = function() {
        this.elem.addEventListener('click', function (event) {
            if (event.target.className == 'button done') {
                let doneElementText = document.querySelector('#'+event.target.parentNode.id +'>p');
                let doneElementButton = document.querySelector('#'+event.target.parentNode.id +' .done');
                doneElementButton.disabled = true;
                doneElementText.className += 'task-done';
                console.log('edit', doneElementButton)
            } else event.preventDefault()
        });
    };
    this.delete = function () {
        this.elem.addEventListener('click', function (event) {
            if (event.target.className == 'button delete') {
                let selfId = event.target.parentNode.id;
                console.log('id=', store.data.arr.filter(item => item.id != selfId));
                store.data.arr = store.data.arr.filter(item => item.id != selfId);

                add.updateElemDOM();
                console.log(store.data.arr)
            } else event.preventDefault()
        });
    }
}
let add = new Add();
let taskField = new TaskField();
let store = new Store();

add.addTaskToDOM();
taskField.valueLength();
edit = new Edit();
edit.done();
edit.delete();
