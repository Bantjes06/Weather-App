class Weather {
    constructor(city, province) {
        this.apiKey = '351524ce6ad92e365af96adbd0761cfd';
        this.city = city;
        this.province = province;
    }

    async getWeather() {
        const result = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.province}&appid=${this.apiKey}`)

        const responseData = await result.json();

        if (responseData.cod === '404') return null;

        responseData.location = { city: this.city, province: this.province};

        return responseData;
    }

    changeWeather(city, province) {
        if (city === '' || province === '') return;

        this.city = city;
        this.province = province;
    }
}