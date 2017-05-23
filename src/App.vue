<template>
  <div id="app">
    <div class="countdown valign-wrapper left">
      <div class="center">
        <countdown></countdown>
      </div>
    </div>
    <div class="notes-list valign-wrapper right">
      <div class="center">
        <notes-list></notes-list>
      </div>
    </div>
  </div>
</template>

<script>
import Countdown from './components/Countdown'
import NotesList from './components/NotesList'

export default {
  name: 'app',
  components: {
    Countdown,
    NotesList
  },
  created(){
    new Audio("/static/empty.mp3").play();
    console.log("I was ready!");
  }
}
</script>

<style>
  .countdown, .notes-list {
    height: 50vh;
    width: 100vw;
  }

  .countdown {
    color: #FFFFFF;
    background-color: #03A9F4;
  }

  .center {
    margin: 0 auto;
  }

  @media only screen and (min-width : 1024px) {
    .countdown, .notes-list {
      height: 100vh;
      width: 50vw;
    }
  }
</style>
