function setRandom(string, min, max, donvi, name) {
  var particles = document.querySelectorAll(name);
  particles.forEach((par) => {
    par.style.setProperty(
      string,
      Math.floor(Math.random() * (max - min)) + min + donvi
    );

    par.addEventListener("animationiteration", () => {
      par.style.setProperty(
        string,
        Math.floor(Math.random() * (max - min)) + min + donvi
      );
    });
  });
}

setRandom("--randomFloat-tx", 10, 90, "vw", ".particle");
setRandom("--randomFloat-size", 7, 17, "vh", ".particle");

var left_caret = document.querySelector(".fa-caret-left");
var right_caret = document.querySelector(".fa-caret-right");
var left_title = document.querySelector(".left-title");
var right_title = document.querySelector(".right-title");
var main_title = document.querySelector(".main-title");

var left_content = document.getElementById("left-content");
var right_content = document.getElementById("right-content");
var main_content = document.querySelector(".main-content");

var sub_title = document.querySelector(".sub-title");

var home = document.querySelector(".social-media");
var project = document.querySelector(".project");

var main_title_transition_css = `cursor: pointer;
display: inline-block;
font-size: max(80%, 1.5vw);
margin: 4vh 0vw 0vh 0vw;
color: rgb(106, 106, 106);
font-family: "Poppins", sans-serif;
word-wrap: break-word;
white-space: nowrap;
max-width: 100%;
min-width: auto;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
transition: all 0.7s ease;`;
var main_title_default_css = `
display: inline-block;
font-size: max(200%, 3vw);
margin: 4vh 0vw 0vh 0vw;
color: rgb(106, 106, 106);
font-family: "Poppins", sans-serif;
word-wrap: break-word;
white-space: nowrap;
max-width: 25vw;
min-width: 150px;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;`;
var next_title_default_css = `cursor: pointer;
display: inline-block;
font-size: max(80%, 1.5vw);
margin: 4vh 0vw 0vh 0vw;
color: rgb(106, 106, 106);
font-family: "Poppins", sans-serif;
word-wrap: break-word;
white-space: nowrap;
max-width: 100%;
min-width: auto;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;`;

var next_title_transition_css = `
display: inline-block;
font-size: max(200%, 3vw);
margin: 4vh 0vw 0vh 0vw;
color: rgb(106, 106, 106);
font-family: "Poppins", sans-serif;
word-wrap: break-word;
white-space: nowrap;
max-width: 25vw;
min-width: 150px;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
transition:all 0.7s ease`;

class project_info {
  constructor(title, subtitle, lefthtml, righthtml) {
    this.subtitle = subtitle;
    this.title = title;
    this.lefthtml = lefthtml;
    this.righthtml = righthtml;
  }
}

var queue = [
  new project_info(
    "F-Tech Shop",
    "Commercial Website",

    `<img
  src="Image/ftech.png"
  style="
    width: 70%;
    min-width: 300px;
    border-radius: 5%;
    border-radius: 10px;
  "
/>
<p style="margin-top:5px">Asking Rin-chan even code!!!</p>`,
    `<p class="col-md-9" style="font-size: max(12px, 1.2vw)">
F-tech shop. Trusted e-commerce site.<br /><br />Discover the latest phones, laptops, AirPods, and watches in a sleek, user-friendly environment. Shop now for unbeatable deals and cutting-edge technology!
  </p>
 
    <a href="https://github.com/gwang08/ecommerce-website" target="_blank"><i class="fa-brands fa-github" style="font-size: 100%;">  See github repository</i></a>
  </div>`
  ),


  new project_info(
    "Ticket Resell Web",
    "Community Website",

    `<img
  src="Image/ticket.png"
  style="
    width: 70%;
    min-width: 300px;
    border-radius: 5%;
    border-radius: 10px;
  "
/>
<p style="margin-top:5px">Asking Rin-chan even code!!!</p>`,
    `<p class="col-md-9" style="font-size: max(12px, 1.2vw)">
Ticket Resell Web – Your Trusted Ticket Marketplace
<br /><br /> Discover and trade tickets for exclusive events effortlessly. Enjoy secure, seamless buying and selling experiences on a trusted platform.
  </p>
 
    <a href="https://github.com/VKev/Ticket-Resell-Web-App" target="_blank"><i class="fa-brands fa-github" style="font-size: 100%;">  See github repository</i></a>
  </div>`
  ),

];

