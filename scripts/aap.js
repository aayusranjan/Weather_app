// interacting with dom manipulation

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector(".details");

const updateUI = (data) => {
  const cityDets = data.cityDets;
  const weather = data.weather;

  // update details template
//   details.innerHTML = `
//   <h5 class="my-3">${cityDets.EnglishName}</h5>
//       <div class="my-3">${weather.WeatherText}</div>
//       <div class="display-4 my-4">
//           <span>${weather.Temperature.Metric.value}</span>
//           <span>&deg;C</span>
//       </div>
//   `;
}
const updateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.key);

    return {
        // cityDets: cityDets,
        // weather: weather
        cityDets, weather
        // object shorthand
    };

}

cityForm.addEventListener('submit', e => {
    // prevent default action
    e.preventDefault();
    // we can direct access like this to input wehre city named. and trim for remove white space.
    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset(); // clear the form list after entering and searing.

    // update the ui with new city
    updateCity(city)
    // .then(data => updateUI(data))
    .then(data => console.log(data))
    .catch(err => console.log(err));
})