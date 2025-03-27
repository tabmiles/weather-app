<template>
    <div id="pictureFrameWrapper" ref="pictureFrameWrapper" :class=type>
      <p class="time"><b>{{ this.time }}</b></p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PictureFrame',
    props: {
      type: String
    },
    data () {
        return {
            time: ''
        }
    },
    methods: {
        setTime(time) {
            console.log('[PictureFrame] Time: ', time);
            this.time = time;
        }
    }
  }
  </script>
  
  <style scoped>
    #pictureFrameWrapper {
      background-repeat:no-repeat;
      background-size: contain;
      background-position: center;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    .sunrise {
      background-image: url('../assets/sunrise.png');
    }
    .sunset {
      background-image: url('../assets/sunset.png');
    }
    .time {
      margin: 10px 0 20px 0;
    }
  </style>
  