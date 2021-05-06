<template>
  <div class="header">

    <a v-on:click="homeDirect()"><img src="../images/icon.png" id="icon"></a>
    <a v-on:click="mapDirect()"><img src="../images/map.png" id="micon"></a>

  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    homeDirect : function (){
      console.log("home redirect")
      this.$router.push({name: 'Body'})
    },
    mapDirect : function (){
      console.log("map redirect")
      this.$router.push({name: 'Map'})
    }
  }
}
</script>

<style>
  @import "Header.css";
</style>
