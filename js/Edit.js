function Edit() {
    this.elem = document.querySelector('ul');
    this.done = function() {
        this.elem.addEventListener('click', function (event) {
            if (event.target.className == 'button done') {
                var doneElementText = document.querySelector('#'+event.target.parentNode.id +'>p');
                var doneElementButton = document.querySelector('#'+event.target.parentNode.id +' .done');
                doneElementButton.disabled = true;
                doneElementText.className += 'task-done';
                console.log('edit', doneElementButton)
            } else event.preventDefault()
        });
    };
    this.delete = function () {
        this.elem.addEventListener('click', function (event) {
            if (event.target.className == 'button delete') {
                store.data.arr.splice(1,1);
                console.log(store.data.arr)
                // var deleteElement = document.querySelector('#'+event.target.parentNode.id);
                // deleteElement.parentNode.removeChild(deleteElement);
                // console.log('id for del ',event.target.parentNode.id);
                // store.data.arr.splice(event.target.parentNode.id, 1);
                // console.log(store.data.arr);
            } else event.preventDefault()
        });
    }
}

edit = new Edit();
edit.done();
edit.delete();
