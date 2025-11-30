const inputTemp = document.getElementById("inputTemp");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const result = document.getElementById("result");

function convertTemp() {
 const tempValue = parseFloat(inputTemp.value);

  if (isNaN(tempValue)|| inputTemp.value === "") {
    result.innerText = "Please Enter a Valid Number";
    return;
  }

  let celsius;
  //convert input into celcius
   switch (fromUnit.value) {
    case "celsius":
      celsius = tempValue;
      break;
    case "fahrenheit":
      celsius = (tempValue - 32) * 5 / 9;
      break;
    case "kelvin":
      celsius = tempValue - 273.15;
      break;
    default:
      result.innerText = "Invalid from unit";
      return;
  }


 let convertedTemp;

  // Convert from Celsius to the target unit
  switch (toUnit.value) {
    case "celsius":
      convertedTemp = celsius;
      break;
    case "fahrenheit":
      convertedTemp = (celsius * 9 / 5) + 32;
      break;
    case "kelvin":
      convertedTemp = celsius + 273.15;
      break;
    default:
      result.innerText = "Invalid to unit";
      return;
  }

  result.innerText = `Converted Temp: ${convertedTemp.toFixed(2)} °${toUnit.value.charAt(0).toUpperCase()}`;
}


