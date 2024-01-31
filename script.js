const color=document.getElementById('colordrop');
const height=document.getElementById('height');
const width=document.getElementById('width');
const rebuild = document.getElementById('rebuild');
const square = document.getElementById('square');
rebuild.addEventListener('click', rebuildfunction); 
var colorvalue = 'aqua';


    function rebuildfunction(){
        let gridItem;
        colorvalue = colordrop.value;
        square.style.backgroundColor = colorvalue;
    for (let i = 0; i < height.value; i++) {
        for (let r = 0; r < width.value; r++) {
          gridItem = document.createElement('div');
          console.log(i,r); 
          gridItem.style.left = ((i*50)+150).toString() + 'px';
          gridItem.style.top = ((r*50)+50).toString() + 'px';
          gridItem.className = 'asquare';
          gridItem.addEventListener('click', changecolor); 
          square.appendChild(gridItem);
        }
    }

}
function changecolor(event){
    colorvalue = colordrop.value;
    event.target.style.backgroundColor = colorvalue;
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