<template>
    <div id="minMaxTempWrapper" :class=type>
      <p id="temp">{{ this.temp }}° F</p>
    </div>
</template>
  
<script>
  export default {
    name: 'MinMaxTemp',
    props: {
      type: String,
      temp: Number
    },
  }
</script>
  
<style scoped>
    #minMaxTempWrapper {
        display: flex;
        flex-direction: column;
        justify-content: end;
        width:  125px;
    }
    .min {
        background-image: url('../assets/min temp.png');
        background-repeat:no-repeat;
        background-size: contain;
        background-position: bottom;
    }
    .max {
        background-image: url('../assets/max temp.png');
        background-repeat:no-repeat;
        background-size: contain;
        background-position: bottom;
    }
    #temp {
        margin-bottom: 25px;
        color: #4d372b
    }
</style>