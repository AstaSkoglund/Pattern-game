const color=document.getElementById('colordrop');
const height=document.getElementById('height');
const width=document.getElementById('width');
const rebuild = document.getElementById('rebuild');
const square = document.getElementById('square');
rebuild.addEventListener('click', rebuildfunction); 
var colorvalue = 'aqua';


    function rebuildfunction(){
        colorvalue = colordrop.value;
        square.style.backgroundColor = colorvalue;
    for (let i = 0; i < height.value; i++) {
        for (let r = 0; r < width.value; r++) {
          const gridItem = document.createElement('div');
          gridItem.className = 'asquare';   
          square.appendChild(gridItem);
        }
    }
}


/*
    function rebuildfunction(){
        colorvalue = colordrop.value;
        square.style.backgroundColor = colorvalue;
        for ( i = 0; i < height.value; i++){
            square.appendChild('div')
            makerow
    
    
        }
    }
    function makerow(){
    
        for ( i = 0; i < width.value; i++){    
        let boxy = document.createElement("div");
        square.appendChild(boxy).className = "square";
        }
    }
*/