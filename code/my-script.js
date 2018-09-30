//Fetches the data from the Api openweathermap
fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=8d08f5fb89fe20e86bf5fe723adaaa3b")
  .then((response) => {
    console.log(response)
    return response.json()
  }).then((data) => {

//Create a constant for what's in the array data
    console.log(data)
    const city = data.name

//Creating a constant temp for what's in the object main: temperature.
//To make it show in one decimal we use toFixed(1)
    const temp = data.main.temp.toFixed(1)

//Creating a constant for what's in the array weathers description
    const desc = data.weather[0].description

//The innerHTML fetches the content sthlm, tempSthlm and replaces them with city, temp and desc
    document.getElementById("sthlm").innerHTML = city
    document.getElementById("tempSthlm").innerHTML = temp + "&deg"
    document.getElementById("descSthlm").innerHTML = desc

    if (temp > 10) {
      document.getElementById("Sthlm").style.backgroundColor = "#fffbcc";
    } else if (temp < 0) {
      document.getElementById("Sthlm").style.backgroundColor = "#c6f0f2";
    } else {
      document.getElementById("Sthlm").style.backgroundColor = "#fee8e5";
    }
  })

//We could probably make a promise for all Api fetches instead of doing 3 different fetches
fetch("http://api.openweathermap.org/data/2.5/weather?q=Gothenburg,Sweden&units=metric&APPID=8d08f5fb89fe20e86bf5fe723adaaa3b")
  .then((response) => {
    console.log(response)
    return response.json()
  }).then((data) => {

    console.log(data)
    const city = data.name
    const temp = data.main.temp.toFixed(1)
    const desc = data.weather[0].description
    document.getElementById("gbg").innerHTML = city
    document.getElementById("tempGbg").innerHTML = temp + "&deg"
    document.getElementById("descGbg").innerHTML = desc

    if (temp > 10) {
      document.getElementById("Gbg").style.backgroundColor = "#fffbcc";
    } else if (temp < 0) {
      document.getElementById("Gbg").style.backgroundColor = "#c6f0f2";
    } else {
      document.getElementById("Gbg").style.backgroundColor = "#fee8e5";
    }
  })

fetch("http://api.openweathermap.org/data/2.5/weather?q=Malmo,Sweden&units=metric&APPID=8d08f5fb89fe20e86bf5fe723adaaa3b")
  .then((response) => {
    console.log(response)
    return response.json()
  }).then((data) => {

    console.log(data)
    const city = data.name
    const temp = data.main.temp.toFixed(1)
    const desc = data.weather[0].description

    document.getElementById("malmo").innerHTML = city
    document.getElementById("tempMalmo").innerHTML = temp + "&deg"
    document.getElementById("descMalmo").innerHTML = desc

    if (temp > 10) {
      document.getElementById("Malmo").style.backgroundColor = "#fffbcc";
    } else if (temp < 0) {
      document.getElementById("Malmo").style.backgroundColor = "#c6f0f2";
    } else {
      document.getElementById("Malmo").style.backgroundColor = "#fee8e5";
    }
  })
