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
    addRow(table.insertRow(), "Temp1", `${data.Temp1_Avg} °C`);
    addRow(table.insertRow(), "RH1", `${data.RH1} %`);

    div.appendChild(table);

    table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");
    addRow(table.insertRow(), "TPS_Air_Temp", `${data.TPS_Air_Temp_C} °C`);
    addRow(table.insertRow(), "TPS_Wind_Spd_ms", `${data.TPS_Wind_Spd_ms} m.s-1`);
    addRow(table.insertRow(), "WS_ms", `${data.WS_ms} m.s-1`);
    addRow(table.insertRow(), "Mean_WindDir", `${data.Mean_WindDir} deg`);
    div.appendChild(table);

    table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");

    addRow(table.insertRow(), "TPS_Total_Accum_mm", `${data.TPS_Total_Accum_mm}`);
    addRow(table.insertRow(), "WS_ms_Max", `${data.WS_ms_Max} m.s-1`);
    addRow(table.insertRow(), "WindDir_Max", `${data.WindDir_Max} deg`);
    addRow(table.insertRow(), "WindDir_SD", `${data.WindDir_SD}`);
    addRow(table.insertRow(), "TPS_Baro_Press", `${data.TPS_Baro_Press_mbar_Corrected} mbar`);
    div.appendChild(table);
}

