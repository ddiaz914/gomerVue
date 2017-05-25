<template lang="html">
  <div class="">
    <ul>
      <note v-for="(note, index) in notes" :key="note" v-bind:description="note.description" v-bind:isComplete="note.isComplete" v-on:remove="removeNote(index)" v-on:complete="completeNote(index)"></note>
    </ul>
    <form action="index.html" method="post" v-on:submit.prevent="addNote()">
      <input type="text" name="" value="" v-model="newNote" placeholder="Write anything you want to remember here.">
      <button type="submit" name="button" class="btn">Add Note</button>
    </form>
  </div>
</template>

<script>
import Note from './Note.vue'

export default {
  name: 'notes-list',
  components: {
    Note
  },
  data(){
    return {
      newNote: "",
      notes: undefined
    }
  },
  methods: {
    addNote(){
      if(this.newNote.length == 0){
        return;
      }
      this.notes.push({ description: this.newNote, isComplete: false});
      this.newNote = "";
    },

    removeNote(index){
      this.notes.splice(index, 1);
    },

    completeNote(index){
      this.notes[index].isComplete = this.notes[index].isComplete == false;
    }
  },
  mounted(){
    if(localStorage.notes === undefined){
      localStorage.setItem("notes", JSON.stringify([]));
      this.notes = JSON.parse(localStorage.getItem("notes"));
    } else {
      this.notes = JSON.parse(localStorage.getItem("notes"));
    }
  },
  updated(){
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }
}
</script>

<style scoped>
  form {
    margin-top: 20px;
  }

  .btn {
    background-color: #34d99c;
    border-radius: 5px;
  }
</style>
