function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultContainer = document.getElementById("result");

    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    if (isNaN(temperature)) {
        resultContainer.innerHTML = "Please enter a valid temperature.";
        return;
    }

    let convertedTemperature;
    let unitText;

    if (unit === "celsius") {
        convertedTemperature = (temperature - 32) * (5/9);
        unitText = "Celsius";
    } else if (unit === "fahrenheit") {
        convertedTemperature = (temperature * 9/5) + 32;
        unitText = "Fahrenheit";
    } else if (unit === "kelvin") {
        convertedTemperature = temperature + 273.15;
        unitText = "Kelvin";
    }

    resultContainer.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unitText}`;
}
