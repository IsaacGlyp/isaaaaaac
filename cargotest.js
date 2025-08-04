"use strict";
console.log("hallo wereld")

var testje = false;

var timer = 1000;

let titAdd  = 0;
let titAdd1 = 1;
let titAdd2 = 2;
let titAdd3 = 3;
let titAdd4 = 4;
let titAdd5 = 5;

var title = document.getElementById("naam");

var perma = "";

var link1 = "<a href=\"file:///D:/School/Artez1/DAT_3/Webzzz/website_testV7/page2.html\"class=\"spanLinks\" id=\'spL0\'>(work)</a>";
var link2 = "<a href=\"https://www.youtube.com/@isaaaaaac2000\"class=\"spanLinks\" id=\'spL1\'>(video)</a>";
var link3 = "<a href=\"https://www.instagram.com/is______c\"class=\"spanLinks\" id=\'spL2\'>(instagram)</a>";
var link4 = "<a href=\"https://isaaaaaac.com\"class=\"spanLinks\" id=\'spL3\'>(web101)</a>";
var link5 = "<a href=\"https://soundcloud.com/isaaaaaaaaaaaaaaaaaaaac_2\"class=\"spanLinks\" id=\'spL4\'>(music2)</a>";
var link6 = "<a href=\"https://soundcloud.com/isaacvandenaker\"class=\"spanLinks\" id=\'spL5\'>(music)</a>";

// const moji = [
//   "♥","✈", "♫","㋡","⇆","<input type=\"checkbox\"checked=\"true\">","✓","⤭","♪","⚧","☹","⟲","a","⁂","a","☆","a","®","✴",
// ];

const moji = [
  "💚","🧩", "🦎","🤮","🧽","🤮","😵","⚠️","✨","🧚‍♂️","💫","💿","📡","a","🧼","a","🔮"," ",
];

var  titAr = [
    "A","A","A","A","A","A",
    "ranMoji","ranMoji", "ranMoji",
    link1,
    "A","ranMoji","ranMoji","ranMoji","ranMoji",
    link2,
    "ranMoji","ranMoji","ranMoji","a","ranMoji","a","ranMoji","ranMoji",
    link3,
    "ranMoji","ranMoji","Ⓐ","ranMoji","Ⓐ","ranMoji","ranMoji",
    " AKER", " DEN", " VAN", "ISAAC",
    link4,
    "ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji",
    link5,
    "ranMoji","a","ranMoji","ranMoji","ranMoji","ranMoji",
    link6,
  ];

let titCount = 1;
let amountOfTits = titAr.length-1;
let counter = 0;
let maxTitleLength = 10000;
let intervalAnimator = 100;