function displayStationCurrentData(data) {
    document.getElementById("lastUpdateText").innerHTML = `-1 minute database last update: ${getLastUpdateDate(data.DATE)}`;
    let div = document.getElementById("stationCurrent");
    let table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");
    addRow(table.insertRow(), "Temp1", `${data.Temp1_Avg} °C`);
    addRow(table.insertRow(), "Temp2", `${data.Temp2_Avg} °C`);
    addRow(table.insertRow(), "Temp3", `${data.Temp3_Avg} °C`);
    addRow(table.insertRow(), "Temp4", `${data.Temp4_Avg} °C`);
    addRow(table.insertRow(), "Temp5", `${data.Temp5_Avg} °C`);
    addRow(table.insertRow(), "Temp6", `${data.Temp6_Avg} °C`);
    addRow(table.insertRow(), "Temp7", `${data.Temp7_Avg} °C`);
    addRow(table.insertRow(), "RH1", `${data.RH1} %`);
    addRow(table.insertRow(), "RH2", `${data.RH2} %`);
    addRow(table.insertRow(), "RH3", `${data.RH3} %`);
    addRow(table.insertRow(), "RH4", `${data.RH4} %`);
    addRow(table.insertRow(), "RH5", `${data.RH5} %`);
    addRow(table.insertRow(), "RH6", `${data.RH6} %`);
    addRow(table.insertRow(), "RH7", `${data.RH7} %`);
    div.appendChild(table);

    table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");
    addRow(table.insertRow(), "TPS_Air_Temp", `${data.TPS_Air_Temp_C} °C`);
    addRow(table.insertRow(), "TPS_Wind_Spd_ms", `${data.TPS_Wind_Spd_ms} m.s-1`);
    addRow(table.insertRow(), "WS_ms", `${data.WS_ms} m.s-1`);
    addRow(table.insertRow(), "Mean_WindDir", `${data.Mean_WindDir} deg`);
    addRow(table.insertRow(), "SDMS40_Depth_Avg", `${data.SDMS40_Depth_Avg} mm`);
    addRow(table.insertRow(), "SR50A_SnowDepth", `${data.SR50A_SnowDepth} mm`);
    addRow(table.insertRow(), "SR50A_QualityVal", `${data.SR50A_QualityVal} nb`);
    addRow(table.insertRow(), "LF1_Ice_Output", `${data.LF1_Ice_Output} `);
    addRow(table.insertRow(), "Ice_mm", `${data.Ice_mm} mm`);
    addRow(table.insertRow(), "Ice_Inch", `${data.Ice_Inch} inches`);
    addRow(table.insertRow(), "LWMDry_Tot", `${data.LWMDry_Tot} minutes`);
    addRow(table.insertRow(), "LWMWet_Tot", `${data.LWMWet_Tot} minutes`);
    addRow(table.insertRow(), "LWMCon_Tot", `${data.LWMCon_Tot} minutes`);
    addRow(table.insertRow(), "Visibilitystr", `${data.Visibilitystr}`);
    div.appendChild(table);

    table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");

    addRow(table.insertRow(), "TPS_Precip_1minAvg_mmHr", `${data.TPS_Raw_Precip_Rate_1minAvg_mmHr}`);
    addRow(table.insertRow(), "TPS_Precip_5minAvg_mmHr", `${data.TPS_Raw_Precip_Rate_5minAvg_mmHr}`);
    addRow(table.insertRow(), "TPS_Total_Accum_mm", `${data.TPS_Total_Accum_mm}`);
    addRow(table.insertRow(), "TPS_Pwr_Sensor_W", `${data.TPS_Pwr_Sensor_W} W`);
    addRow(table.insertRow(), "TPS_Pwr_Ref_W", `${data.TPS_Pwr_Ref_W} W`);
    addRow(table.insertRow(), "WS_ms_Max", `${data.WS_ms_Max} m.s-1`);
    addRow(table.insertRow(), "WindDir_Max", `${data.WindDir_Max} deg`);
    addRow(table.insertRow(), "WindDir_SD", `${data.WindDir_SD}`);
    addRow(table.insertRow(), "TPS_Baro_Press", `${data.TPS_Baro_Press_mbar_Corrected} mbar`);
    div.appendChild(table);


}
function displayStationFluxData(data) {
    document.getElementById("lastUpdateFlux").innerHTML = `- 30 minutes database last update: ${getLastUpdateDate(data.DATE)}`;
    let div = document.getElementById("stationFlux");
    let table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");
    addRow(table.insertRow(), "SW_IN", `${data.SW_IN} W.m-2`);
    addRow(table.insertRow(), "SW_OUT", `${data.SW_OUT} W.m-2`);
    addRow(table.insertRow(), "LW_IN", `${data.LW_IN} W.m-2`);
    addRow(table.insertRow(), "LW_OUT", `${data.LW_OUT} W.m-2`);
    addRow(table.insertRow(), "WS", `${data.WS} m.s-1`);
    addRow(table.insertRow(), "WD", `${data.WD} deg`);
    addRow(table.insertRow(), "TS_1_1_1", `${data.TS_1_1_1} °C`);
    div.appendChild(table);

    table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");
    addRow(table.insertRow(), "TS_2_1_1", `${data.TS_2_1_1} °C`);
    addRow(table.insertRow(), "SWC_1_1_1", `${data.SWC_1_1_1} %`);
    addRow(table.insertRow(), "PA", `${data.PA} kPa`);
     addRow(table.insertRow(), "NETRAD", `${data.NETRAD} W.m-2`);
    addRow(table.insertRow(), "Albedo (ALB)", `${data.ALB} %`);
    addRow(table.insertRow(), "CO2_Flux (FC)", `${data.FC} umolCO2 m-2.s-1`);
    addRow(table.insertRow(), "Ground Heat Flux (G)", `${data.G} W.m-2`);
    div.appendChild(table);

    table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");
    addRow(table.insertRow(), "Soil Storage Flux (SG)", `${data.SG} W.m-2`);
    addRow(table.insertRow(), "Evapotranspiration (ET)", `${data.ET} mm.hr-1`);
    addRow(table.insertRow(), "Latent Heat Flux (LE)", `${data.LE} W.m-2`);
    addRow(table.insertRow(), "Sensible Heat Flux (H)", `${data.H} W.m-2`);
    addRow(table.insertRow(), "Max Flux Fetch Distance (FETCH_MAX)", `${data.FETCH_MAX} m`);
    div.appendChild(table);


}
function displayStationSWEData(data) {
    document.getElementById("lastUpdateSWE").innerHTML = `- 6 hours database last update: ${getLastUpdateDate(data.DATE)}`;
    let div = document.getElementById("stationSwe");
    let table = document.createElement("TABLE");
    table.classList.add("col-lg-4");
    table.classList.add("col-md-12");
    addRow(table.insertRow(), "CS725_SWE_K", `${data.CS725_SWE_K} mm`);
    addRow(table.insertRow(), "CS725_SWE_TL", `${data.CS725_SWE_TL} mm`);
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