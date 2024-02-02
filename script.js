const color=document.getElementById('colordrop');
const height=document.getElementById('height');
const width=document.getElementById('width');
const rebuild = document.getElementById('rebuild');
const square = document.getElementById('square');
rebuild.addEventListener('click', rebuildranfunction); 
width.addEventListener('change', rebuildfunction)
height.addEventListener('change', rebuildfunction)
var colorvalue = 'aqua';


    function rebuildfunction(){
        let gridItem;
        colorvalue = colordrop.value;
        square.style.backgroundColor = colorvalue;
    for (let i = 0; i < height.value; i++) {
        for (let r = 0; r < width.value; r++) {
          gridItem = document.createElement('div');
          console.log(i,r); 
          gridItem.style.left = ((i*43)+100).toString() + 'px';
          gridItem.style.top = ((r*43)+50).toString() + 'px';
          gridItem.className = 'asquare';
          gridItem.style.backgroundColor = colorvalue;
          gridItem.addEventListener('click', changecolor); 
          square.appendChild(gridItem);
        }
    }
    }
function rebuildranfunction(){
    let gridItem;
    colorvalue = colordrop.value;
    square.style.backgroundColor = colorvalue;
for (let i = 0; i < height.value; i++) {
    for (let r = 0; r < width.value; r++) {
      gridItem = document.createElement('div');
      console.log(i,r); 
      gridItem.style.left = ((i*43)+100).toString() + 'px';
      gridItem.style.top = ((r*43)+50).toString() + 'px';
      gridItem.className = 'asquare';
      const RE = Math.floor(Math.random()*255);
      const GR = Math.floor(Math.random()*255);
      const BL = Math.floor(Math.random()*255);
      gridItem.style.backgroundColor = `rgb(${RE},${GR},${BL})`;
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