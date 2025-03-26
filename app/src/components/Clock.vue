<template>
    <div id="clockWrapper">
      <p>Clock {{ this.time }}</p>
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
      }
    }
  }
  </script>
  
  <style scoped>
    #clockWrapper {
      /* grid-area: Clock; */
      background-color: lightyellow;
    }
  </style>
  