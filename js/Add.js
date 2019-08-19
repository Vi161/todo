console.log('loaded Add.js');

function Add() {
    this.button = document.getElementById('buttonAdd');

    this.buttonClick = function () {
        return this.button.onclick = function () {
            console.log('button click');
        }
    }
}

