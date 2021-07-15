<template>
<v-row justify="center" v-on:="setScroll">
  <v-card justify="center" class="portrait">


    <div class="banner">

      <div class="sun">

        <video-background
            :src="require(`@/assets/mars.mp4`)"
            :sources="[
        {src: '@/assets/mars.mp4', res: 900, autoplay: true},
        {src: '@/assets/mars.webm', res: 638, autoplay: true, poster: '@/assets/mars.jpg'}
    ]"
            style="width: 50px; max-width: 50px; height: 50px; background-size: cover; padding: 0; max-height: 200px;"
        >
        </video-background>

        <video-background
            :src="require(`@/assets/merc.mp4`)"
            :sources="[
        {src: '@/assets/merc.mp4', res: 900, autoplay: true},
        {src: '@/assets/merc.webm', res: 638, autoplay: true, poster: '@/assets/merc.jpg'}
    ]"
            style="width: 150px; max-width: 150px; height: 150px; background-size: cover; padding: 0; max-height: 200px;"
        >
        </video-background>

        <video-background
            :src="require(`@/assets/407.mp4`)"
            :sources="[
        {src: '@/assets/mars.mp4', res: 900, autoplay: true},
        {src: '@/assets/mars.webm', res: 638, autoplay: true, poster: '@/assets/mars.jpg'}
    ]"
            style="width: 80px; max-width: 80px; height: 80px; background-size: cover; padding: 0; max-height: 200px;"
        >
        </video-background>
      </div>
      <div class="rocket">
        <video-background
            :src="require(`@/assets/rocket.mp4`)"
            :sources="[
        {src: '@/assets/mars.mp4', res: 900, autoplay: true},
        {src: '@/assets/mars.webm', res: 638, autoplay: true, poster: '@/assets/mars.jpg'}
    ]"
            style="width: 50px; max-width: 50px; height: 50px; background-size: cover; padding: 0; max-height: 200px;"
        >
        </video-background>
      </div>




      <mapbox
          access-token="pk.eyJ1IjoibXJjcm9kbyIsImEiOiJjazY5cDBnYnowZ2prM2RwbXZjOG1zMTBwIn0.OXhUF1nfFLIWWxCpweanaA"
          :map-options="{
        style: 'mapbox://styles/mrcrodo/ckqw1gevp14on17s45jjxrf61',
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


      <div class="clouds">
        <img src="@/assets/cloud1.png" style="--i:1;">
        <img src="@/assets/cloud2.png" style="--i:2;">
        <img src="@/assets/cloud3.png" style="--i:3;">
        <img src="@/assets/cloud4.png" style="--i:4;">
        <img src="@/assets/cloud5.png" style="--i:5;">
        <img src="@/assets/cloud1.png" style="--i:10;">
        <img src="@/assets/cloud2.png" style="--i:9;">
        <img src="@/assets/cloud3.png" style="--i:8;">
        <img src="@/assets/cloud4.png" style="--i:7;">
        <img src="@/assets/cloud5.png" style="--i:6;">
      </div>
    </div>

    <section>
      <h2>Realistic Cloud Banner Parallax Effects</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolores harum, impedit itaque iusto magnam
        mollitia neque nesciunt, nisi quod sapiente similique vel voluptate? Aspernatur commodi consequuntur cum
        dignissimos dolor esse eum, eveniet expedita inventore maxime nam neque nisi reprehenderit sequi velit,
        vero, voluptatem? Dolor quia quisquam sit veritatis? Adipisci!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolores harum, impedit itaque iusto magnam
        mollitia neque nesciunt, nisi quod sapiente similique vel voluptate? Aspernatur commodi consequuntur cum
        dignissimos dolor esse eum, eveniet expedita inventore maxime nam neque nisi reprehenderit sequi velit,
        vero, voluptatem? Dolor quia quisquam sit veritatis? Adipisci!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolores harum, impedit itaque iusto magnam
        mollitia neque nesciunt, nisi quod sapiente similique vel voluptate? Aspernatur commodi consequuntur cum
        dignissimos dolor esse eum, eveniet expedita inventore maxime nam neque nisi reprehenderit sequi velit,
        vero, voluptatem? Dolor quia quisquam sit veritatis? Adipisci!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolores harum, impedit itaque iusto magnam
        mollitia neque nesciunt, nisi quod sapiente similique vel voluptate? Aspernatur commodi consequuntur cum
        dignissimos dolor esse eum, eveniet expedita inventore maxime nam neque nisi reprehenderit sequi velit,
        vero, voluptatem? Dolor quia quisquam sit veritatis? Adipisci!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolores harum, impedit itaque iusto magnam
        mollitia neque nesciunt, nisi quod sapiente similique vel voluptate? Aspernatur commodi consequuntur cum
        dignissimos dolor esse eum, eveniet expedita inventore maxime nam neque nisi reprehenderit sequi velit,
        vero, voluptatem? Dolor quia quisquam sit veritatis? Adipisci!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolores harum, impedit itaque iusto magnam
        mollitia neque nesciunt, nisi quod sapiente similique vel voluptate? Aspernatur commodi consequuntur cum
        dignissimos dolor esse eum, eveniet expedita inventore maxime nam neque nisi reprehenderit sequi velit,
        vero, voluptatem? Dolor quia quisquam sit veritatis? Adipisci!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolores harum, impedit itaque iusto magnam
        mollitia neque nesciunt, nisi quod sapiente similique vel voluptate? Aspernatur commodi consequuntur cum
        dignissimos dolor esse eum, eveniet expedita inventore maxime nam neque nisi reprehenderit sequi velit,
        vero, voluptatem? Dolor quia quisquam sit veritatis? Adipisci!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolores harum, impedit itaque iusto magnam
        mollitia neque nesciunt, nisi quod sapiente similique vel voluptate? Aspernatur commodi consequuntur cum
        dignissimos dolor esse eum, eveniet expedita inventore maxime nam neque nisi reprehenderit sequi velit,
        vero, voluptatem? Dolor quia quisquam sit veritatis? Adipisci!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolores harum, impedit itaque iusto magnam
        mollitia neque nesciunt, nisi quod sapiente similique vel voluptate? Aspernatur commodi consequuntur cum
        dignissimos dolor esse eum, eveniet expedita inventore maxime nam neque nisi reprehenderit sequi velit,
        vero, voluptatem? Dolor quia quisquam sit veritatis? Adipisci!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolores harum, impedit itaque iusto magnam
        mollitia neque nesciunt, nisi quod sapiente similique vel voluptate? Aspernatur commodi consequuntur cum
        dignissimos dolor esse eum, eveniet expedita inventore maxime nam neque nisi reprehenderit sequi velit,
        vero, voluptatem? Dolor quia quisquam sit veritatis? Adipisci!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolores harum, impedit itaque iusto magnam
        mollitia neque nesciunt, nisi quod sapiente similique vel voluptate? Aspernatur commodi consequuntur cum
        dignissimos dolor esse eum, eveniet expedita inventore maxime nam neque nisi reprehenderit sequi velit,
        vero, voluptatem? Dolor quia quisquam sit veritatis? Adipisci!
      </p>
    </section>
