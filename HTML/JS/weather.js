

var button = document.querySelector('.weatherButton');
var inputValue = document.querySelector('.inputValue');
var nameCity = document.querySelector('.nameCity');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

let cel;

button.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=805ce2b34b6cc83450f9b35c8bd6626c')
        .then(response => response.json())

        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];

            cel = parseFloat((tempValue - 273).toFixed(1));

            nameCity.innerHTML = nameValue;
            temp.innerHTML = cel + " °C";
            desc.innerHTML = descValue;

        })



        .catch(err => alert("Invalid city name!"))
});

