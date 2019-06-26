function resetPage() {
	location.reload();
}
window.onload = function loadColor() {
    var elem = document.getElementById('load');
    elem.style.animation = "loadFrame 6s infinite";
}
window.onkeypress = function keyAnimation() {
    var elem = document.getElementById('key');
    elem.style.animation = "keyPressed 11s linear 0s";
}
function mouseTransition() {
    var elem = document.getElementById('mouse');
    elem.style.transition = "background 2.0s linear 0s";
    elem.style.background = "teal";
}
function mouseAnimation() {
    var elem = document.getElementById('mouse');
    elem.style.animation = "mouseFrame 4s both";
}
function clickColor() {
    var elem = document.getElementById('click');
    var values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    var randomC = '#';
    
    for (var i = 0; i < 6; i++) {
        randomC += values[Math.floor(Math.random() * 16)];
    }    
    elem.style.transition = "background 1.0s linear 0s";
    elem.style.background = randomC;
}