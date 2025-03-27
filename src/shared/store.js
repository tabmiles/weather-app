import axios from 'axios';

export const store = {
    location: {},

    weather: {},

    async initialize() {
        this.location = await this.getLocation()
        this.weather = await this.getWeather(this.location.latitude, this.location.longitude)
    },

    async getLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                position => resolve(position.coords),
                error => reject(error)
            );
        });
    },

    async getWeather(latitude, longitude) {
        // FUTURE: add more customization options: C vs F
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=sunrise,sunset,weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code,is_day&timezone=auto&forecast_days=3&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`)
        return response
    },

    getCurrentTime() {
        return new Date();
    },

    getTime(data) {
        return new Date(data).toLocaleTimeString("en-US", {timeStyle: 'short'});
    },

    getCurrentDate() {
        return new Date().toDateString();
    }
}