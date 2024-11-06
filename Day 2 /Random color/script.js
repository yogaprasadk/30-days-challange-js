for(let i = 0;i<9;i++){
  const box = document.createElement('div');
  box.classList.add('box');
  document.querySelector('.container').appendChild(box);
}

const btn = document.querySelector('.btn');
const randomcolorclick = document.quertSelectorAll('.box');

function  randomhexcolorcode(){
  var chars = '0123456789abcdef';
  var colorlength = 6;
  var color = '';
  
  for(let i = 0;i<colorlength;i++){
    var randomcolor = Math.floor(Math.random()*chars.length);
    color += chars.substring(randomcolor,randomcolor + 1);
    
  }
  return '#' + color;
}

function addColor(){
  randomColorBlock.forEach(e =>{
    var newcolor = randomhexcolorcode();
    e.style.backgroundColor = newcolor;
  })
}
