const apiKey = `e690e9fe7803a740f6a304e945a1fc90`;
const searchBox = document.querySelector(".inputbox input");
const searchBtn = document.querySelector(".inputbox button");
const weather_icon = document.querySelector(".weather-logo");
async function checkWeather()
{
    city = searchBox.value;
const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`);
var data = await response.json();
if(response.status == 404)
{
    document.querySelector(".container-web .con .weather-result .weather-logo").style.display="none";
    document.querySelector(".container-web .con .weather-result").style.display = "none";
      document.querySelector(".container-web .con .Humidity-and-air").style.display = "none";
   searchBox.value = "Invalid city name";
}
else{
    console.log(data);
    document.querySelector(".container-web .con .weather-result .weather-logo").style.display="inherit";
  document.querySelector(".container-web .con .weather-result").style.display = "block";
    document.querySelector(".container-web .con .Humidity-and-air").style.display = "inherit";
    document.querySelector(".humidity-rete").innerHTML=data.visibility+"m";
    document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
document.querySelector(".humidity-rate").innerHTML = data.main.humidity+"%";
document.querySelector(".wind-rate").innerHTML = data.wind.speed+" km/h";
if(data.weather[0].main=="Clouds"){
weather_icon.src = "../images/clouds.png";
}
else if(data.weather[0].main == "Rain")
{
    weather_icon.src = "../images/rain.png";
}
else if(data.weather[0].main=="Clear")
{
    weather_icon.src = "../images/clear.png";
}
else if(data.weather[0].main=="Drizzle")
{
    weather_icon.src = "../images/drizzle.png";
}
else if(data.weather[0].main=="Snow")
{
    weather_icon.src = "../images/snow.png";
}
else if(data.weather[0].main=="Mist")
{
    weather_icon="../images/mist.png";
}
}
}
    

