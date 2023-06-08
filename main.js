import './style.css'

var divCount = 1;

const startAr = [" / ", " -- ", " \\ ", " | "];
let startTemp = 1;
let startAnim = 0;


setInterval(displayHello, 100);

function displayHello() {

  if(startAnim < 3){
    startAnim += startTemp;
  }
  else{
    startAnim = 0;
  }

  document.getElementById("start").innerHTML = "";
  document.getElementById("start").innerHTML += `Hello${startAr[startAnim]}`;
}

const titAr = ["💚","🧩", "🦎","🤮","🧽","🤮","😵","✨","🧚‍♂️","💫","💿","📡","🧼","🦠","🔮"];
let titAdd  = 0;
let titAdd1 = 1;
let titAdd2 = 2;
let titAdd3 = 3;
let titAdd4 = 4;
let titAdd5 = 5;

document.onselectionchange = function() {
  var selection = document.getSelection();

  document.addEventListener("mouseup", () => {
    var body = document.getElementsByTagName("body")[0];
    document.getSelection().collapse(body,0);
    console.log("heullo");

  });

  if(selection.isCollapsed){
    cloned.innerHTML += current.innerHTML;

    var divEl = document.createElement("div");

    divCount += 1;

    divEl.id = `Div${divCount}`;

    divEl.innerHTML += current.innerHTML;

    document.getElementById("newDivs").prepend(divEl);
    var divStyler = document.getElementById(`Div${divCount}`);
    var mongoolStyler =  divStyler.querySelector(".mongool");

    // var selectionStyler = divStyler.MozSelection;
    // selectionStyler.background = "rgb(0,0,0)";


    divStyler.style.left = "0px";
    divStyler.style = "0px";

    if(divCount % 10 > 8){
      divStyler.style.background = "rgb(200,200,200)";
      // mongoolStyler.style.color = "rgb(255,0,0)";
      divStyler.style.color = "rgb(156,0,255)";
    }
    else{
      let r = Math.random() * 50;
      let g = Math.random() * 50;
      let b = Math.random() * 50;
      divStyler.style.backgroundImage = `linear-gradient(180deg, rgb(165,255,110,0) 0%, rgb(165,255,110,0.5) 100%)`;
    }

    let titCount = 1;
    let amountOfTits = 13;
    console.log(titAdd);

    if(titAdd < amountOfTits){
      titAdd += titCount;
    }
    else{
      titAdd = 0;
    }
    if(titAdd1 < amountOfTits){
      titAdd1 += titCount;
    }
    else{
      titAdd1 = 0;
    }
    if(titAdd2 < amountOfTits){
      titAdd2 += titCount;
    }
    else{
      titAdd2 = 0;
    }
    if(titAdd3 < amountOfTits){
      titAdd3 += titCount;
    }
    else{
      titAdd3 = 0;
    }
    if(titAdd4 < amountOfTits){
      titAdd4 += titCount;
    }
    else{
      titAdd4 = 0;
    }
    if(titAdd5 < amountOfTits){
      titAdd5 += titCount;
    }
    else{
      titAdd5 = 0;
    }

    var title = document.getElementById("title");
    // title.innerHTML = titAr[titAdd] + "isaaaaaac"+ titAr[titAdd];
    title.innerHTML = "is"+ titAr[titAdd5] + titAr[titAdd4] + titAr[titAdd3] + titAr[titAdd2] + titAr[titAdd1] + titAr[titAdd] + "c" ;

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