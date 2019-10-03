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
            let serialObj = JSON.stringify(store.data.arr); //сериализуем его
            localStorage.setItem("arrKey", serialObj); //запишем его в хранилище по ключу "myKey"

            console.log(store.data.arr);
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
        let buttonDone = '<button class="button done">done</button>';
        let buttonRevert = '<button class="button done">revert</button>';
        let button = '';
        for (let i = 0; i < store.data.arr.length; i++) {
            (store.data.arr[i].state == true) ? (button = buttonDone) : (button = buttonRevert);
            add.list.insertAdjacentHTML('beforeend',
                '<li class="task-item" id="'+store.data.arr[i].id+'"> ' +
                '<button class="button delete">delete</button>' +
                button +
                ' <p>'+ store.data.arr[i].value +'</p> ' +
                '</li>');
        }

    };
}

function Edit() {
    this.elem = document.querySelector('ul');
    this.state = function() {
        this.elem.addEventListener('click', function (event) {
            if (event.target.className == 'button done') {
                let selfId = event.target.parentNode.id;
                let index = store.data.arr.findIndex(fruit => fruit.id == selfId);
                let selfElem = store.data.arr[index];

                console.log(selfId);
                selfElem.state = !selfElem.state;
                console.log('state = ', selfElem.state);
                console.log(store.data.arr);
                add.updateElemDOM();

            } else event.preventDefault()
        });
    };
    this.delete = function () {
        this.elem.addEventListener('click', function (event) {
            if (event.target.className == 'button delete') {
                let selfId = event.target.parentNode.id;
                console.log('id=', selfId);
                store.data.arr = store.data.arr.filter(item => item.id != selfId);
                let serialObj = JSON.stringify(store.data.arr); //сериализуем его
                localStorage.setItem("arrKey", serialObj); //запишем его в хранилище по ключу "myKey"
                add.updateElemDOM();
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
edit.state();
edit.delete();
