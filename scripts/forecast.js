/* alternet optioin by usin class
*/
class Forecast{
    constructor(){
        this.key = "dCGAN4hpaEA9dbfiZAGb9bi7p7Le8DWv";
        this.weatherURI =
          "http://dataservice.accuweather.com/currentconditions/v1/";
        this.cityURI =
          "http://dataservice.accuweather.com/locations/v1/cities/search";
    }
    async updateCity(city){
     const  cityDets = await getCity(city);
     const weather = await this.getWeather(cityDets.key);
     return {
         cityDets, weather
     };

    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;

        const response = await fetch (this.cityURI + query);
        const data = await response.json();

        return data[0];
    }
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    }
}


/*
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

*/
