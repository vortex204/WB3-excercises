function convertFtoC(fahrenheit) {
    const celsius = (fahrenheit -32) * 5/9;
    return celsius;
   }
   
   let currentTemp = 212;
   celsiusTemp = convertFtoC(currentTemp);
   console.log(`${currentTemp} °F is ${celsiusTemp} °C`); 
   
   currentTemp = 90;
   celsiusTemp = convertFtoC(currentTemp);
   console.log(`${currentTemp} °F is ${celsiusTemp} °C`); 
   
   currentTemp = 72;
   celsiusTemp = convertFtoC(currentTemp);
   console.log(`${currentTemp} °F is ${celsiusTemp} °C`); 
   
   currentTemp = 32;
   celsiusTemp = convertFtoC(currentTemp);
   console.log(`${currentTemp} °F is ${celsiusTemp} °C`); 
   
   currentTemp = 0;
   celsiusTemp = convertFtoC(currentTemp);
   console.log(`${currentTemp} °F is ${celsiusTemp} °C`); 
   
   currentTemp = -40;
   celsiusTemp = convertFtoC(currentTemp);
   console.log(`${currentTemp} °F is ${celsiusTemp} °C`); 
   