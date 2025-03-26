<template>
    <div id="pictureFrameWrapper">
      <p>Picture of a {{ this.type }} at {{ this.time }}</p>
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
      /* grid-area: PictureFrame; */
      background-color: lightcoral;
    }
  </style>
  