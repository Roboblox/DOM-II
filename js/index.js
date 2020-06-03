// Your code goes here

// mouseOver purple
const h1MouseOver = document.querySelector(".logo-heading");
h1MouseOver.addEventListener("mouseenter", function (event) {
  event.target.style.color = "red";
});
// hide footer p
const p = document.querySelector("footer p");
function hide(e) {
  console.log("footer p gone!");
  e.target.style.visibility = "hidden";
}
p.addEventListener("click", hide, false);
// h1MouseOver.removeEventListener("mouseenter", false);
// mouseOver container
const containerMouseOver = document.querySelector(".container");
containerMouseOver.addEventListener("mouseenter", function (event) {
  event.target.style.backgroundColor = "purple";
});
// keydown container
const log = document.querySelector(".container");
document.addEventListener("keydown", logKey);

function logKey(e) {
  log.textContent = "Wow your a hacker now!";
}

// double click text-content
let text = document.querySelector(".intro");

document.ondblclick = logDoubleClick;

function logDoubleClick(e) {
  text.textContent = "Hey You Changed The Text! Stop That!";
}
// doule click green
let images = document.querySelector(".img-content");
function logDoubleClick(event) {
  console.log("welcome");
  event.target.style.backgroundColor = "green";
}
// button click
const button = document.querySelector(".btn");

button.addEventListener("click", (event) => {
  console.log("hello");
  event.stopPropagation();
});

// Load window Joshua

const load = () => {
  alert("How about a nice game of chess?");
};
window.onload = load;

// // loadend
// let image = document.querySelector(".destination");
// image.addEventListener("loadstart", function (e) {
//   alert("Image load finished");
// });
// const loadEnd = () => {
//   alert("Hey?");
// };
// window.onloadend = loadEnd;

//disrupt propagation

// let handlerFunction = div.onmouseenter;
// function handlerFunction() {
//   text.textContent = "Hey You Changed The Text! Stop That!";
// }
// Array.from(document.all).forEach((element) => {
//   element.addEventListener("click", (event) => {
//     console.log("🎯 target        ", event.target);
//     console.log("🧭 current target", event.currentTarget);
//     console.log("\n");
//   });
// });
//click intro
const h2 = document.querySelector(".intro h2");
const intro = document.querySelector(".intro");
intro.addEventListener("click", (event) => {
  console.log("🎯 target        ", event.target);
  console.log("🧭 current target", event.currentTarget);
});

h2.addEventListener("click", (event) => {
  console.log("🎯 target        ", event.target);
  console.log("🧭 current target", event.currentTarget);
  console.log("Stop Bubbling");
  event.stopPropagation();
});
const links = document.querySelector("a");
links.addEventListener("click", (event) => {
  console.log("Stop Navigation");

  event.preventDefault();
});
