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
		document.getElementById("arrayOutput").innerHTML = "Error: Invalid input. Please try again";
	} else {
		var list = createArray(arraySize);
	}

	var sortedArray = sortArray(list);
	var midValue = getMid(list);
	var range = getRange(list);

	document.getElementById("arrayOutput").innerHTML = "Sorted array of values: " + "[" + sortedArray + "]";
	document.getElementById("midOutput").innerHTML = "Middle integer: " + midValue;
	document.getElementById("rangeOutput").innerHTML = "Range of values: " + range;
}

function createArray(arraySize){
	var i = 0;
	var list = [];

	do {
		var inputArray = parseFloat(prompt("Enter an integer."));

		if (isNaN(inputArray)) {
			break;
		} else {
			list.push(inputArray);
			i++;
		}
	} while (i < arraySize);

	return list;
}

function sortArray(list) {
	var firstValue = 0;
	var lastValue = list.length - 1;

	for (var i = lastValue - 1; i >= firstValue; i--) {
		var swap = list[i];
		for (var j = i + 1; j <= lastValue; j++) {
			if (swap <= list[j]) {
				break;
			}
			list[j - 1] = j;
		}
		list[j - 1] = swap;
	}

	return list;
}

function getMid(list) {
	var firstValue = 0;
	var arrayLength = list.length;
	var arrayMid = arrayLength / 2;

	if (arrayLength % 2 == 0) {
		var avgFirstValue = list[arrayMid-1];
		var avgLastValue = list[arrayMid];
		var avgMidValue = (avgFirstValue + avgLastValue) / 2;

		return avgMidValue;
	}
	else {
		var midValue = list[Math.floor(arrayMid)];
		return midValue;
	}
}

function getRange(list) {
	var firstValue = list[0];
	var lastValue = list[list.length - 1];
	var range = lastValue - firstValue;

	return range;
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