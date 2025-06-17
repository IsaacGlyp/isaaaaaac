
const hueRanges2 = [
    { min: 30, max: 75 },
    { min: 30, max: 75 },
    { min: 30, max: 75 },
    { min: 30, max: 75 },
    { min: 30, max: 75 },
    { min: 30, max: 75 },
    { min: 30, max: 75 },
    { min: 30, max: 75 },
    { min: 30, max: 75 },
    { min: 30, max: 75 },
    { min: 30, max: 75 },
    { min: 30, max: 75 },
    { min: 30, max: 75 },
    { min: 30, max: 75 },
    { min: 30, max: 75 },
    { min: 30, max: 75 },
    { min: 30, max: 75 },
    { min: 30, max: 75 },
    { min: 30, max: 75 },
    { min: 30, max: 75 },
    { min: 30, max: 75 },
    { min: 30, max: 75 },
    { min: 30, max: 75 },
    { min: 30, max: 75 },
  ];

  let hues2 = [];
  let directions2 = [];
  let spanCol2 = [];
  let spanCol3 = [];

  function getRandomDirection2() {
    return Math.random() * (1 - 0.5) + 0.2;
  }

  for (let i = 0; i < hueRanges2.length; i++) {
    hues2[i] = hueRanges2[i].min;
    spanCol2[i] = `hsl(270, 80%, ${hues2[i]}%)`;
    spanCol3[i] = `hsl(9, 100%, ${hues2[i]}%)`;
    directions2[i] = getRandomDirection2();
  }

  let logColor2 = (() => {
    for (let i = 0; i < hues2.length; i++) {
        hues2[i] += directions2[i];
        if (hues2[i] < hueRanges2[i].min || hues2[i] > hueRanges2[i].max) {
            directions2[i] *= -1;
        }
        spanCol2[i] = `hsl(270, 80%, ${hues2[i]}%)`;
        spanCol3[i] = `hsl(9, 100%, ${hues2[i]}%)`;
    }

    const menuLinks = document.querySelectorAll('.menuLinks');
    const menuLinks2 = document.querySelectorAll('.otherLinks');

    menuLinks.forEach((link, index) => {
        link.style.color = spanCol2[index];
    });
    menuLinks2.forEach((link, index) => {
        link.style.color = spanCol3[index];
    });

      requestAnimationFrame(logColor2);
  });

  logColor2();

  let box1Over = document.getElementById("box1Over");
  let box2Over = document.getElementById("box2Over");
  let box1 = document.getElementById("box1");

  function updateBoxWidth() {
      let box1OverWidth = parseFloat(window.getComputedStyle(box1).width);
      let box2OverWidth = parseFloat(window.getComputedStyle(box1).width);
      let scrollWidth = box1.offsetWidth - box1.clientWidth;
      box1Over.style.width = (box1OverWidth) + 'px';
      box2Over.style.width = (box2OverWidth ) + 'px';
  }

  updateBoxWidth();
  window.addEventListener('resize', updateBoxWidth);