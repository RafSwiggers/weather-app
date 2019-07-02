const key = "ee50b5e24279fee77fa436c9b704948f";
const input = document.getElementById("input-text");
const button = document.getElementsByTagName("button");
const today = new Date;
const tempDay1 = document.getElementById('tempDayOne');
const tempDay2 = document.getElementById('tempDayTwo');
const tempDay3 = document.getElementById('tempDayThree');
const tempDay4 = document.getElementById('tempDayFour');
const tempDay5 = document.getElementById('tempDayFive');
cardcontainer = document.getElementById('cardcontainer')
const week = [];
const dayOne = [];
const dayTwo = [];
const dayThree = [];
const dayFour = [];
const dayFive = [];


function getWeather() {
    button[0].addEventListener("click", async function(e) {
        cardcontainer.style.display = "grid";
        let city = input.value;
        let api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&APPID=${key}`;
        let response = await axios.get(api);
        for (i = 0; i < response.data.list.length; i += 8) {
            week.push(response.data.list[i]);
        }
        dayOne.push(week[0]);
        dayTwo.push(week[1]);
        dayThree.push(week[2]);
        dayFour.push(week[3]);
        dayFive.push(week[4]);

        console.log(dayFive);
        let temp1 = convertKelvinToCelsius(dayOne[0].main.temp);
        let temp2 = convertKelvinToCelsius(dayTwo[0].main.temp);
        let temp3 = convertKelvinToCelsius(dayThree[0].main.temp);
        let temp4 = convertKelvinToCelsius(dayFour[0].main.temp);
        let temp5 = convertKelvinToCelsius(dayFive[0].main.temp);

        tempDay1.innerText = Math.floor(temp1)
        tempDay2.innerText = Math.floor(temp2)
        tempDay3.innerText = Math.floor(temp3)
        tempDay4.innerText = Math.floor(temp4)
        tempDay5.innerText = Math.floor(temp5)
        document.getElementById("descriptionDayOne").innerHTML =
            dayOne[0].weather[0].description

        document.getElementById("descriptionDayTwo").innerHTML =
            dayTwo[0].weather[0].description

        document.getElementById("descriptionDayThree").innerHTML =
            dayThree[0].weather[0].description

        document.getElementById("descriptionDayFour").innerHTML =
            dayFour[0].weather[0].description

        document.getElementById("descriptionDayFive").innerHTML =
            dayFive[0].weather[0].description

    })

}
getWeather();


function convertKelvinToCelsius(kelvin) {
    if (kelvin < (0)) {
        return 'below absolute zero (0 K)';
    } else {
        return (kelvin - 273.15);
    }
}