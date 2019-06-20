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
    var fontStyle = document.getElementById('inputFontStyle').value;
    var inputFontSize = document.getElementById('inputFontSize').value;
    var fontSize = parseFloat(inputFontSize);
    //set properties selected by user
    document.getElementById('customBox').style.backgroundColor = color;
    document.getElementById('customBox').style.height = height + "px";
    document.getElementById('customBox').style.width = width + "px";
    document.getElementById('customBox').style.borderRadius = radius + "px";
    document.getElementById('customBox').style.fontFamily = font;    
    document.getElementById('customBox').style.fontSize = fontSize + "px";
    if (fontStyle !== "bold"){
        document.getElementById('customBox').style.fontStyle = fontStyle;
        document.getElementById('customBox').style.fontWeight = "normal";        
        }
        else {
            document.getElementById('customBox').style.fontWeight = fontStyle;
            document.getElementById('customBox').style.fontStyle = "normal";
        }
    
    //Extra properties not selected by user
    document.getElementById('customBox').style.textAlign = "center";
    document.getElementById('customBox').style.padding = "10px";
    
}



function localStorageCount() {
	if (typeof(Storage) !== "undefined") {
		if (localStorage.clickcount) {
			localStorage.clickcount = Number(localStorage.clickcount) + 1;
		} else {
			localStorage.clickcount = 1;
		}

		document.getElementById("localResult").innerHTML = "Local Storage Count: " + localStorage.clickcount + " click(s)";
	} else {
		document.getElementById("localResult").innerHTML = "Error: Your browser does not support local storage.";
	}
}
  