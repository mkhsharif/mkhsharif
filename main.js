document.getElementById('selector').addEventListener('mouseover', open.bind(null, 'menu'));
document.getElementById('selector').addEventListener('mouseout', close.bind(null, 'menu'));
document.getElementById('select1').addEventListener('click', updateDropDown);
document.getElementById('select2').addEventListener('click', updateDropDown);

function open(id) {
    var element = document.getElementById(id);
    if(element.classList.contains('closed')) {
        element.classList.remove('closed');
        element.classList.add('open');
    }
}

function close(id) {
    var element = document.getElementById(id);
    if(element.classList.contains('open')) {
        element.classList.remove('open');
        element.classList.add('closed');
    }
}

function updateDropDown() {
    var top = document.getElementById('top').textContent;
    var selected = this.textContent;
    document.getElementById('top').textContent = selected;
    this.textContent = top;   
    close('menu');
    close(top.toLowerCase());
    open(selected.toLowerCase());
}



