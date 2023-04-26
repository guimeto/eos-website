function addRow(row, name, value) {
    let cell = row.insertCell().innerHTML = `${name} :`;
    row.insertCell().innerHTML = `<b>${value}</b>`;
}

function displayEcCurrentData(data) {
    let div = document.getElementById("ecCurrent");
    let table = document.createElement("TABLE");

    table.classList.add("col-lg-6");
    table.classList.add("col-md-12");

    addRow(table.insertRow(), "Condition", data.Condition);
    addRow(table.insertRow(), "Pressure", data.pressure);
    addRow(table.insertRow(), "Tendency", data.trend);
    addRow(table.insertRow(), "Temperature", data.temperature);
    div.appendChild(table);

    table = document.createElement("TABLE");

    table.classList.add("col-lg-6");
    table.classList.add("col-md-12");

    addRow(table.insertRow(), "Dew point", data.dew_point);
    addRow(table.insertRow(), "Humidity", data.humidity);
    addRow(table.insertRow(), "Wind", data.wind);
    addRow(table.insertRow(), "Visibility", `${data.visibility} km`);
    div.appendChild(table);


    // let today = new Date();
    // document.getElementById("date").innerHTML = `${today.getDay()}-${today.getMonth()}-${today.getFullYear()} ${data.Temps.split("-")[0]}:${data.Temps.split("-")[1]}`;

}

function getLastUpdateDate(value) {
    //let today = new Date();
    //return `${value.split("-")[0]}:${value.split("-")[1]} ${today.toLocaleDateString()}`
    return `${value} UTC -`
}

function displayStationCurrentDataS(data) {
    document.getElementById("lastUpdateTextS").innerHTML = `-last update: ${getLastUpdateDate(data.DATE)}`;
    let div = document.getElementById("stationCurrentS");
    let table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");
    addRow(table.insertRow(), "Temperature (2m)", `${data.temp} °C`);
    addRow(table.insertRow(), "Humidity (1m)", `${data.humidity} %`);

    div.appendChild(table);

    table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");
    addRow(table.insertRow(), "Hotplate temperature", `${data.hot_temp} °C`);
    addRow(table.insertRow(), "Hotplate wind speed", `${data.hot_wind} m/s`);
    addRow(table.insertRow(), "Anemometer wind speed", `${data.anem_wind} m/s`);
    addRow(table.insertRow(), "Anemometer wind direction", `${data.anem_dir} deg`);
    div.appendChild(table);

    table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");

    addRow(table.insertRow(), "Hotplate total accumulation", `${data.hot_precip} mm`);
    addRow(table.insertRow(), "Wind gust speed", `${data.gust} m/s`);
    addRow(table.insertRow(), "Wind gust direction", `${data.gust_dir} deg`);
    addRow(table.insertRow(), "WindDir_SD", `${data.SD} deg`);
    addRow(table.insertRow(), "Sea level pressure", `${data.pressure} mbar`);
    div.appendChild(table);
}

