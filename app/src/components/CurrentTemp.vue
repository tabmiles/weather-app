<template>
    <div id="currentTempWrapper">
      <p>current temperature is {{ this.temp }}</p>
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
    background-color: lightsteelblue;
  }
  </style>
  