//const APIURL = 
// 'https://www.metaweather.com/api/';

const APIURL = (location) => 
`https://cors-anywhere.hreokuapp.com/https://api/darksky.net/forecast/c1c79c3374cb0e0b5e2439d84fd12f5/${location}?exclude=minutely,hourly,daily`;

async function getWeatherByLocation(location) {
  const resp = await fetch(APIURL+'/location/search/?query='+location, {
    origin: "cors"
  });
  const respData = await resp.json();
  
  console.log(respData)
}

getWeatherByLocation('London');
