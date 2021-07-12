<template>
  <v-row justify="center">
    <v-card justify="center" class="portrait">
      <section>
        <video src="@/assets/smoke.mp4" autoplay muted></video>
        <h1 class="main-text">
          <span>N</span>
          <span>a</span>
          <span>s</span>
          <span>i</span>
          <span>b</span>
          <span> </span>
          <span>M</span>
          <span>a</span>
          <span>m</span>
          <span>m</span>
          <span>a</span>
          <span>d</span>
          <span>o</span>
          <span>v</span>
        </h1>
      </section>
    </v-card>

<!--    <v-img-->
<!--        justify="center"-->
<!--        width="100%"-->
<!--        height="100%"-->
<!--        src="@/assets/azerbaijanHigh.svg"-->
<!--        lazy-src="@/assets/azerbaijanHigh.svg"-->
<!--    ></v-img>-->

    <mapbox
        access-token="pk.eyJ1IjoibXJjcm9kbyIsImEiOiJjazY5cDBnYnowZ2prM2RwbXZjOG1zMTBwIn0.OXhUF1nfFLIWWxCpweanaA"
        :map-options="{
        style: 'mapbox://styles/mrcrodo/ckqwl1ylp089w18o44zk6fldv',
      }"
        :geolocate-control="{
        show: true,
        position: 'top-left',
      }"
        :scale-control="{
        show: true,
        position: 'top-left',
      }"
        :fullscreen-control="{
        show: true,
        position: 'top-left',
      }"
    />

  </v-row>
</template>

<script>

// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// import Mapbox from "mapbox-gl";
import Mapbox from 'mapbox-gl-vue'
// am4core.useTheme(am4themes_animated);
export default {
  name: 'Contact',
  data() {
    return {
      // accessToken: 'pk.eyJ1IjoibXJjcm9kbyIsImEiOiJjazY5cDBnYnowZ2prM2RwbXZjOG1zMTBwIn0.OXhUF1nfFLIWWxCpweanaA', // your access token. Needed if you using Mapbox maps
      // mapStyle: 'mapbox://styles/mrcrodo/ckqw1gevp14on17s45jjxrf61' // your map style
    }
  },
  components: { Mapbox },
  mounted() {
    let map = this.$refs.map.map
    map.on('load', () => {
      map.addLayer()
    })
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    // this.mapbox = Mapbox;
  }
}
</script>

<style scoped>
/*.portrait {*/
/*  position: absolute;*/
/*  top: 0;*/
/*  left: 0;*/
/*  width: 100%;*/
/*  height: 100vh;*/
/*  background-color: #000000 !important;*/
/*}*/


section {
  height: 100vh;
  background: #000000;
}

.hello {
  /*position: absolute;*/
  /*bottom: 100vh;*/
  /*left: 0;*/
  width: 100%;
  height: 100vh;
}

section:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #f00,#f00,#0f0,#0ff,#ff0,#0ff);
  mix-blend-mode: color;
  pointer-events: none;
}

video {
  object-fit: cover;
  width: 100%;
  height: 100vh;
}

h1 {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  color: #ddd;
  font-size: 5em;
  font-family: sans-serif;
  letter-spacing: .2em;
}

h1 span {
  opacity: 0;
  display: inline-block;
  animation: animate 1s linear forwards;
}

@keyframes animate {
  0% {
    opacity: 0;
    transform: rotateY(90deg);
    filter: blur(10px);
  }

  100% {
    opacity: 1;
    transform: rotateY(0deg);
    filter: blur(0);
  }
}

h1 span:nth-child(1) {
  animation-delay: .5s;
}
h1 span:nth-child(2) {
  animation-delay: 1s;
}
h1 span:nth-child(3) {
  animation-delay: 1.5s;
}
h1 span:nth-child(4) {
  animation-delay: 1.75s;
}
h1 span:nth-child(5) {
  animation-delay: 2s;
}
h1 span:nth-child(6) {
  animation-delay: 2.5s;
}
h1 span:nth-child(7) {
  animation-delay: 2.75s;
}
h1 span:nth-child(8) {
  animation-delay: 3s;
}
h1 span:nth-child(9) {
  animation-delay: 3.5s;
}
h1 span:nth-child(10) {
  animation-delay: 3.75s;
}
h1 span:nth-child(11) {
  animation-delay: 4s;
}
h1 span:nth-child(12) {
  animation-delay: 4.5s;
}
h1 span:nth-child(13) {
  animation-delay: 4.75s;
}
h1 span:nth-child(14) {
  animation-delay: 5s;
}

#map {
  width: 100%;
  height: 500px;
}

</style>