var project_index = 0;
main_title.innerHTML = queue[project_index].title;
left_content.innerHTML = queue[project_index].lefthtml;
right_content.innerHTML = queue[project_index].righthtml;
sub_title.innerHTML = queue[project_index].subtitle;
left_title.innerHTML = queue[CalculateProjectIndex(project_index - 1)].title;
right_title.innerHTML = queue[CalculateProjectIndex(project_index + 1)].title; //
function CalculateProjectIndex(index) {
  if (index >= 0) index = index % queue.length;
  else index = queue.length - 1;
  return index;
}

var isSwitching = false;
function switchProject(direction) {
  if (!isSwitching) {
    isSwitching = true;
    project_index = CalculateProjectIndex(project_index + direction);
    if (direction > 0) switchTitle(direction, right_title, left_title);
    else switchTitle(direction, left_title, right_title);
    switchContent();
  }
}

function switchTitle(direction, right_title, left_title) {
  right_title.style.cssText = main_title_default_css;
  var right_old_title = right_title.innerHTML;
  right_title.innerHTML = queue[CalculateProjectIndex(project_index)].title;

  let main_old_title = main_title.innerHTML;
  main_title.innerHTML = queue[CalculateProjectIndex(project_index)].title;

  let delta_mainTitle_rightTitle = deltaPosition(main_title, right_title);
  let deltaY_ = delta_mainTitle_rightTitle[1];
  let deltaX_ = delta_mainTitle_rightTitle[0];
  right_title.innerHTML = right_old_title;
  right_title.style.cssText = next_title_default_css;

  main_title.innerHTML = main_old_title;
  main_title.style.cssText = next_title_default_css;

  left_old_title = left_title.innerHTML;
  left_title.innerHTML =
    queue[CalculateProjectIndex(project_index - direction)].title;

  let delta_leftTitle_mainTitle = deltaPosition(left_title, main_title);
  let deltaX = delta_leftTitle_mainTitle[0];
  let deltaY = delta_leftTitle_mainTitle[1];

  left_title.innerHTML = left_old_title;
  left_title.style.cssText = next_title_default_css;
  main_title.style.cssText = main_title_default_css;

  right_title.innerHTML = queue[CalculateProjectIndex(project_index + 1)].title;
  var right_title_clone = right_title.cloneNode(true);

  right_title_clone.style.position = "absolute";
  right_title_clone.style.left =
    right_title.getBoundingClientRect().left + "px";
  right_title_clone.style.top = right_title.getBoundingClientRect().top + "px";
  document.body.appendChild(right_title_clone);
  var delta = deltaPosition(right_title_clone, right_title);
  right_title_clone.style.transform =
    "translate(" +
    (-delta[0] + vwToPx(4 * direction)) +
    "px," +
    -delta[1] +
    "px)";
  right_title_clone.innerHTML =
    queue[CalculateProjectIndex(project_index + direction)].title;
  right_title.innerHTML = queue[CalculateProjectIndex(project_index)].title;
  right_title_clone.style.fontSize = "80%";
  right_title_clone.style.opacity = "0";
  setTimeout(() => {
    right_title_clone.style.transition = "all 0.7s ease";
    right_title_clone.style.opacity = "1";
    right_title_clone.style.fontSize = "max(80%, 1.5vw)";
    var r_translate = getTranslateValues(right_title_clone);
    translateElementBy(right_title_clone, 0, r_translate.y, "px", "px");

    main_title.style.cssText = main_title_transition_css;
    translateElementBy(main_title, deltaX, deltaY, "px", "px");

    right_title.style.cssText = next_title_transition_css;
    right_title.style.pointerEvents = "none";
    translateElementBy(right_title, deltaX_, deltaY_, "px", "px");

    left_title.style.transition = "all 0.7s ease";
    left_title.style.color = "rgba(106, 106, 106,0)";
    translateElementBy(left_title, -4 * direction, 0, "vw", "vh");
    left_title.style.fontSize = "80%";

    setTimeout(function () {
      right_title_clone.remove();
      left_title.style.transition = "none";
      left_title.style.color = "rgba(106, 106, 106,1)";
      translateElementBy(left_title, 0, 0, "vw", "vh");
      left_title.style.fontSize = "max(80%, 1.5vw)";
      right_title.style.transition = "none";

      right_title.innerHTML =
        queue[CalculateProjectIndex(project_index + direction)].title;
      right_title.style.cssText = next_title_default_css;
      left_title.innerHTML =
        queue[CalculateProjectIndex(project_index - direction)].title;
      main_title.innerHTML = queue[CalculateProjectIndex(project_index)].title;
      main_title.style.cssText = main_title_default_css;
    }, 700);
  }, 1);
}

