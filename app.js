const weather = new Weather('London', 'UK');

//Event Listeners
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
        .then(weather => {
            if (Boolean(weather)) {
                console.log(weather);
            } else {
                document.getElementById('error-message').innerContent = 'City or Province Not Found';

                setTimeout(() => document.getElementById('error-message').textContent = '', 2500);
            }
        })
}