var start;
var stopId;
var progress;
var toggle = false;

var element = document.getElementById("element")

element.setAttribute("style", "background: transparent; position: absolute; width: 150px; height: 150px; top: 50px;");
var img = document.createElement("img")
img.src="./image/horse_tr.png"
img.width="150"
img.style.backgroundColor="transparent"
element.appendChild(img)

function step(timestamp) {
if (!start || progress > window.screen.width-200) start = timestamp;
progress = ((timestamp - start) / 10 + 50);
element.style.left = progress + 'px';
stopId = window.requestAnimationFrame(step);
}

function toggleAnimation() {
if (!toggle) {
    toggle = true;
    window.requestAnimationFrame(step);
} else {
    toggle = false;
    cancelAnimationFrame(stopId);
}
}