let runnerFunc = (() => {

    counter +=1;
    console.log(intervalAnimator);
    if (testje) {
      clearInterval(myIntervalID);
      myIntervalID = setInterval(runnerFunc, 1500);
    } else if(perma.length > 1000){
      if(intervalAnimator < 200){
        clearInterval(myIntervalID);
        myIntervalID = setInterval(runnerFunc, intervalAnimator);
        intervalAnimator=intervalAnimator+1;
      }else if(intervalAnimator > 199 && intervalAnimator < 500){
        clearInterval(myIntervalID);
        myIntervalID = setInterval(runnerFunc, intervalAnimator);
        intervalAnimator=intervalAnimator+25;
      }else{
        clearInterval(myIntervalID);
        myIntervalID = setInterval(runnerFunc, 500);
      }
    }
    else {
      clearInterval(myIntervalID);
      myIntervalID = setInterval(runnerFunc, 100);
    }

    amountOfTits = titAr.length-1;

  if(titAdd1 < amountOfTits){
    titAdd1 += titCount;
  }  else{
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

  if(titAr[titAdd5] == "ranMoji"){
    titAr[titAdd5] = moji[Math.floor(Math.random()*moji.length)];
  };

  if(counter < 5){
    if(titAr[titAdd1] == "A"){
      perma = perma;
    }
  }
  else{
    if(titAr[titAdd1] == "A"){
      titAr[titAdd1] = moji[Math.floor(Math.random()*moji.length)];
    }
    perma =  titAr[titAdd1] + perma;
  };

  title.innerHTML = "IS"+ titAr[titAdd5] + titAr[titAdd4] + "C" + " V" + titAr[titAdd3] + "N" + " DEN " + titAr[titAdd2] + "KER" + " " + perma;

  if (perma.length > maxTitleLength) {
    // Calculate the number of characters to remove from the end
    const charsToRemove = perma.length - maxTitleLength;

    // Remove characters from the end of the string
    perma = perma.slice(0, -charsToRemove);
}
  // console.log(perma);

});

title.onmouseover = function() {
  testje = true;
};

title.onmouseout = function() {
  testje = false;
};

window.onblur = function() {
  testje = true;
  console.log("blurred");
};

window.onfocus = function() {
  testje = false;
  console.log("active again");
};

const hueRanges = [
  { min: 30, max: 75 },
  { min: 30, max: 75 },
  { min: 30, max: 75 },
  { min: 30, max: 75 },
  { min: 30, max: 75 },
  { min: 30, max: 75 },

];

let hues = [];
let directions = [];
let spanCol = [];

function getRandomDirection() {
  return Math.random() * (1 - 0.5) + 0.2;
}

for (let i = 0; i < hueRanges.length; i++) {
  hues[i] = hueRanges[i].min;
  spanCol[i] = `hsl(270, 80%, ${hues[i]}%)`;
  directions[i] = getRandomDirection();
}

let nodeLink;

let logColor = (() => {
  for (let i = 0; i < hues.length; i++) {
      hues[i] += directions[i];
      if (hues[i] < hueRanges[i].min || hues[i] > hueRanges[i].max) {
          directions[i] *= -1;
      }
      spanCol[i] = `hsl(270, 80%, ${hues[i]}%)`;
  }
    let links = document.querySelectorAll('.spanLinks');

    links.forEach(link => {

        if (link !== nodeLink) {
          if(link.id == "spL0"){
          link.style.color = spanCol[0];
        }
        if(link.id == "spL1"){
          link.style.color = spanCol[1];
        }
        if(link.id == "spL2"){
          link.style.color = spanCol[2];
        }
        if(link.id == "spL3"){
          link.style.color = spanCol[3];
        }
        if(link.id == "spL4"){
          link.style.color = spanCol[4];
        }
        if(link.id == "spL5"){
          link.style.color = spanCol[5];
        }
      }
    });

    requestAnimationFrame(logColor);
});

logColor();

function fadeColor(link, originalColor) {
  link.style.transition = "color 0.2s"; // Smooth transition over 0.5 seconds
  link.style.color = originalColor;
}

var parentAnchor = document.getElementById('naam');

function handleMutations(mutationsList, observer) {
    mutationsList.forEach(function(mutation) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1 && node.classList.contains('spanLinks')) {

                    node.addEventListener('mouseover', function() {
                        nodeLink = this;
                        this.style.color = "#ff4e2f";
                    });

                    node.addEventListener('mouseout', function() {
                        if(this.id == "spL0"){
                          fadeColor(this, spanCol[0]);
                        }
                        if(this.id == "spL1"){
                          fadeColor(this, spanCol[1]);
                        }
                        if(this.id == "spL2"){
                          fadeColor(this, spanCol[2]);
                        }
                        if(this.id == "spL3"){
                          fadeColor(this, spanCol[3]);
                        }
                        if(this.id == "spL4"){
                          fadeColor(this, spanCol[4]);
                        }
                        if(this.id == "spL5"){
                          fadeColor(this, spanCol[5]);
                        }
                    });
                }
            });
        }
    });
}

var observer = new MutationObserver(handleMutations);
var observerConfig = { childList: true };
observer.observe(parentAnchor, observerConfig);


logColor();
let myIntervalID = setInterval(runnerFunc, 1000);



