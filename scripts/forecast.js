// interecting with an api
const key = "kPmMxbY0vlWcxS0K3BYv7wbvbAxaNIxW";
// get weather information

const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    // ``, these are called template string

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0]; 
}

//get city information
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

// getCity('manchester')
// .then(data => {
//     return getWeather(data.Key);
// }).then(data => {
//     console.log(data);
// })
// .catch(err => console.log(err));