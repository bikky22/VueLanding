<template>
  <div class="BackGround">
      <h1>Hello {{ their_name }}, this is my Background page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali...</p>
  </div>
</template>

<script>
export default {
  name: 'BackGround',
  data() {
    return {
      their_name: this.$route.params.name
    }
  }
}
</script>

<style scoped>
  .BackG {
    background-color: greenyellow;
    width:100%;
    height: 30px;
  }
</style>