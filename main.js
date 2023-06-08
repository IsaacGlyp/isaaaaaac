import './style.css'

var divCount = 1;



document.onselectionchange = function() {
  var selection = document.getSelection();

  let mouseUp = false;

  document.addEventListener(this.onmouseup, () => {
    mouseUp = true;
  });


  if(mouseUp){
    // cloned.innerHTML += current.innerHTML;

    var divEl = document.createElement("div");

    divCount += 1;
    divEl.id = `Div${divCount}`;

    divEl.innerHTML += current.innerHTML;

    document.getElementById("newDivs").prepend(divEl);
    var divStyler = document.getElementById(`Div${divCount}`);
    var mongoolStyler =  divStyler.querySelector(".mongool");

    divStyler.style.left = "0px";
    divStyler.style = "0px";

    if(divCount % 10 > 8){
      divStyler.style.background = "rgb(200,200,200)";
      // mongoolStyler.style.color = "rgb(255,0,0)";
      divStyler.style.color = "rgb(0,0,255)";
    }
    else{
      divStyler.style.backgroundImage = "linear-gradient(180deg, rgb(255,255,255,0) 0%, rgb(255, 255, 255,0.5) 100%)";
    }

    mongoolStyler.style.writingMode ='vertical-lr';
    // divStyler.style.position = absolute;
    current.innerHTML = current.innerHTML = "" ;
  }
  else{
    current.innerHTML = current.innerHTML = "" ;
  }

  // Clone DOM nodes from ranges (we support multiselect here)
  for (let i = 0; i < selection.rangeCount; i++) {
    current.append(selection.getRangeAt(i).cloneContents());
  }
};