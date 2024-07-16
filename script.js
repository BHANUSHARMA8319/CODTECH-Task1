const inputbox=document.getElementsByClassName("input")[0];
const searchbutton=document.getElementById("searching");
const images=document.getElementsByClassName("weather_image")[0];
const tempe=document.getElementsByClassName("temperature")[0];
const desc=document.getElementsByClassName("description")[0];
const humid=document.getElementsByClassName("nami")[1];
const hawa=document.getElementsByClassName("Wind")[1];

const not_found=document.getElementsByClassName("not_found")[0];
const weather=document.getElementsByClassName("weather")[0];

 async function weather_info(city){
    const Api ="aa65dc4fac033b85559fb40549b389e8";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api}`;
    const weather_data= await fetch(url);
    const response= await  weather_data.json();

    if(response.cod=="404")
    {
        not_found.style.display="flex";
        weather.style.display="none";
        return;
    }
    not_found.style.display="none"
    weather.style.display="flex";
    tempe.innerHTML=`${Math.round(response.main.temp-275.15)}°C`;
     console.log(response);
     desc.innerHTML=response.weather[0].description;
     humid.innerHTML=response.main.humidity+"%";
     hawa.innerHTML=Math.round(response.wind.speed*3.6)+"KM/h";

     switch(response.weather[0].main)
     {
        case"Clouds":
          images.src="cloud.png";
            break;
        case"Rain":
          images.src="rain.png";
            break;
        
        case"Clear":
          images.src="clear.png";
            break;
        case"Snow":
          images.src="snow1.png";
            break; 
          
        case "Mist":
          images.src="mist.png";
            break;
        case "Haze":
            images.src="haze.webp";
             break;
     }
}
 searchbutton.addEventListener("click",()=>{
     weather_info(inputbox.value);
 });
