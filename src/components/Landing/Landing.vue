<template>
  <div class="landing">
    <h1>{{ msg }}</h1>
    <h1 v-once>{{name}}</h1>
    My friends call me "KK", my mother calls me "Bikky" I belong to a Bengali family. I was born in Jammu and brought up in Northen region of India. I am Computer Science Engineer and i love building things. I enjoy learning multiple languages (Programming , Foreign and language of string i.e. Guitar).
    <br>
     {{ btnState ? 'The button is disabled' : 'The button is active'}}
     <button v-on:click="Connect" v-bind:disabled="btnState">Connect</button>
     <div class="holder">
      <ul>
        <li v-for="(data, index) in acc" :key='index'>{{index}}. {{data.acc}}</li>
      </ul>
      <p v-if="acc.length >= 1">I have more than 1 account</p>
      <p v-else>I have less than or equal to 1 Account</p>
      <div v-bind:class="{ alert: !showAlert, 'another-class': showClass}"></div>
      <div v-bind:class="alertObjectStyle"></div>
      <div v-bind:style="{ backgroundColor: bgColor, width: bgWidth, height: bgHeight }"></div>
      <div v-bind:style="alertObjectData"></div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: {
    msg: String
  },
  data() {
    return {
      bgColor: 'yellow',
      bgWidth: '100%',
      bgHeight: '30px',
      name: 'Developer',
      btnState: true,
      acc: [
          { "acc": "Facebook" },
          { "acc": "Twitter" }
      ],
      showAlert: true,
      showClass: false,
      alertObject: {
      alert: true,
      },
      alertObjectData: {
        bgColor: 'yellow',
        bgWidth: '100%',
        bgHeight: '30px'
        },

    }
  },
}
</script>

<style scoped>
  .alert {
    background-color: yellow;
    width:100%;
    height: 30px;
  }
  .holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }
</style>
