function resetPage() {
	location.reload();
}

function changeDiv() {
    var color = document.getElementById('inputColor').value;
    var inputHeight = document.getElementById('inputHeight').value;
    var height = parseFloat(inputHeight);
    var inputWidth = document.getElementById('inputWidth').value;
    var width = parseFloat(inputWidth);
    var inputRadius = document.getElementById('inputRadius').value;
    var radius = parseFloat(inputRadius);
    var font = document.getElementById('inputFont').value;
    var inputFontSize = document.getElementById('inputFontSize').value;
    var fontSize = parseFloat(inputFontSize);

    document.getElementById('customBox').style.backgroundColor = color;
    document.getElementById('customBox').style.height = height + "px";
    document.getElementById('customBox').style.width = width + "px";
    document.getElementById('customBox').style.borderRadius = radius + "px";
    document.getElementById('customBox').style.fontFamily = font;
    document.getElementById('customBox').style.textAlign = "center";
    document.getElementById('customBox').style.fontSize = fontSize + "px";
    document.getElementById('customBox').style.padding = "10px";
}




  