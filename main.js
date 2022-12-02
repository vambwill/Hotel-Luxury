
let selectEl = document.getElementsByTagName('select');

selectEl[0].addEventListener('change', function() {
    window.open=this.value;

});

