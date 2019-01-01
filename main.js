document.getElementById('select1').addEventListener('click', updateDropDown);
document.getElementById('select2').addEventListener('click', updateDropDown);



function updateDropDown() {
    var top = document.getElementById('top').textContent;
    var selected = event.target.textContent;
    document.getElementById('top').textContent = selected;
    event.target.textContent = top;
    
   
}