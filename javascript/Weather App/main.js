//      To get the apiKey, login to Open Weather Map and paste your API key below
//      https://openweathermap.org/


const apiKey = ""  //Paste the API key here
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const city = document.querySelector(".city");
const icon = document.querySelector(".icon");
const temp = document.getElementById("temp");


const input = document.getElementById("search")
const searchBtn = document.querySelector(".search-bar button");

searchBtn.addEventListener("click", ()=>{
    checkWeather(input.value);
})



const checkWeather = async (showcity) =>{
    const response = await fetch(apiUrl +`${showcity}`+ `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    try{
        temp.innerHTML = Math.round(data.main.temp)  + `°C`;
        city.innerHTML = data.name;

     
    
        let mainPic = '';
        if(data.weather[0].main === "Clouds"){
            mainPic = ' <i class="uil uil-cloud-sun"></i>'
        }else if(data.weather[0].main === "Snow"){
            mainPic = '<i class="uil uil-snow-flake"></i>'
        }else if(data.weather[0].main === "Rain"){
            mainPic = '<i class="uil uil-cloud-rain-sun"></i>'
        }else{
            mainPic = '<i class="uil uil-sun"></i>'
        }

        const wind = document.getElementById("wind");
        wind.innerHTML = data.wind.speed + ' km/hr'

        const humidity = document.getElementById("humidity");
        humidity.innerHTML = data.main.humidity + "%"
        
        const pressure = document.getElementById("pressure");
        pressure.innerHTML = data.main.pressure + "Pa"
    
        icon.innerHTML = `
        ${mainPic}
        `
    }catch(Error){
        city.innerHTML = "Couldn't find the city"
    }

   

    
}

