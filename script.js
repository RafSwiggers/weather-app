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


input.addEventListener("keypress", getValue);

function getValue(e) {
    console.log(e.target.value);
}

function getWeather() {
    button[0].addEventListener("click", async function(e) {
        cardcontainer.style.display = "grid";
        let city = input.value;
        let api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&APPID=${key}`;
        let response = await axios.get(api);
        let temp1 = convertKelvinToCelsius(response.data.list[0].main.temp);
        let temp2 = convertKelvinToCelsius(response.data.list[8].main.temp);
        let temp3 = convertKelvinToCelsius(response.data.list[16].main.temp);
        let temp4 = convertKelvinToCelsius(response.data.list[24].main.temp);
        let temp5 = convertKelvinToCelsius(response.data.list[32].main.temp);

        console.log(response.data);
        tempDay1.innerText = Math.floor(temp1)
        tempDay2.innerText = Math.floor(temp2)
        tempDay3.innerText = Math.floor(temp3)
        tempDay4.innerText = Math.floor(temp4)
        tempDay5.innerText = Math.floor(temp5)
        document.getElementById("descriptionDayOne").innerHTML =
            response.data.list[0].weather[0].description

        document.getElementById("descriptionDayTwo").innerHTML =
            response.data.list[8].weather[0].description;

        document.getElementById("descriptionDayThree").innerHTML =
            response.data.list[16].weather[0].description;

        document.getElementById("descriptionDayFour").innerHTML =
            response.data.list[32].weather[0].description;

        document.getElementById("descriptionDayFive").innerHTML =
            response.data.list[39].weather[0].description;

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