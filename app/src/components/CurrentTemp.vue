<template>
    <div id="currentTempWrapper">
      <p id="temp"><b>{{ this.temp }}° F</b></p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CurrentTemp',
    data () {
        return {
            temp: ''
        }
    },
    methods: {
      setCurrentTemp(temp) {
        console.log('[CurrentTemp] CurrentTemp: ', temp);
        this.temp = temp;
      }
    }
  }
  </script>
  
<style scoped>
  #currentTempWrapper {
    width: 50%;
    height: 50%;
    text-align: center;
    background-image: url('../assets/sun catcher.png');
    background-repeat:no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #temp {
    padding:0;
    margin-top: 45px
  }
</style>
  