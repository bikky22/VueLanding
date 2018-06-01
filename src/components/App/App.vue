<template>
  <div id="app">
    <nav>
      <router-link to="/">Landing</router-link> | 
      <router-link to="/background">Background</router-link> | 
      <router-link to="/reactapp">My_reactapp</router-link> | 
      <router-link to="/owcsx">owcsx</router-link> | 
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
