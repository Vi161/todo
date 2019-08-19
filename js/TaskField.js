console.log('loaded Add.js');

function TaskField() {
    this.inputNew = document.getElementById('inputNew');
    this.buttonAdd = document.getElementById("buttonAdd");
    this.valueLength = function () {
        return this.inputNew.oninput = function () {
            this.value.length ? (buttonAdd.disabled = false) : (buttonAdd.disabled = true)
            console.log('valuelength', this.value.length)
        }

    }
}

