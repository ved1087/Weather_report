const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');



async function checkWeather(city) {
    const url = 'https://weather-api138.p.rapidapi.com/weather?city_name=';



    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '70d0d6724bmsh06ca5117e0bc7c3p1be184jsn790bf7559cf6',
            'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
        }
    };


    const response = await fetch(url + city, options);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {

        const data = await response.json();
        console.log(data);


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + ('°c');
        document.querySelector(".humidity").innerHTML = data.main.humidity + ('%');
        document.querySelector(".wind").innerHTML = data.wind.speed + ('km/h');
        

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";

        console.log("Updated")

    }

}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})

