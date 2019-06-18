function resetPage() {
	location.reload();
}

function getForecast() {
    var req = new XMLHttpRequest();
    req.onreadystatechange = detailedForecast;
    req.open("GET", "https://api.weather.gov/zones/forecast/TXZ227/forecast", true);
    req.send();
}

function detailedForecast() {
    if (this.readyState == 4) {
        if (this.status === 200) {
            var weatherData = JSON.parse(this.responseText);
            var weatherForecast = "";
            for (i = 0; i < weatherData.periods.length; i++) {
                weatherForecast += "<b>" + weatherData.periods[i].name + ":</b> " + weatherData.periods[i].detailedForecast + "<br><br>";
            }
            document.getElementById("forecast").innerHTML = "<b> Data last updated: </b>" + weatherData.updated + " <br><br>" + weatherForecast;
        } else {
            document.getElementById("forecast").innerHTML = "Forecast Failed To Load.  Please try again.";
        }
    }
}