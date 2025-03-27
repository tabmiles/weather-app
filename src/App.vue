<template>
  <button @click="updateWeather" ref="updateButton" id="updateButton"><svg height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 489.645 489.645" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M460.656,132.911c-58.7-122.1-212.2-166.5-331.8-104.1c-9.4,5.2-13.5,16.6-8.3,27c5.2,9.4,16.6,13.5,27,8.3 c99.9-52,227.4-14.9,276.7,86.3c65.4,134.3-19,236.7-87.4,274.6c-93.1,51.7-211.2,17.4-267.6-70.7l69.3,14.5 c10.4,2.1,21.8-4.2,23.9-15.6c2.1-10.4-4.2-21.8-15.6-23.9l-122.8-25c-20.6-2-25,16.6-23.9,22.9l15.6,123.8 c1,10.4,9.4,17.7,19.8,17.7c12.8,0,20.8-12.5,19.8-23.9l-6-50.5c57.4,70.8,170.3,131.2,307.4,68.2 C414.856,432.511,548.256,314.811,460.656,132.911z"></path> </g> </g></svg></button>
  <WallDecorations ref="WallDecorations"/>
  <WindowArea ref="WindowArea"/>
</template>

<script>
import WallDecorations from './components/WallDecorations.vue';
import WindowArea from './components/WindowArea.vue';
import { store } from './shared/store';

export default {
  name: 'App',

  components: {
    WindowArea,
    WallDecorations,
  },

  data() {
    return {
      latitude: null,
      longitude: null,
      location: null
    }
  },

  async mounted() {
    await store.initialize();
    console.log('[App] Location: ', location);
    this.latitude = store.location.latitude;
    this.longitude = store.location.longitude;
    this.$refs.WallDecorations.setWeather(store.weather);
    this.$refs.WindowArea.setWeather(store.weather);

    // FUTURE: update weather every 15 minutes
  },
  
  methods: {
    async updateWeather() {
      console.log('[App] Update Weather');
      const weather = await store.getWeather(this.latitude, this.longitude);
      this.$refs.WallDecorations.setWeather(weather);
      this.$refs.WindowArea.setWeather(weather);
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Delius&family=Gloria+Hallelujah&family=Indie+Flower&family=Mansalva&display=swap');
#app {
  text-align: center;
  background-color: rgb(255, 229, 233);
  padding: 10px 10px 0 10px;

  display: grid;
  /* Prevent wall decoration responsiveness */
  grid-template-columns: 40% auto;
  /* grid-template-columns: auto; */
  grid-template-rows: 1fr;
  grid-template-areas:
    "wallDecorations windowArea";
  justify-content: space-around;

  min-width: 750px;
  height: 600px;
}
#updateButton {
  position: absolute;
  background: none;
  border: none;
  padding: 5px;
  svg {
    fill: lightgray;
  }
}
#updateButton:hover {
  cursor: pointer;
  svg {
    fill: lightslategray;
  }
}
* {
  font-family: "Delius", cursive;
  font-weight: 400;
  font-style: normal;
}
</style>
