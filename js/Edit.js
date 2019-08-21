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
                var deleteElement = document.querySelector('#'+event.target.parentNode.id);
                deleteElement.parentNode.removeChild(deleteElement);
            } else event.preventDefault()
        });
    }
}
edit = new Edit();
edit.done();
edit.delete();
