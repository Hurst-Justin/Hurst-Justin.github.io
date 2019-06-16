function resetPage() {
	location.reload();
}

function getFile1() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "data1.json", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			var response = JSON.parse(xhr.responseText);
			var jsonDisplay = "";

			for (var i = 0; i < response.length; i++) {
				jsonDisplay += "<p>ID: " + response[i].id + "<br>First Name: " + response[i].first_name + "<br>Last Name: " + response[i].last_name 
					+ "<br>Gender: " + response[i].gender + "<br>Favorite Color: " + response[i].fav_color + "<br>Birth Year: " + response[i].birthYear
					+ "<br>Movie 1: " + response[i].movie1 + "<br>Movie 2: " + response[i].movie2 + "<br>Movie 3: " + response[i].movie3  
					+ "<br>Movie 4: " + response[i].movie4 + "<br>Movie 5: " + response[i].movie5 ;
			}
			document.getElementById("jsonOutput1").innerHTML = jsonDisplay;

			var jsonString = JSON.stringify(response, null, 4);

			document.getElementById("jsonStringOutput1").innerHTML = "<hr><p><b>JSON to a String</b></p><pre>" + jsonString + "</pre>";
		}
	}
	xhr.send();
}

function getFile2() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "data2.json", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			var response = JSON.parse(xhr.responseText);
			var jsonDisplay = "";

			for (var i = 0; i < response.length; i++) {
				jsonDisplay += "<p>ID: " + response[i].id + "<br>First Name: " + response[i].first_name + "<br>Last Name: " + response[i].last_name 
					+ "<br>Gender: " + response[i].gender + "<br>Favorite Color: " + response[i].fav_color + "<br>Birth Year: " + response[i].birthYear
					+ "<br>Movie 1: " + response[i].movie1 + "<br>Movie 2: " + response[i].movie2 + "<br>Movie 3: " + response[i].movie3  
					+ "<br>Movie 4: " + response[i].movie4 + "<br>Movie 5: " + response[i].movie5 ;
			}
			document.getElementById("jsonOutput2").innerHTML = jsonDisplay;

			var jsonString = JSON.stringify(response, null, 4);

			document.getElementById("jsonStringOutput2").innerHTML = "<hr><p><b>JSON to a String</b></p><pre>" + jsonString + "</pre>";
		}
	}
	xhr.send();
}