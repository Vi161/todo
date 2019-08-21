function Edit() {
    this.elem = document.querySelector('ul');
    this.done = function() {
        this.elem.addEventListener('click', function (event) {
            if (event.target.className == 'button done') {
                console.log('edit', event.target.parentNode.id)
            } else event.preventDefault()
        });
    }
}
edit = new Edit();
edit.done();
