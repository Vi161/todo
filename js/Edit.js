function Edit() {
    this.elem = document.querySelector('#buttonDone1');
    this.func = function () {
        console.log('elem');
    }
    this.done = function() {
        this.elem.addEventListener('click', function () {
            console.log('edit')
        })
    }

}
edit = new Edit();
edit.done();
