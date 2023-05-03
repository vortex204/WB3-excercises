function convertCtoF(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
    }
    
    let currentTemp = 100;
    fahrenheitTemp = convertCtoF(currentTemp)
    console.log(`${currentTemp} °C is ${fahrenheitTemp} °F`); 
    
    currentTemp = 45;
    fahrenheitTemp = convertCtoF(currentTemp)
    console.log(`${currentTemp} °C is ${fahrenheitTemp} °F`); 
    
    currentTemp = 19;
    fahrenheitTemp = convertCtoF(currentTemp)
    console.log(`${currentTemp} °C is ${fahrenheitTemp} °F`); 
    
    currentTemp = 0;
    fahrenheitTemp = convertCtoF(currentTemp)
    console.log(`${currentTemp} °C is ${fahrenheitTemp} °F`); 
    
    currentTemp = -7;
    fahrenheitTemp = convertCtoF(currentTemp)
    console.log(`${currentTemp} °C is ${fahrenheitTemp} °F`); 
    
    currentTemp = -40;
    fahrenheitTemp = convertCtoF(currentTemp)
    console.log(`${currentTemp} °C is ${fahrenheitTemp} °F`); 
    