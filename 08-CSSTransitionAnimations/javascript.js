function resetPage() {
	location.reload();
}

//Transitions
function changeColor(element, color) {
    var elem = document.getElementById(element);
    elem.style.transition = "background 2s linear 0s";
    elem.style.background = color;
}

function slideUp(element) {
    var elem = document.getElementById(element);
    elem.style.transition = "height 1s ease-out";
    elem.style.height = "20px";
}

function slideDown(element) {
    var elem = document.getElementById(element);
    elem.style.transition = "height 1s ease-in";
    elem.style.height = "200px";
}

//Animations

function animation1(element) {
    var elem = document.getElementById(element);
    elem.style.animation = "animation1 2s both";
}

function animation2(element) {
    var elem = document.getElementById(element);
    elem.style.animation = "animation2 2s both";
}
    