function deltaPosition(element1, element2) {
  let deltaX =
    element1.getBoundingClientRect().left -
    element2.getBoundingClientRect().left;
  let deltaY =
    element1.getBoundingClientRect().top - element2.getBoundingClientRect().top;
  return [deltaX, deltaY];
}
function pxToVw(px) {
  return (px * 100) / window.innerWidth;
}

function pxToVh(px) {
  return (px * 100) / window.innerHeight;
}

function vwToPx(vwValue) {
  var viewportWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  var pixels = (vwValue * viewportWidth) / 100;
  return pixels;
}

function translateElementBy(element, x, y, donvi1, donvi2) {
  element.style.transform =
    "translate(" + x + donvi1 + "," + y + donvi2 + "  )";
}

function duplicateElementAtSamePosition(element) {
  var copiedH2 = element.cloneNode(true);
  copiedH2.style.position = "absolute";
  document.body.appendChild(copiedH2);
  var deltaCopied = deltaPosition(element, copiedH2);
  translateElementBy(
    copiedH2,
    pxToVw(deltaCopied[0]),
    pxToVh(deltaCopied[1]),
    "vw",
    "vh"
  );
  return copiedH2;
}

function debugElementPosition(element) {
  var rect = element.getBoundingClientRect();

  var indicator = document.createElement("div");
  indicator.style.position = "absolute";
  indicator.style.top = rect.top + "px";
  indicator.style.left = rect.left + "px";
  indicator.style.width = rect.width + "px";
  indicator.style.height = rect.height + "px";
  indicator.style.border = "2px solid red";
  document.body.appendChild(indicator);

  setTimeout(function () {
    document.body.removeChild(indicator);
  }, 3000);
}

function getTranslateValues(element) {
  var style = window.getComputedStyle(element);
  var matrix = new WebKitCSSMatrix(style.transform);

  var translateX = matrix.m41;
  var translateY = matrix.m42;

  return {
    x: translateX,
    y: translateY,
  };
}

function switchContent() {
  main_content.classList.add("fade-effect");
  sub_title.classList.add("fade-effect");
  setTimeout(function () {
    left_content.innerHTML = queue[project_index].lefthtml;
    right_content.innerHTML = queue[project_index].righthtml;
    sub_title.innerHTML = queue[project_index].subtitle;
    setTimeout(function () {
      main_content.classList.remove("fade-effect");
      sub_title.classList.remove("fade-effect");
      isSwitching = false;
    }, 350);
  }, 350);
}

var isPaging = false;
document.querySelector(".home").style.cssText = `
background-color: rgba(106,106,106,0.12);
border-radius: 5px;
`;
function onHome(event) {
  if (isPaging == false && home.style.position != "static") {
    document.querySelector(".projectt").style.cssText =
      "background-color: rgba(106,106,106,0);";

    currentTag = event.target;
    currentTag.style.cssText = `pointer-events: none;
    background-color: rgba(106,106,106,0.12);
    border-radius: 5px;
    `;
    isPaging = true;
    project.classList.add("fade-out-effect");
    setTimeout(function () {
      project.style.position = "absolute";
      project.style.opacity = 0;
      project.classList.remove("fade-out-effect");
      project.style.pointerEvents = "none";

      home.classList.add("fade-in-effect");
      home.style.position = "static";
      setTimeout(function () {
        home.style.opacity = 1;
        home.classList.remove("fade-in-effect");
        home.style.pointerEvents = "auto";
        isPaging = false;
      }, 350);
    }, 350);
  }
}

function onLoad(event) {
  if (isPaging == false && project.style.position != "static") {
    document.querySelector(".home").style.cssText =
      "background-color: rgba(106,106,106,0);";

    currentTag = event.target;
    currentTag.style.cssText = `pointer-events: none;
    background-color: rgba(106,106,106,0.12);
    border-radius: 5px;
    `;
    isPaging = true;
    home.classList.add("fade-out-effect");
    setTimeout(function () {
      home.style.position = "absolute";
      home.style.opacity = 0;
      home.classList.remove("fade-out-effect");
      home.style.pointerEvents = "none";

      project.classList.add("fade-in-effect");
      project.style.position = "static";
      setTimeout(function () {
        project.style.opacity = 1;
        project.classList.remove("fade-in-effect");
        project.style.pointerEvents = "auto";
        isPaging = false;
      }, 350);
    }, 350);
  }
}
