const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

document.getElementById("lastModified").innerHTML = document.lastModified;

const currentTemp = 10;
const currentWind = 5;

function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

let windChillOutput = "N/A";

if (currentTemp <= 10 && currentWind > 4.8) {
    windChillOutput = `${calculateWindChill(currentTemp, currentWind)} °C`;
}

window.addEventListener("DOMContentLoaded", () => {
    const windChillField = document.getElementById("windchill-value");
    if (windChillField) {
        windChillField.textContent = windChillOutput;
    }
});
