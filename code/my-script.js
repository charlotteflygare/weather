
//Fetches the data from the Api openweathermap
fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=8d08f5fb89fe20e86bf5fe723adaaa3b")
.then((response) => {
  console.log(response)
  return response.json()
}).then((data) => {


  console.log(data)

  const city = data.name
  const temp = data.main.temp.toFixed(1)
  const desc = data.weather[0].description

  document.getElementById("cityName").innerHTML = city
  document.getElementById("temperature").innerHTML = temp + "&deg"
  document.getElementById("description").innerHTML = desc

  if (temperature > 10) {
    // document.getElementById("column").style.backgroundColor = "lightblue";
    document.body.style.backgroundColor = "#feecec";
  } else if (temperature < 0 ){
    // document.getElementById("column").style.backgroundColor = "lightblue";
    document.div.style.backgroundColor = "#f6a98e";
  }

  //getElementByTagName referrar till alla
  // document.getElementById("column").innerHTML = checkTemp()

  // document.getElementsByTagName("body").innerHTML = checkTemp()

})
