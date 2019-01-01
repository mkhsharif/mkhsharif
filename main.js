
var dropdown =  document.getElementById('menu');


document.getElementById('selector').addEventListener('mouseover', openDropDown);
document.getElementById('selector').addEventListener('mouseout', closeDropDown);
document.getElementById('select1').addEventListener('click', updateDropDown);
document.getElementById('select2').addEventListener('click', updateDropDown);


function openDropDown() {
    if(dropdown.classList.contains('closed')) {
        dropdown.classList.remove('closed');
        dropdown.classList.add('open');
    }
}

function closeDropDown() {
    if(dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
        dropdown.classList.add('closed');
    }
}


function updateDropDown() {
    var top = document.getElementById('top').textContent;
    var selected = this.textContent;
    document.getElementById('top').textContent = selected;
    this.textContent = top;   
    closeDropDown();
}