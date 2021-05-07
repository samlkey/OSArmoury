<template>
  <div id="app">
    <div id="titlebar">
      <div id="container">
        <a v-on:click="exit()"><img src="./images/close.png" width="25px" height="25px" id="close"></a>
      </div>
    </div>
    <div id="titlebar2"></div>

    <div id="menu">
      <a><h1>&#9664;</h1></a>
      <a><h1 id="flip">&#9664;</h1></a>
    </div>



    <div id=header>
      <Header></Header>
    </div>

    <div id="content">
      <router-view></router-view>
    </div>
  
  
  
  </div>
</template>


<script>
//import Body from './components/Body.vue'
import Header from './components/Header.vue'
  


export default {
  name: 'App',
  components: {
    //Body,
    Header
  },
  methods: {
    exit : function() {
      window.close();
    }
  }
}
</script>

<style>
  @import 'App.css';
</style>