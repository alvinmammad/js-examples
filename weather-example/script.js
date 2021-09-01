//declare api : key and base

const api = {
  key: "bd1cc8369fca891002e5322614b4c1fd",
  base: "https://api.openweathermap.org/data/2.5/",
};

//select searchbox from html with DOM queryselect

const searchbox = document.querySelector(".search-box");

//add keypress event listener to the searchbox , and callback setQuery() function

searchbox.addEventListener("keypress", setQuery);

//write setQuery() function . Pass the parameter to function . and check if key code of event equal to 13 , so that "enter" key
//if key code equal to 13 , call getResults function with value of searchbox parameter

function setQuery(e) {
  if (e.keyCode == "13") {
    console.log(searchbox.value);
    getResults(searchbox.value);
  }
}

//write getResult function add pass query parameter.
//fetch your api with promise . and end of function call the displayResults() function

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    })
    .then(displayResults);
}
//write displayResult() function with weather parameter .
//select city element and write innerText city and country from json
//define the now date and select the date tag from html
//define innerText to date element to dateBuilder() method and pass to now parameter
//define the temperature(temp) ,weather(weather_el) and hi and low temperature as(hi-low) variable and calculate them

function displayResults(weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}
//build the date with dateBuilder() method .
//write dateBuilder() method and define the months and days array
//define day month year and date variable with the help of arrays
//and return the variables with the help of string template : ` `
function dateBuilder(d) {
  let months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "İyun",
    "İyul",
    "Avqust",
    "Sentyabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ];
  let days = [
    "Bazar ertəsi",
    "Çərşənbə axşamı",
    "Çərşənbə",
    "Cümə axşamı",
    "Cümə",
    "Şənbə",
    "Bazar",
  ];
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
}
