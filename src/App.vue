<template>
  <div id="app">
    <countdown></countdown>
    <notes-list></notes-list>
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
</style>
