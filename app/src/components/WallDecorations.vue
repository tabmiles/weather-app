<template>
    <div id="wallDecorations">
      <div>
        <Clock ref="Clock"/>
      </div>
      <div id="picturesWrapper">
        <PictureFrame ref="Sunrise" type="sunrise"/>
        <PictureFrame ref="Sunset" type="sunset"/>
      </div>
      <Calendar/>
    </div>
  </template>
  
  <script>

  import { store } from '@/shared/store';
import Calendar from '../components/Calendar.vue';
import Clock from './Clock.vue';
  import PictureFrame from './PictureFrame.vue';

  export default {
    name: 'WallDecorations',

    components: {
      Calendar,
      PictureFrame,
      Clock
    },

    data () {
        return {
            temperature: '',
            sunrise: '',
            sunset: '',
            time: ''
        }
    },

    methods: {
        setWeather(weather) {
          // FUTURE: consider day in forecast
          console.log('[WallDecorations] Weather: ', weather);
          this.temperature = weather.data.current.temperature_2m;
          this.time = store.getCurrentTime();
          this.sunrise = store.getTime(weather.data.daily.sunrise[0]);
          this.sunset = store.getTime(weather.data.daily.sunset[0]);
          this.$refs.Sunrise.setTime(this.sunrise);
          this.$refs.Sunset.setTime(this.sunset);
          this.$refs.Clock.setTime(this.time);
        }
    }
  }
  </script>
  
  <style scoped>
    #wallDecorations {
      grid-area: wallDecorations;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      display: grid;
      /* Prevent wall decoration responsiveness */
      /* min-width: 300px; */
    }
    #picturesWrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      height: 170px;
    }
  </style>
  