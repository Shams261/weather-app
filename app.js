const weatherApi={
    key:"52b5b76295d34dedf33e1f0654cbf890",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}


const input = document.querySelector('#weathersearch');
const button = document.querySelector('.btn');




input.addEventListener('keypress',(e) =>{
    if (e.keyCode == 13){
        console.log(input.value);
        getWeatherReport(input.value);
        document.querySelector('.weatherdisplay').style.display="block";
        input.value="";
        
    
    }
    
} );


function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(showWeatherReport);


    

} 
function showWeatherReport(weather){
    console.log(weather); 

    const city = document.getElementById('city');
    city.innerText = `${weather.name},${weather.sys.country}`;

    const temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    const minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C(min) / ${Math.ceil(weather.main.temp_max)}&deg;C(max)`;

    const weathertype = document.getElementById('weather');
    weathertype.innerHTML = `${weather.weather[0].main}`;

    
    const date = document.getElementById('date');
    const todayDate = new Date();
    date.innerText = dateManage(todayDate);   

    


}
function dateManage(dateArg){
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const year = dateArg.getFullYear();
    const month = months[dateArg.getMonth()];
    const date = dateArg.getDate();
    const day = days[dateArg.getDay()];

    return `${date} ${month} ${day} , ${year}`;
}

