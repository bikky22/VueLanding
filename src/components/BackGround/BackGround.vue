<template>
  <div class="background">
      <h1>Hello {{ purl }}, this is my Background page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali...</p>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data() {
    return {
      purl: this.$route.params.name
    }
  }
}
</script>

<style scoped>
  .background {
    background-color: greenyellow;
  }
</style>