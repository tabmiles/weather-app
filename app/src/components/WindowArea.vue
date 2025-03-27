<template>
  <div id="windowAreaWrapper">
    <div class="windowPane" id="topLeft">
      <CurrentTemp ref="CurrentTemp"/>
    </div>
    <div class="windowPane" id="topRight">
      <p>Current weather: {{ this.type }}</p>
      <p>Sun or Moon</p>
    </div>
    <div class="windowPane" id="bottomLeft">
      <MinMaxTemp type="min" :temp="minTemp"/>
      <MinMaxTemp type="max" :temp="maxTemp"/>
    </div>
    <div class="windowPane" id="bottomRight">
      <p>Potted plant or mini person model dressed for weather</p>
    </div>
  </div>
</template>

<script>
import CurrentTemp from './CurrentTemp.vue';
import MinMaxTemp from './MinMaxTemp.vue';


export default {
  name: 'WindowArea',
  components: {
    CurrentTemp,
    MinMaxTemp
  },
  data () {
    return {
      type: null,
      typeCode: null,
      minTemp: null,
      maxTemp: null
    }
  },
  methods: {
    setWeather(weather) {
      console.log('[WindowArea] Weather code: ', weather.data.current.weather_code);
      this.$refs.CurrentTemp.setCurrentTemp(weather.data.current.temperature_2m);
      if(this.typeCode === weather.data.current.weather_code) {
        // NOOP for no update to type
        return;
      }
      this.typeCode = weather.data.current.weather_code;
      this.minTemp = weather.data.daily.temperature_2m_min[0];
      this.maxTemp = weather.data.daily.temperature_2m_max[0];
      switch (weather.data.current.weather_code) {
        // TODO: handle background based on weather type
        case 0:
          this.type = 'Clear';
          break;
        case 1:
          this.type = 'Mainly Cloudy';
          break;
        case 2:
          this.type = 'Partly Cloudy';
          break;
        case 3:
          this.type = 'Overcast';
          break;
        case 45:
        case 48:
          this.type = 'Fog';
          break;
        case 51:
          this.type = 'Light Drizzle';
          break;
        case 53:
          this.type = 'Moderate Drizzle';
          break;
        case 55:
          this.type = 'Heavy Drizzle';
          break;
        case 56:
        case 57:
          this.type = 'Freezing Drizzle';
          break;
        case 61:
          this.type = 'Light Rain';
          break;
        case 63:
          this.type = 'Moderate Rain';
          break;
        case 65:
          this.type = 'Heavy Rain';
          break;
        case 66:
        case 67:
          this.type = 'Freezing Rain Showers';
          break;
        case 71:
          this.type = 'Light Snow';
          break;
        case 73:
          this.type = 'Moderate Snow';
          break;
        case 75:
          this.type = 'Heavy Snow';
          break;
        case 80:
          this.type = 'Light Rain Showers';
          break;
        case 81:
          this.type = 'Moderate Rain Showers';
          break;
        case 82:
          this.type = 'Heavy Rain Showers';
          break;
        case 85:
          this.type = 'Light Snow Showers';
          break;
        case 86:
          this.type = 'Heavy Snow Showers';
          break;
        default:
          this.type = 'Unknown';
          break;
      }
    }
  }
}
</script>

<style>
#windowAreaWrapper {
  /* background-color: #ace1f2;
  background-image: url('../assets/Clear_Day.png'); */

  /* background-color: #46345c; */
  background-image: url('../assets/clear night.png');

  grid-area: windowArea;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-repeat:no-repeat;
  background-size: contain;
  background-position: center;
  width: 450px;
}
#topLeft {
  display: flex;
  align-items: center;
  justify-content: center;
}
#bottomLeft {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
}
#topRight {
  background-repeat:no-repeat;
  background-size: contain;
  background-position: center;
}
* {
  margin: 0;
}
</style>
