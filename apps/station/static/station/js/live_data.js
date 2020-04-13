function addRow(row, name, value) {
    let cell = row.insertCell().innerHTML = `${name} :`;
    row.insertCell().innerHTML = `<b>${value}</b>`;
}

function displayEcCurrentData(data) {
    let div = document.getElementById("ecCurrent");
    let table = document.createElement("TABLE");

    table.classList.add("col-lg-6");
    table.classList.add("col-md-12");

    addRow(table.insertRow(), "Condition", data.short_desc);
    addRow(table.insertRow(), "Pression", data.pression);
    addRow(table.insertRow(), "Tendance", data.Tendance);
    addRow(table.insertRow(), "Température", data.temperature);
    div.appendChild(table);

    table = document.createElement("TABLE");

    table.classList.add("col-lg-6");
    table.classList.add("col-md-12");

    addRow(table.insertRow(), "Point de rosée", data.temperature_rosee);
    addRow(table.insertRow(), "Humidité", data.humidite);
    addRow(table.insertRow(), "Vent", data.vent);
    addRow(table.insertRow(), "Visibilité", data.visibilite);
    div.appendChild(table);


    // let today = new Date();
    // document.getElementById("date").innerHTML = `${today.getDay()}-${today.getMonth()}-${today.getFullYear()} ${data.Temps.split("-")[0]}:${data.Temps.split("-")[1]}`;

}

function getLastUpdateDate(value) {
    let today = new Date();
    return `${value.split("-")[0]}:${value.split("-")[1]} ${today.toLocaleDateString()}`
}

function displayStationCurrentData(data) {
    document.getElementById("lastUpdateText").innerHTML = `Dernière mise-à-jour: ${getLastUpdateDate(data.Temps)}`;
    let div = document.getElementById("stationCurrent");
    let table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");
    addRow(table.insertRow(), "Température", `${data.temperature}°C`);
    addRow(table.insertRow(), "Température ressentie", `${data.chill}°C`);
    addRow(table.insertRow(), "Pression", `${data["pressure station"]} hPa`);
    addRow(table.insertRow(), "Humidité", `${data.humidite}%`);
    div.appendChild(table);

    table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");
    addRow(table.insertRow(), "Point de rosée", `${data["dew point"]}°C`);
    addRow(table.insertRow(), "Vitesse du vent", `${data.mod_wind} km/h`);
    addRow(table.insertRow(), "Direction du vent", `${data.dir_wind}°`);
    addRow(table.insertRow(), "Précipitation", `${data.precip1} mm`);
    div.appendChild(table);

    table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");
    addRow(table.insertRow(), "Précipitation (3 jours)", `${data.precip2} mm`);
    addRow(table.insertRow(), "Précipation (7 jours)", `${data.precip3} mm`);
    div.appendChild(table);


}

function formatDayString(value) {
    let weekDay = value.substr(0, 3);
    let day = value.substr(3).split(" ")[0];
    let month = value.substr(3).split(" ")[1];
    month = month.charAt(0).toUpperCase() + month.slice(1);
    return `${weekDay} ${day} ${month}`;
}

function displayForecast(data) {
    let forecast = document.getElementById("forecast");
    data.map((day, index) => {
        forecast.innerHTML += `<div class="col-md-4 col-sm-12 border container-forecast">
                <h5 class="text-center">${formatDayString(day.Period)}</h5>
                <div class="media">
                    <img src="${media_url}images/${index + 1}.gif" class="mr-3" alt="icone prevision">
                    <div class="media-body">
                        <p>${day.conditions_f}</p>
                        <p class="font-weight-bold mt-auto p-temperature">${day.temperature_f}</p>
                    </div>
                </div>
            </div>`
    })
}

Papa.parse(`${media_url}data/${dir_name}/current.csv`, {
    download: true,
    header: true,
    complete: (result) => displayEcCurrentData(result.data[0])
});

Papa.parse(`${media_url}data/${dir_name}/station_last_data.csv`, {
    download: true,
    header: true,
    complete: (result) => displayStationCurrentData(result.data[0])
});

Papa.parse(`${media_url}data/${dir_name}/forecast.csv`, {
    download: true,
    header: true,
    complete: (result) => displayForecast(result.data)
});