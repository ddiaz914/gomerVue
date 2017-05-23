<template lang="html">
  <li @mouseenter="fadeIn" @mouseleave="fadeOut"><span class="description" v-bind:class="{strike: finished}">{{ description }}</span><span class="complete" v-on:click="complete" v-bind:class="{fadeIn: isActive}">√</span><span class="remove" v-bind:class="{fadeIn: isActive}" v-on:click="remove">X</span></li>
</template>

<script>
export default {
  props: ["description"],
  data(){
    return {
      isActive: false,
      finished: false
    }
  },
  methods: {
    complete(){
      this.finished == false ? this.finished = true : this.finished = false;
    },
    remove(){
      this.$emit('remove');
    },
    fadeIn(){
      this.isActive = true;
    },
    fadeOut(){
      this.isActive = false;
    }
  }
}
</script>

<style scoped>
  .description, .complete, .remove {
    font-size: 1.2rem;
  }

  .description {
    margin-left: 40.52px;
  }

  .complete, .remove {
    color: white;
    border-radius: 50%;
    padding: 0 5px;
    margin: 0 2px;
    cursor: pointer;
    opacity: 0;
  }

  .complete {
    background-color: #34d99c;
  }

  .remove {
    background-color: #FF7D7D;
  }

  .fadeIn {
    animation-duration: .25s;
    animation-name: fadeIn;
    animation-fill-mode: forwards;
  }

  .strike {
    position: relative;
  }

  .strike:after {
    content: ' ';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: black;
    animation-name: strike;
    animation-duration: .1s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes strike{
    0%   { width : 0; }
    100% { width: 100%; }
  }
</style>
