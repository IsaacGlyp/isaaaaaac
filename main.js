import './style.css'

let divCount = 1;


document.addEventListener("onchange", () => {
document.onselectionchange = function() {
  let selection = document.getSelection();

  if(selection.isCollapsed){
    // cloned.innerHTML += current.innerHTML;

    let divEl = document.createElement("div");

    divCount += 1;
    divEl.id = `Div${divCount}`;

    divEl.innerHTML += current.innerHTML;

    document.getElementById("newDivs").prepend(divEl);
    //document.getElementById("newDivs").appendChild(divEl);

    divStyler = document.getElementById(`Div${divCount}`);
    mongoolStyler =  divStyler.querySelector(".mongool");

    // divStyler.style.overflowY = 'scroll';
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
});