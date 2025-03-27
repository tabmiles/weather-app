<template>
    <div id="calendarWrapper">
      <p id="calendarDay">{{ this.date }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Calendar',
    props: {
      date: String
    },
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
    #calendarDay {
      margin-top: 110px;
      font-size: large;
    }
  </style>
  