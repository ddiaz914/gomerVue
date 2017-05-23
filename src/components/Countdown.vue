<template>
  <div class="">
    <h1><span>{{ minutes | addZero }}</span>:<span>{{ seconds | addZero }}</span></h1>
    <button name="button" @click="countDown(1500)" class="btn">Start</button><button name="button" @click="countDown(300)" class="btn">Break</button>
  </div>
</template>

<script>
export default {
  name: 'countdown',
  data(){
    return {
      now: undefined,
      then: undefined,
      minutes: 25,
      seconds: 0,
      interval: undefined,
    };
  },
  methods: {
    countDown(seconds){
      clearInterval(this.interval);
      this.now = Date.now();
      this.then = this.now + seconds * 1000;
      this.displayTime(seconds);
      this.interval = setInterval(this.timeLeft.bind(this), 1000);
    },

    displayTime(seconds){
      this.minutesLeft(seconds);
      this.secondsLeft(seconds);
    },

    minutesLeft(seconds){
      this.minutes = Math.floor(seconds / 60);
    },

    secondsLeft(seconds){
      this.seconds = seconds % 60;
    },

    timeLeft(){
      const secondsLeft = Math.round((this.then - Date.now()) / 1000);
      if(secondsLeft < 0){
        clearInterval(this.interval);
        new Audio("/static/sound.mp3").play();
        return;
      }

      this.displayTime(secondsLeft);
    }
  }
}
</script>

<style scoped>
  h1 {
    font-size: 8rem;
  }

  .btn {
    background-color: #34d99c;
    border-radius: 5px;
  }

  .btn:first-of-type {
    margin-right: 2px;
  }
</style>