function displayStationCurrentData(data) {
    document.getElementById("lastUpdateText").innerHTML = `-1 minute database last update: ${getLastUpdateDate(data.DATE)}`;
    let div = document.getElementById("stationCurrent");
    let table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");
    addRow(table.insertRow(), `${data.name1}`  `${data.Var1} ${data.unit1}`);
    addRow(table.insertRow(), `${data.name2}`  `${data.Var2} ${data.unit2}`);
    addRow(table.insertRow(), `${data.name3}`  `${data.Var3} ${data.unit3}`);
    addRow(table.insertRow(), `${data.name4}`  `${data.Var4} ${data.unit4}`);
    addRow(table.insertRow(), `${data.name5}`  `${data.Var5} ${data.unit5}`);
    addRow(table.insertRow(), `${data.name6}`  `${data.Var6} ${data.unit6}`);
    addRow(table.insertRow(), `${data.name7}`  `${data.Var7} ${data.unit7}`);
    addRow(table.insertRow(), `${data.name8}`  `${data.Var8} ${data.unit8}`);
    addRow(table.insertRow(), `${data.name9}`  `${data.Var9} ${data.unit9}`);
    addRow(table.insertRow(), `${data.name10}`  `${data.Var10} ${data.unit10}`);
    addRow(table.insertRow(), `${data.name11}`  `${data.Var11} ${data.unit11}`);
    addRow(table.insertRow(), `${data.name12}`  `${data.Var12} ${data.unit12}`);
    addRow(table.insertRow(), `${data.name13}`  `${data.Var13} ${data.unit13}`);
    addRow(table.insertRow(), `${data.name14}`  `${data.Var14} ${data.unit14}`);
    addRow(table.insertRow(), `${data.name15}`  `${data.Var15} ${data.unit15}`);
    addRow(table.insertRow(), `${data.name16}`  `${data.Var16} ${data.unit16}`);
    
    div.appendChild(table);

    table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");
    addRow(table.insertRow(), `${data.name17}`  `${data.Var17} ${data.unit17}`);
    addRow(table.insertRow(), `${data.name18}`  `${data.Var18} ${data.unit18}`);
    addRow(table.insertRow(), `${data.name19}`  `${data.Var19} ${data.unit19}`);
    addRow(table.insertRow(), `${data.name20}`  `${data.Var20} ${data.unit20}`);
    addRow(table.insertRow(), `${data.name21}`  `${data.Var21} ${data.unit21}`);
    addRow(table.insertRow(), `${data.name22}`  `${data.Var22} ${data.unit22}`);
    addRow(table.insertRow(), `${data.name23}`  `${data.Var23} ${data.unit23}`);
    addRow(table.insertRow(), `${data.name24}`  `${data.Var24} ${data.unit24}`);
    addRow(table.insertRow(), `${data.name25}`  `${data.Var25} ${data.unit25}`);
    addRow(table.insertRow(), `${data.name26}`  `${data.Var26} ${data.unit26}`);
    addRow(table.insertRow(), `${data.name27}`  `${data.Var27} ${data.unit27}`);
    addRow(table.insertRow(), `${data.name28}`  `${data.Var28} ${data.unit28}`);
    addRow(table.insertRow(), `${data.name29}`  `${data.Var29} ${data.unit29}`);
    addRow(table.insertRow(), `${data.name30}`  `${data.Var30} ${data.unit30}`);
    addRow(table.insertRow(), `${data.name31}`  `${data.Var31} ${data.unit31}`);
    addRow(table.insertRow(), `${data.name32}`  `${data.Var32} ${data.unit32}`);
    
    div.appendChild(table);

    table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");

    addRow(table.insertRow(), `${data.name33}`  `${data.Var33} ${data.unit33}`);
    addRow(table.insertRow(), `${data.name34}`  `${data.Var34} ${data.unit34}`);
    addRow(table.insertRow(), `${data.name35}`  `${data.Var35} ${data.unit35}`);
    addRow(table.insertRow(), `${data.name36}`  `${data.Var36} ${data.unit36}`);
    addRow(table.insertRow(), `${data.name37}`  `${data.Var37} ${data.unit37}`);
    addRow(table.insertRow(), `${data.name38}`  `${data.Var38} ${data.unit38}`);
    addRow(table.insertRow(), `${data.name39}`  `${data.Var39} ${data.unit39}`);
    addRow(table.insertRow(), `${data.name40}`  `${data.Var40} ${data.unit40}`);
    addRow(table.insertRow(), `${data.name41}`  `${data.Var41} ${data.unit41}`);
    addRow(table.insertRow(), `${data.name42}`  `${data.Var42} ${data.unit42}`);
    addRow(table.insertRow(), `${data.name43}`  `${data.Var43} ${data.unit43}`);
    addRow(table.insertRow(), `${data.name44}`  `${data.Var44} ${data.unit44}`);
    addRow(table.insertRow(), `${data.name45}`  `${data.Var45} ${data.unit45}`);
    addRow(table.insertRow(), `${data.name46}`  `${data.Var46} ${data.unit46}`);
    addRow(table.insertRow(), `${data.name47}`  `${data.Var47} ${data.unit47}`);
    addRow(table.insertRow(), `${data.name48}`  `${data.Var48} ${data.unit48}`);
    div.appendChild(table);


}
function displayStationFluxData(data) {
    document.getElementById("lastUpdateFlux").innerHTML = `- 30 minutes database last update: ${getLastUpdateDate(data.DATE)}`;
    let div = document.getElementById("stationFlux");
    let table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");
    addRow(table.insertRow(), "Short Wave In", `${data.SW_IN} W/m2`);
    addRow(table.insertRow(), "Short Wave Out", `${data.SW_OUT} W/m2`);
    addRow(table.insertRow(), "Long Wave In", `${data.LW_IN} W/m2`);
    addRow(table.insertRow(), "Long Wave Out", `${data.LW_OUT} W/m2`);
    addRow(table.insertRow(), "Sonic wind speed", `${data.WS} m/s`);
    addRow(table.insertRow(), "Sonic wind direction", `${data.WD} deg`);
    addRow(table.insertRow(), "TS_1_1_1", `${data.TS_1_1_1} °C`);
    div.appendChild(table);

    table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");
    addRow(table.insertRow(), "Soil temperature", `${data.TS_2_1_1} °C`);
    addRow(table.insertRow(), "Soil water content", `${data.SWC_1_1_1} %`);
    addRow(table.insertRow(), "Pressure", `${data.PA} kPa`);
    addRow(table.insertRow(), "Net radiation", `${data.NETRAD} W/m2`);
    addRow(table.insertRow(), "Albedo ", `${data.ALB} %`);
    addRow(table.insertRow(), "CO2 Flux (Irgason)", `${data.FC} umolCO2/m2.s`);
    addRow(table.insertRow(), "Ground heat flux (G)", `${data.G} W/m2`);
    div.appendChild(table);

    table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");
    addRow(table.insertRow(), "Soil heat storage flux", `${data.SG} W/m2`);
    addRow(table.insertRow(), "Evapotranspiration", `${data.ET} mm/hr`);
    addRow(table.insertRow(), "Latent heat flux", `${data.LE} W/m2`);
    addRow(table.insertRow(), "Sensible heat flux", `${data.H} W/m2`);
    addRow(table.insertRow(), "Max flux fetch distance", `${data.FETCH_MAX} m`);
    div.appendChild(table);


}
function displayStationSWEData(data) {
    document.getElementById("lastUpdateSWE").innerHTML = `- 6 hours database last update: ${getLastUpdateDate(data.DATE)}`;
    let div = document.getElementById("stationSwe");
    let table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");
    addRow(table.insertRow(), "Snow water equivalent (K)", `${data.CS725_SWE_K} mm`);
    addRow(table.insertRow(), "Snow water equivalent  (TI)", `${data.CS725_SWE_TL} mm`);
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
                    <img src="${media_url}data/${dir_name}/${index + 1}.gif" class="mr-3" alt="icone prevision">
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

Papa.parse(`${media_url}data/${dir_name}/station_last_Metdata_new.csv`, {
    download: true,
    header: true,
    complete: (result) => displayStationCurrentData(result.data[0])
});

Papa.parse(`${media_url}data/${dir_name}/station_last_MetdataSmall_new.csv`, {
    download: true,
    header: true,
    complete: (result) => displayStationCurrentDataS(result.data[0])
});

Papa.parse(`${media_url}data/${dir_name}/forecast.csv`, {
    download: true,
    header: true,
    complete: (result) => displayForecast(result.data)
});

Papa.parse(`${media_url}data/${dir_name}/station_last_flux_data.csv`, {
    download: true,
    header: true,
    complete: (result) => displayStationFluxData(result.data[0])
});
Papa.parse(`${media_url}data/${dir_name}/station_last_swe.csv`, {
    download: true,
    header: true,
    complete: (result) => displayStationSWEData(result.data[0])
});
