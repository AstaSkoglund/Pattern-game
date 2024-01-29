const color=document.getElementById('colordrop');
const height=document.getElementById('hight');
const width=document.getElementById('width');
const rebuild = document.getElementById('rebuild');
const square = document.getElementById('square');
rebuild.addEventListener('click', rebuildfunction); 
var colorvalue = 'aqua';

function rebuildfunction(){
    colorvalue = colordrop.value;
    square.style.backgroundColor = colorvalue;
    for ( i = 0; i < height.value; r++){
        let row = document.createElement("div");
        square.appendChild(row).className = "square";
    }
}



