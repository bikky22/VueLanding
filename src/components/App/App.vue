<template>
  <div id="app">
    <nav>
      <router-link to="/">Landing</router-link> | 
      <router-link to="/background">Background</router-link> | 
      <router-link to="/reactapp">About Me</router-link> | 
      <router-link to="/owcsx">OWCSX</router-link> | 
    </nav>
    <router-view />
  </div>
</template>

<script>
import Landing from '../Landing/Landing.vue'

export default {
  name: 'app',
  components: {
    Landing
  }
}
</script>

<style>
</style>
