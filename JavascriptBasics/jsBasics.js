// File: jsBasics.js

function resetPage() {
	location.reload();
}

/////////////////////Loops / Conditional Statements / Functions / Variables////////////////////////////////////////////////////////////

function getMultiples() {
	var printValue = "";
    var inputNumber = parseInt(document.getElementById("numInput").value);
    var inputNumber2 = parseInt(document.getElementById("numInput2").value);
	var outputSum = 0;

	if (inputNumber == 0) {
		printValue = "Please enter a number other than 0";
	}
	else if (inputNumber >= 1000) {
		printValue = "Please enter a number less than 1000";
	}
	else if (inputNumber <= -1000) {
		printValue = "Please enter a number greater than -1000";
    }
    else if (inputNumber2 <= 0) {
		printValue = "Please enter a number greater than 0";
	}
	else if (inputNumber2 >= 1000) {
		printValue = "Please enter a number less than 1000";
	}
	else {
		for (var i = 1; i <= inputNumber2; i++) {
			outputSum = i * inputNumber;
			printValue += inputNumber + " x " + i + " = " + outputSum + "<br>";
		}
	}
	document.getElementById("numOutput").innerHTML = printValue;
}

//////////////////Parameters / Arrays///////////////////////////////////////////////////////////////
function getArray() {
	var arraySize = parseInt(prompt("How many numbers would you like in the array?"));

	if (isNaN(arraySize)) {
		document.getElementById("arrayOutput").innerHTML = "Error: Invalid input.";
	} else {
		var list = createArray(arraySize);
	}

	document.getElementById("arrayOutput").innerHTML = "Values entered into the array: " + "[" + list + "]";

}

function createArray(arraySize){
	var i = 0;
	var list = [];
	do {
		var inputArray = parseFloat(prompt("Please enter an integer."));
		if (isNaN(inputArray)) {
			break;
		} else {
			list.push(inputArray);
			i++;
		}
	} while (i < arraySize);
	return list;
}
/////////////////Associative Arrays////////////////////////////////////////////////////////////////
function getFavorites() {
	var birthCity = document.getElementById("birthCity").value;
	var homeTown = document.getElementById("homeTown").value;
	var currentCity = document.getElementById("currentCity").value;
	var favCity = document.getElementById("favCity").value;
	var favCountry = document.getElementById("favCountry").value;

	var associativeArray = {"birthCity": birthCity, "homeTown": homeTown, "currentCity": currentCity, 
		"favCity": favCity, "favCountry": favCountry};

	document.getElementById("associativeArray").innerHTML = "<br>Your Favorite Places: <br>{Birth Place: " + associativeArray["birthCity"]
		+ ", Home Town: " + associativeArray["homeTown"] + ", Current City: " + associativeArray["currentCity"] + ", Favority City: " 
		+ associativeArray["favCity"] + ", Favorite Country: " + associativeArray["favCountry"] + "}";
}