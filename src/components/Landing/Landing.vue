<template>
  <div class='landing'>
    {{msg}}

    <button v-on:click="ChangeName" v-bind:disabled="btnState">bolean</button>
    {{ btnState ? 'The button is disabled' : 'the button is active'}}

    <div class="holder">
      <ul>
        <li v-for="(data, index) in skills" :key='index'>{{index}}. {{data.skill}}</li>
      </ul>

      <p v-if="skills.length >= 5">You are good to go</p>
      <p v-else>Danger zone</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: {},
  data() {
    return {
      msg: 'Kiran Kumar Roy up here',
      btnState: true,
      skills: [
        { "skill": "Vue.js"},
        { "skill": "GoLang"},
        { "skill": "Python"},
        { "skill": "Rust"},
        { "skill": "C/C++"}
      ]
    }
  }
}
</script>

<style scoped>

</style>
