<template>
  <div id="app">
    <div id="titlebar">
      <a><img src="./images/close.png" width="25px" height="25px"></a>
      <a><img src="./images/max.png" width="25px" height="25px"></a>
      <a><img src="./images/mini.png" width="25px" height="25px"></a>
      
    </div>
    <div id="menu">
      <a><h1>&#9664;</h1></a>
      <a><h1>&#9658;</h1></a>
      <a><h2>⭯</h2></a>
    </div>
    <Header></Header>
    <Body></Body>
  </div>
</template>


<script>
import Body from './components/Body.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Body,
    Header
  }
}
</script>

<style>
  @import 'App.css';
</style>