
function init() {
  var returnObj = JSON.parse(localStorage.getItem("arrKey")) //спарсим его обратно объект
  store.data.arr = returnObj;
  add.updateElemDOM();
}
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
      // return Date.now();
    };

    let addElemToArr = function () {
      store.data.arr.push({
        id : Date.now(),
        value : taskField.inputNew.value,
        state : 1
      });
      serialStorage();
    };
    let onEnter = function () {
      addElemToArr();
      add.updateElemDOM();
      taskField.inputNew.value = null;
      buttonAdd.disabled = true;
    };
    return this.button.addEventListener('click', function () {
        // countId();
        onEnter();
      }) ||
      this.inputNew.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
          if (taskField.inputNew.value !== '') {
            // countId();
            onEnter();
          }
        }
      });
  }
  this.updateElemDOM = function () {
    this.list.innerHTML = "";
    let buttonDone = '<button class="button done">done</button>';
    let buttonRevert = '<button class="button done">revert</button>';
    let classDone = '';
    let button = '';
    if (store.data.arr === null) {
      store.data.arr = [];
    }
    let startDomElem = (add.currentPage - 1) * add.paginationElemCol;
    let endDomElem = (add.currentPage - 1) * add.paginationElemCol + add.paginationElemCol;
    for (let i = startDomElem; i < endDomElem ; i++) {
      if (store.data.arr[i]) {
        console.log('df ', endDomElem);
        if (store.data.arr[i].state == 1) {
          button = buttonDone;
          classDone = ''
        } else {
          button = buttonRevert;
          classDone = 'js-task-done'
        };
        add.list.insertAdjacentHTML('beforeend',
          '<li class="task-item" id="'+store.data.arr[i].id+'"> ' +
          '<button class="button delete">delete</button>' +
          button +
          ' <p class="' + classDone + '">'+ store.data.arr[i].value +'</p> ' +
          '</li>');
      }
    }
    this.pagination();
  };
  this.currentPage = 1;
  this.paginationElemCol = 5;
  this.pagination = function () {
    if (store.data.arr.length > add.paginationElemCol) {
      let paginBut = document.querySelector('.form-wrap>ul');
      paginBut.insertAdjacentHTML('beforeend',
        `<div class="pagination-wrap">
                 <button class="button prev">prev</button>
                 <button class="button next">next</button>
              </div>`
      );
      let maxPage =  store.data.arr.length/add.paginationElemCol;
      let buttonPrev = document.querySelector('button.prev');
      let buttonNext = document.querySelector('button.next');
      console.log('pagin')
      buttonNext.addEventListener('click', function () {
        if (add.currentPage < maxPage ) {
          console.log('this ', add.currentPage++);
          add.updateElemDOM();
        }

      });
      buttonPrev.addEventListener('click', function () {
        if (add.currentPage > 1) {
          console.log('this ', add.currentPage--);
          add.updateElemDOM();
        }
      });
    }

  }
}

function Edit() {
  this.elem = document.querySelector('ul');
  this.state = function() {
    this.elem.addEventListener('click', function (event) {
      if (event.target.className == 'button done') {
        let selfId = event.target.parentNode.id;
        let index = store.data.arr.findIndex(fruit => fruit.id == selfId);
        let selfElem = store.data.arr[index];

        selfElem.state = !selfElem.state;
        serialStorage();
        add.updateElemDOM();
      } else event.preventDefault()
    });
  };
  this.delete = function () {
    this.elem.addEventListener('click', function (event) {
      if (event.target.className == 'button delete') {
        // store.data.arr.splice()
        let selfId = event.target.parentNode.id;
        store.data.arr = store.data.arr.filter(item => item.id != selfId);
        serialStorage();
        add.updateElemDOM();
      } else event.preventDefault()
    });
  }
}
function serialStorage() {
  let serialObj = JSON.stringify(store.data.arr); //сериализуем его
  localStorage.setItem("arrKey", serialObj); //запишем его в хранилище по ключу "myKey"
}
let add = new Add();
let taskField = new TaskField();
let store = new Store();

add.addTaskToDOM();
init();

taskField.valueLength();
edit = new Edit();
edit.state();
edit.delete();
