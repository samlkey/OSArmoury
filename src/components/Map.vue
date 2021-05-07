<template>
    <div id="container">
        <div id="mapContainer"></div>
    </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
 name: "Map",
 data() {
   return{
     center: [37,7749, -122,4194]
   }},
 methods: {
   setupLeafletMap: function () {
     const map = L.map('mapContainer', {
         zoomControl: false,
         maxBounds: [[53.9019693, -106.4279718], [-54.5276119, 107.25057270]]
     }).setView([8.608, 30.961], 5);


     var surfaceLayer = L.tileLayer('https://map-543f.kxcdn.com/osrs-world-map/v2/{z}/{x}/{y}.png', {
            maxZoom: 6,
            minZoom: 4,
            continuousWorld: false,
            noWrap: true,
     }).addTo(map);


     console.log(map)
     console.log(surfaceLayer)
   },
 },
 mounted() {
   this.setupLeafletMap();
 },
};
</script>

<style scoped>
#mapContainer {
    top: 43px;
    left: 86px;
    position: absolute;
    width: 95.5vw;
    height: 105.85vh;

}
</style>