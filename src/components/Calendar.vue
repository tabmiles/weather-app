<template>
    <div id="calendarWrapper">
    </div>
  </template>
  
  <script>
  export default {
    name: 'Calendar',
  }
  </script>
  
  <style scoped>
    #calendarWrapper {
      /* grid-area: calendar; */
      background-image: url('../assets/today_calendar.png');
      background-repeat:no-repeat;
      background-size: contain;
      background-position: bottom;
    }
  </style>
  