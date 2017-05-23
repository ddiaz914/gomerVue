<template lang="html">
  <div class="notes-list valign-wrapper right">
    <div class="center">
      <ul>
        <note v-for="(note, index) in notes" :key="note" v-bind:description="note.description" v-on:remove="removeNote(index)"></note>
      </ul>
      <form action="index.html" method="post" v-on:submit.prevent="addNote()">
        <input type="text" name="" value="" v-model="newNote" placeholder="Write anything you want to remember here.">
        <button type="submit" name="button" class="btn">Add Note</button>
      </form>
    </div>
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
      notes: []
    }
  },

  methods: {
    addNote(){
      if(this.newNote.length == 0){
        return;
      }
      this.notes.push({ description: this.newNote})
      this.newNote = "";
    },

    removeNote(index){
      this.notes.splice(index, 1);
    }
  }
}
</script>

<style scoped>
  .notes-list {
    height: 50vh;
    width: 100vw;
  }

  form {
    margin-top: 20px;
  }

  .btn {
    background-color: #34d99c;
    border-radius: 5px;
  }

  .center {
    margin: 0 auto;
  }

  @media only screen and (min-width : 1024px) {
    .notes-list {
      height: 100vh;
      width: 50vw;
    }
  }
</style>
