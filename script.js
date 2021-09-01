//==================================================================================
//To do List
let task = document.querySelector('#task');
let submitTask = document.querySelector('#submit-task');
let list = document.querySelector('#todo-ul');
let todoListArr = [];


submitTask.addEventListener('click', (event) => {
  event.preventDefault();
  //adding task
  let taskValue = task.value;
  todoListArr.push(taskValue);
  task.value = "";
  addItem();
})

let addItem = () => {
  list.innerHTML = '';
  todoListArr.forEach((item, index) => {
    const li = document.createElement('li');
    li.classList.add('todoItem');
    li.innerText = item;



    const completedButton = document.createElement('button');
    completedButton.classList.add('completedButton');
    completedButton.setAttribute('id', index);
    completedButton.innerText = 'Completed';
    completedButton.addEventListener('click', (index) => {
      console.log(index.target.id);
      todoListArr.splice(index.target.id, 1);
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
  try {
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
  } catch (error) {
    console.log(error);
  }
};

//==================================================================================

//News API
const NEWS_API_KEY = '1941ec12d2054d399f9949a853bd47b6';
let NEWS_SEARCH = "";
let News_Api = `https://newsapi.org/v2/everything?q=${NEWS_SEARCH}&from=2021-08-30&sortBy=popularity&apiKey=${NEWS_API_KEY}`;


let searchNewsButton = document.querySelector('#searchNewsButton');
let newsDiv = document.querySelector('.news_article');
let searchNews = document.querySelector('#searchNews');
let linkImgA = document.querySelector('a');

searchNewsButton.addEventListener('click', (event) => {
  event.preventDefault();
  newsDiv.innerHTML = "";
  console.log(searchNews.value);
  NEWS_SEARCH = searchNews.value;
  getNews();
  searchNews.value = "";
})

async function getNews() {
  News_Api = `https://newsapi.org/v2/everything?q=${NEWS_SEARCH}&from=2021-08-30&sortBy=popularity&apiKey=${NEWS_API_KEY}`
  try {
    let newsData = await axios.get(News_Api);
    let newsArticleData = newsData.data.articles;
    console.log(newsArticleData);

    let i;
    let media = window.matchMedia("(min-width: 800px")
    if (media.matches) {
      i = 0;
    } else {
      i = 2;
    }

    for (i; i < 3; i++) {
      let randArticle = Math.floor(Math.random() * (newsArticleData.length - 1));
      let newsTitle = document.createElement('div');
      newsTitle.classList.add('newsTitle');
      newsTitle.innerText = newsArticleData[randArticle].title;

      let newsImg = document.createElement('img');
      newsImg.classList.add('newsImg');
      newsImg.src = newsArticleData[randArticle].urlToImage;


      let linkImg = document.createElement('a');
      linkImg.href = newsArticleData[randArticle].url;
      linkImg.target = "_blank";
      linkImg.appendChild(newsImg);

      let newsContainer = document.createElement('div');
      newsContainer.classList.add('newsContainer');
      newsContainer.appendChild(newsTitle)
      newsContainer.appendChild(linkImg);
      newsDiv.appendChild(newsContainer);
    }


    //figure out how to display articles
  } catch (error) {
    console.log(error);
  };
};

//==================================================================================
//Timer
let display = document.querySelector('.countdown');
let timeInput = document.querySelector('#time');
let timeButton = document.querySelector('#timeButton');
let time;
let timeOut;

timeButton.addEventListener('click', (event) => {
  event.preventDefault();
  time = timeInput.value * 60;
  timer(time);
})

let timeButtonEnd = document.querySelector('#timeButtonEnd');
timeButtonEnd.addEventListener('click', (event) => {
  event.preventDefault();
  window.clearTimeout(timeOut);
  time = 0;
  display.innerHTML = time;
})

let timer = (time) => {
  let minute = Math.floor(time / 60);
  let second = time - (minute * 60);
  Math.floor(second);
  //format seconds numbering, less than 10
  if (second < 10) {
    second = "0" + second;
  }

  let timerDisplayInfo = minute.toString() + ":" + second;
  display.innerHTML = timerDisplayInfo;
  time -= 1;

  if (time === 0) {
    alert("Done");
  } else {
    timeOut = setTimeout(function () { timer(time) }, 1000);
  }
};

//==================================================================================


