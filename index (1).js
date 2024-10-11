function place(event) {
  event.preventDefault();
  let searchCity = document.querySelector('.search-input');
  let city = document.querySelector('h1');
  if (searchCity.value) {
    city.innerHTML = `${searchCity.value}`;
  }
}
function nowDate(now) {
  let day = now.getDay();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `${hours}`;
  }

  let newDay = days[day];
  return `${newDay} ${hours}:${minutes}`;
}

let SearchEngine = document.querySelector('form');
SearchEngine.addEventListener('submit', place);

let currentDate = new Date();
let cityTime = document.querySelector('#city-time');
cityTime.innerHTML = nowDate(currentDate);
