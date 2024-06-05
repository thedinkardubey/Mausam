let inputbox = document.querySelector('.search_bar').querySelector('input');
let ibox = document.querySelector('.search_bar').querySelector('i');
let temp = document.querySelector('.temp-data');
let weather = document.querySelector('.wea-data');
let humidity = document.querySelector('.humi-data');
let wind = document.querySelector('.wind-data');
let imgbox = document.querySelector('.imgbox').querySelector('img');
let LocationNotFound = document.querySelector('.location_not_found');
let LocationFound = document.querySelector('.other_than_search');

async function checkWeather(city){
    const API_KEY = "40084f77e7d6aee94bdd45d7a73c8daa";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const data = await fetch(`${url}`).then(response => response.json());
    if(data.cod === "404")
    {
       LocationFound.style.display = "none";
       LocationNotFound.style.display = "flex";
        
    }
    else{
        temp.innerHTML = `${Math.trunc(data.main.temp-273)}&deg;C`;
        weather.innerHTML = data.weather[0].description;
        humidity.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${data.wind.speed}Km/H`;
         switch(data.weather[0].main)
         {
            case 'Clouds':
                imgbox.src = "./img/cloud.png";
                break;
    
            case 'Haze':
                imgbox.src = "./img/cloud.png";
                break;
    
            case 'Clear':
                imgbox.src = "./img/clear.png";
                break;
    
            case 'Rain':
                imgbox.src = "./img/rain.png";
                break;
    
            case 'Snow':
                imgbox.src = "./img/snow.png";
                break;
    
            case 'Mist':
                imgbox.src = "./img/mist.png";
                break;
    
            
         }
         LocationFound.style.display = "flex";
         LocationNotFound.style.display = "none";
    }
    
    console.log(data)

}
ibox.addEventListener('click',()=>{
    let city = inputbox.value;
    checkWeather(city);
    
})
inputbox.addEventListener('keypress',(e)=>{
    if(e.key === "Enter")
    {
        let city = inputbox.value;
        checkWeather(city);
    }
})

