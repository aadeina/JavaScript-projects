const text = "Knowing how to motivate yourself can help you accomplish anything you set your mind to";

let index = 0 ;

function writeText(){
  document.body.innerText = text.slice(0, index);

  index++;

  if(index > text.length - 1){
    index = 0;
  }

}

setInterval(writeText, 110)