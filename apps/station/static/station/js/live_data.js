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
    addRow(table.insertRow(), "Temperature (2m)", `${data.Temp3_Avg} °C`);
    addRow(table.insertRow(), "Humidity (1m)", `${data.RH1} %`);

    div.appendChild(table);

    table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");
    addRow(table.insertRow(), "Hotplate temperature", `${data.Ambient_Temp} °C`);
    addRow(table.insertRow(), "Hotplate wind speed", `${data.Wind_Speed} m/s`);
    addRow(table.insertRow(), "Anemometer wind speed", `${data.WS_ms} m/s`);
    addRow(table.insertRow(), "Anemometer wind direction", `${data.Mean_WindDir} deg`);
    div.appendChild(table);

    table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");

    addRow(table.insertRow(), "Hotplate total accumulation", `${data.Precip_Accum_24_Hours} mm`);
    addRow(table.insertRow(), "Wind gust speed", `${data.WS_ms_Max} m/s`);
    addRow(table.insertRow(), "Wind gust direction", `${data.WindDir_Max} deg`);
    addRow(table.insertRow(), "WindDir_SD", `${data.WindDir_SD} deg`);
    addRow(table.insertRow(), "Sea level pressure", `${data.IRGASON_PA} mbar`);
    div.appendChild(table);
}

function displayStationCurrentData(data) {
    document.getElementById("lastUpdateText").innerHTML = `-1 minute database last update: ${getLastUpdateDate(data.DATE)}`;
    let div = document.getElementById("stationCurrent");
    let table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");
    addRow(table.insertRow(), `Temperature (${data.elev1})`,  `${data.Temp1_Avg} °C`);
    addRow(table.insertRow(), `Temperature (${data.elev2})`, `${data.Temp2_Avg} °C`);
    addRow(table.insertRow(), `Temperature (${data.elev3})`, `${data.Temp3_Avg} °C`);
    addRow(table.insertRow(), `Temperature (${data.elev4})`, `${data.Temp4_Avg} °C`);
    addRow(table.insertRow(), `Temperature (${data.elev5})`, `${data.Temp5_Avg} °C`);
    addRow(table.insertRow(), `Temperature (${data.elev6})`, `${data.Temp6_Avg} °C`);
    addRow(table.insertRow(), `Temperature (${data.elev7})`, `${data.Temp7_Avg} °C`);
    addRow(table.insertRow(), `Temperature (${data.elev8})`, `${data.Temp8_Avg} °C`);
    addRow(table.insertRow(), `Relative humidity (${data.helev1})`, `${data.RH1} %`);
    addRow(table.insertRow(), `Relative humidity (${data.helev2})`, `${data.RH2} %`);
    addRow(table.insertRow(), `Relative humidity (${data.helev3})`, `${data.RH3} %`);
    addRow(table.insertRow(), `Relative humidity (${data.helev4})`, `${data.RH4} %`);
    addRow(table.insertRow(), `Relative humidity (${data.helev5})`, `${data.RH5} %`);
    addRow(table.insertRow(), `Relative humidity (${data.helev6})`, `${data.RH6} %`);
    addRow(table.insertRow(), `Relative humidity (${data.helev7})`, `${data.RH7} %`);
    addRow(table.insertRow(), `Relative humidity (${data.helev8})`, `${data.RH8} %`);
    div.appendChild(table);

    table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");
    addRow(table.insertRow(), "Hotplate temperature", `${data.Ambient_Temp} °C`);
    addRow(table.insertRow(), "Hotplate wind speed", `${data.Wind_Speed} m/s`);
    addRow(table.insertRow(), "Anemometer wind speed", `${data.WS_ms} m/s`);
    addRow(table.insertRow(), "Anemometer wind direction", `${data.Mean_WindDir} deg`);
    addRow(table.insertRow(), "SDMS40 Snow Depth", `${data.SDMS40_Depth_Avg} mm`);
    // addRow(table.insertRow(), "SR50A  Snow Depth", `${data.SR50A_SnowDepth} m`);
    // addRow(table.insertRow(), "SR50A quality", `${data.SR50A_QualityVal} nb`);
    addRow(table.insertRow(), `${data.SR50A_S1}`, `${data.SR50A_SnowDepth}` `${data.unit1}`);
    addRow(table.insertRow(), `${data.SR50A_S2}`, `${data.SR50A_QualityVal}` `${data.unit2}`);
    
    addRow(table.insertRow(), "Ice accumulation (LF1)", `${data.LF1_Ice_Output} nb`);
    addRow(table.insertRow(), "Ice accumulation (LF1)", `${data.Ice_mm} mm`);
    addRow(table.insertRow(), "Ice accumulation (LF1)", `${data.Ice_Inch} inches`);
    addRow(table.insertRow(), "Leaflet Dry", `${data.LWMDry_Tot} min`);
    addRow(table.insertRow(), "Leaflet Wet", `${data.LWMWet_Tot} min`);
    addRow(table.insertRow(), "Leaflet Contaminated", `${data.LWMCon_Tot} min`);
    // addRow(table.insertRow(), "Visibility (CS120A)", `${data.Visibilitystr}`);
    addRow(table.insertRow(),`${data.Visi1}` , `${data.Visibilitystr}`);
    
    div.appendChild(table);

    table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");

    // addRow(table.insertRow(), "Hotplate precipitation 1minAvg", `${data.TPS_Raw_Precip_Rate_1minAvg_mmHr} mm/h`);
    // addRow(table.insertRow(), "Hotplate precipitation 5minAvg", `${data.TPS_Raw_Precip_Rate_5minAvg_mmHr} mm/h`);
    addRow(table.insertRow(), "Hotplate 24h total accumulation", `${data.Precip_Accum_24_Hours} mm`);
    addRow(table.insertRow(), "Hotplate power sensor", `${data.Sensor_Plate_Power} W`);
    addRow(table.insertRow(), "Hotplate power reference", `${data.Sensor_Ref_Plate_Power} W`);
    addRow(table.insertRow(), "Wind gust maximum speed", `${data.WS_ms_Max} m/s`);
    addRow(table.insertRow(), "Wind gust maximum direction", `${data.WindDir_Max} deg`);
    addRow(table.insertRow(), "Wind gust standard deviation", `${data.WindDir_SD} deg`);
    addRow(table.insertRow(), "IRGASON corrected pressure", `${data.IRGASON_PA} mbar`);
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

Papa.parse(`${media_url}data/${dir_name}/station_last_Metdata.csv`, {
    download: true,
    header: true,
    complete: (result) => displayStationCurrentData(result.data[0])
});

Papa.parse(`${media_url}data/${dir_name}/station_last_MetdataSmall.csv`, {
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