<!--    <v-img-->
<!--        class="my-img"-->
<!--        src="@/assets/men.jpg"-->
<!--        lazy-src="@/assets/me1.jpg"-->
<!--    >-->
<!--      <h1 class="main-text">{{ $t('welcomeMsg') }}</h1>-->
<!--      <template v-slot:placeholder>-->
<!--        <v-row-->
<!--            class="fill-height ma-0"-->
<!--            align="center"-->
<!--            justify="center"-->
<!--        >-->
<!--          <v-progress-circular-->
<!--              indeterminate-->
<!--              color="grey lighten-5"-->
<!--          ></v-progress-circular>-->
<!--        </v-row>-->
<!--      </template>-->
<!--    </v-img>-->
<!--    <v-img-->
<!--        class="texture"-->
<!--        src="@/assets/blowup.jpg"-->
<!--    >-->

<!--    </v-img>-->


  </v-card>

</v-row>

</template>

<script>
import {mapGetters} from "vuex";
import Mapbox from 'mapbox-gl-vue';
// import VideoBg from 'vue-videobg';
import VideoBackground from 'vue-responsive-video-background-player'
export default {
  name: "Main",
  data: () => ({
    drawer: false,
    group: null,
    value: 1,
    links: [
      {title: 'Login', icon: 'mdi-lock', url: '/login'},
      {title: 'Registration', icon: 'mdi-face', url: '/registration'},
    ],
    accessToken: 'pk.eyJ1IjoibXJjcm9kbyIsImEiOiJjazY5cDBnYnowZ2prM2RwbXZjOG1zMTBwIn0.OXhUF1nfFLIWWxCpweanaA', // your access token. Needed if you using Mapbox maps
    mapStyle: 'mapbox://styles/mrcrodo/ckqw1gevp14on17s45jjxrf61' // your map style
  }),
  components: { Mapbox, VideoBackground },
  mounted() {
    let map = this.$refs.map.map
    map.on('load', () => {
      map.addLayer()
    })
  },
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    }),

  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
    },
    setScroll() {
      let text = document.getElementById('text');
      window.addEventListener('scroll', function () {
        let value = window.scrollY;
        text.style.marginBottom = value * 2 + 'px';
      })
    }
  }
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.banner {
  position: relative;
  width: 100%;
  height: 100vh;
  /*background-image: url("../assets/sky2.png");*/
  /*background-size: cover;*/
  /*background-position: top;*/
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.banner #text {
  position: relative;
  font-size: 12em;
  color: #ffffff;
}

.banner .clouds {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.banner .clouds img {
  position: absolute;
  bottom: 0;
  max-width: 100%;
  animation: animate calc(3s * var(--i)) linear infinite;
}

.sun {
  /*background-image: url("../assets/moon.png");*/
  /*background-position: top;*/
  /*background-repeat: no-repeat;*/
  /*background-size: cover;*/
  /*width: 150px;*/
  /*height: 150px;*/
  /*border-radius: 50%;*/
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  width: 100%;
}

.rocket {
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.VideoBg, .VideoBg__content {
  width: 150px;
  height: 150px;
}

section {
  position: relative;
  padding: 75px 100px;
}

section h2 {
  position: relative;
  font-size:  2.5em;
  margin-bottom: 20px;
}

#map {
  width: 100%;
  height: 500px;
}

@keyframes animate {
0% {
  opacity: 0;
  transform: scale(1);
}
  25%,75% {
    opacity: 1;
  }

  100% {
    transform: scale(3);
  }
}
.main-text {
  color: #ffffff;
}
/*.portrait {*/
/*  position: absolute;*/
/*  top: 0;*/
/*  left: 0;*/
/*  width: 100%;*/
/*  height: 100vh;*/
/*  background-color: #000000 !important;*/
/*}*/
/*.my-img {*/
/*  position: absolute;*/
/*  top: 0;*/
/*  left: 0;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  object-fit: contain;*/
/*}*/
/*.texture {*/
/*  mix-blend-mode: multiply;*/
/*  filter: contrast(1.5);*/
/*}*/
</style>
