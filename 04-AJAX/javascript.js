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
            var forecast = "";
            for (i = 0; i < weatherData.periods.length; i++) {
                forecast += "<b>" + weatherData.periods[i].name + ":</b> " + weatherData.periods[i].detailedForecast + "<br><br>";
            }
            document.getElementById("forecast").innerHTML = "<b> Data last updated on </b>" + weatherData.updated + " from Weather.gov <br><br>" + forecast;
        } else {
            document.getElementById("forecast").innerHTML = "Forecast Failed To Load.  Please try again.";
        }
    }
}