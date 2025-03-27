<template>
    <div id="clockWrapper">
      <button @click="handleTimeChange" id="clockTime">{{ this.time }}</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Clock',
    data () {
      return {
        time: ''
      }
    },
    methods: {
      setTime(time) {
        console.log('[Clock] Time: ', time);
        this.time = time.toLocaleTimeString("en-US", {timeStyle: 'short'});
      },
      handleTimeChange(event) {
        console.log('[Clock] Time change: ', event);
      }
    }
  }
  </script>
  
  <style scoped>
    #clockWrapper {
      /* grid-area: Clock; */
      background-image: url('../assets/clock.png');
      background-repeat:no-repeat;
      background-size: contain;
      background-position: bottom;
      height: 80%;
    }
    #clockTime {
      background-color: transparent;
      border: none;
      cursor: pointer;
      font-size: large;
      margin-top: 47px;
      padding: 15px 10px;
    }
  </style>
  