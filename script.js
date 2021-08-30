//==================================================================================
//To do List
let task = document.querySelector('#task');
let submitTask = document.querySelector('#submit-task');
let list = document.querySelector('#todo-ul');
let todoListArr = [];


submitTask.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(task.value);
  //adding task
  let taskValue = task.value;
  todoListArr.push(taskValue);
  console.log(todoListArr);
  task.value = "";
  addItem();
})

let addItem = () => {
  list.innerHTML = '';
  todoListArr.forEach((item, index) => {
    let li = document.createElement('li');
    li.classList.add('todoItem');
    li.innerText = item;




    let completedButton = document.createElement('button');
    completedButton.innerText = 'Completed';
    completedButton.addEventListener('click', (index) => {
      todoListArr.splice(index, 1);
      console.log(todoListArr);
      addItem();
    })
    li.appendChild(completedButton);
    list.appendChild(li);
  });
};


//==================================================================================
// weather API
let zip_code = "";
let BASE_URL = `http://api.weatherapi.com/v1/forecast.json?key=2d30ac272187439b8e1183146213008&q=${zip_code}&days=1&aqi=no&alerts=no`

const searchZip = document.querySelector('#searchZip');
const searchZipButton = document.querySelector('#searchZipButton');
const weatherDiv = document.querySelector('.weather_data');

//Search funtion
searchZipButton.addEventListener('click', (event) => {
  event.preventDefault();
  weatherDiv.innerHTML = "";
  console.log(searchZip.value);
  zip_code = searchZip.value;
  getWeather();
  searchZip.value = "";
})

async function getWeather() {
  BASE_URL = `http://api.weatherapi.com/v1/forecast.json?key=2d30ac272187439b8e1183146213008&q=${zip_code}&days=1&aqi=no&alerts=no`
  let weather = await axios.get(BASE_URL);
  console.log(weather.data);
  let currentWeather = weather.data.forecast.forecastday[0].hour;
  console.log(weather.data.forecast.forecastday[0].day.uv);

  let today = new Date();
  let time = today.getHours();


  let temperature = document.createElement('div')
  temperature.classList.add('temp');
  temperature.innerText = `Current temperature: ${currentWeather[time].temp_f}F`;
  weatherDiv.appendChild(temperature);

  let uvIndex = document.createElement('div');
  uvIndex.classList.add('uv');
  uvIndex.innerText = `UV index: ${currentWeather[time].uv} `;
  weatherDiv.appendChild(uvIndex);

  let rainChance = document.createElement('div');
  rainChance.classList.add('rainChance');
  rainChance.innerText = `Chance of rain: ${currentWeather[time].chance_of_rain}`;
  weatherDiv.appendChild(rainChance);

  let forecast = document.createElement('img');
  forecast.classList.add('forecastImg');
  forecast.src = currentWeather[time].condition.icon;
  weatherDiv.appendChild(forecast);
};

//==================================================================================

//News API

