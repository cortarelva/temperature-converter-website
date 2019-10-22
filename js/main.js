//function to convert fahrenheit to celsius

function temperatureConverterFtoC(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFCelcius").innerHTML =Math.round((valNum-32)/1.8);
  }

//--------------------------------------------------------------------------------------
//function to convert from celsius to fahrenheit

function temperatureConverterCtoF(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCFahrenheit").innerHTML=(valNum*1.8)+32; 
  }

  //-------------------------------------------------------------------------------------
  //function to convert from fahrenheit to kelvin

  function temperatureConverterFtoK(valNum) {
    valNum = parseFloat(valNum);
        document.getElementById("outputFKelvin").innerHTML=Math.round(((valNum-32)/1.8)+273.15);
  }
  //--------------------------------------------------------------------------------------
  //function to Kelvin to Fahrenheit

  function temperatureConverterKtoF(valNum) {
    valNum = parseFloat(valNum);
    if(valNum < 0){ 
        alert("value must be above 0 kelvin");
    }
    else{
        document.getElementById("outputKFahrenheit").innerHTML=Math.round(((valNum-273.15)*1.8)+32);
    }
    
  }
  //----------------------------------------------------------------------------------------
  //function to convert Kelvin to Celsius

  function temperatureConverterKtoC(valNum) {
    valNum = parseFloat(valNum);
   if(valNum < 0){ 
        alert("value must be above 0 kelvin");
    }
    else{
        document.getElementById("outputKCelcius").innerHTML=Math.round(valNum-273.15);
    }
    
  }
  //--------------------------------------------------------------------------------------------
  //function to convert from Celsius to kelvin

  function temperatureConverterCtoK(valNum) {
    valNum = parseFloat(valNum);
    if(valNum < 0){ 
        alert("value must be above 0 kelvin");
    }
    else{
        document.getElementById("outputCKelvin").innerHTML=Math.round(valNum+273.15);
    }
   
  }