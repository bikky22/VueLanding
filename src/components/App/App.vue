<template>
  <div id="app">
    <img src="../../assets/logo.png">
    <Landing msg="Kiran Kumar Roy"/>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/background">background</router-link>
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
