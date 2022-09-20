const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const brushwidth = document.querySelector("#brushwhidth");
const eraser = document.querySelector("#eraser");
const brush = document.querySelector("#brush");
const coler = document.querySelector("#coler");
const colerbrush = document.querySelector("#colerpider");
const clear = document.querySelector("#clear");
const save = document.querySelector("#save");

var isdrowing = false;
var setcoler = "";
var currenwidth = 5;
window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  ctx.fillStyle = " aliceblue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});
function enddrow() {
  isdrowing = false;
}
function startdrowing() {
  isdrowing = true;
  ctx.beginPath();
  ctx.lineWidth = currenwidth;
}
function drowing(e) {
  if (!isdrowing) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = `${setcoler}`;
  ctx.stroke();
}
canvas.addEventListener("mousemove", drowing);
canvas.addEventListener("mousedown", startdrowing);
canvas.addEventListener("mouseup", enddrow);
brushwidth.addEventListener("change", () => {
  currenwidth = brushwidth.value;
});
eraser.addEventListener("click", () => {
  eraser.classList.add("active");
  brush.classList.remove("active");
  coler.classList.remove("active");
  setcoler = "aliceblue";
});
brush.addEventListener("click", () => {
  brush.classList.add("active");
  eraser.classList.remove("active");
  coler.classList.remove("active");
  setcoler = colerbrush.value;
});
coler.addEventListener("click", () => {
  coler.classList.add("active");
  eraser.classList.remove("active");
  brush.classList.remove("active");
});
colerbrush.addEventListener("change", () => {
  setcoler = colerbrush.value;
});
clear.addEventListener("click", () => {
  ctx.fillStyle = "aliceblue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});
save.addEventListener("click", () => {
  var link = document.createElement("a");
  link.download = `${Date.now()}.jpg`;
  link.href = canvas.toDataURL();
  link.click();
});
