<template>
<v-row justify="center" v-on:="setScroll">
  <v-card justify="center" class="portrait">


    <div class="banner">

      <div class="sun">
        <video-background
            :src="require(`@/assets/merc.mp4`)"
            :sources="[
        {src: '@/assets/merc.mp4', res: 900, autoplay: true}
    ]"
            style="width: 40px; max-width: 40px; height: 40px; background-size: cover; padding: 0; max-height: 200px;"
        >
        </video-background>

        <video-background
            :src="require(`@/assets/portal.mp4`)"
            :sources="[
        {src: '@/assets/portal.mp4', res: 900, autoplay: true}
    ]"
            style="width: 20px; max-width: 20px; height: 20px; background-size: cover; padding: 0; max-height: 200px;"
        >
        </video-background>
      </div>

      <div class="planet">

        <video-background
            :src="require(`@/assets/mars.mp4`)"
            :sources="[
        {src: '@/assets/mars.mp4', res: 900, autoplay: true},
        {src: '@/assets/mars.mp4', res: 638, autoplay: true}
    ]"
            style="width: 50px; max-width: 50px; height: 50px; background-size: cover; padding: 0; max-height: 200px;"
        >
        </video-background>

        <video-background
            :src="require(`@/assets/moon1.mp4`)"
            style="width: 150px; max-width: 150px; height: 150px; background-size: cover; padding: 0; max-height: 200px;"
        >
        </video-background>

        <video-background
            :src="require(`@/assets/jupiter.mp4`)"
            :sources="[
        {src: '@/assets/jupiter.mp4', res: 900, autoplay: true},
        {src: '@/assets/jupiter.mp4', res: 638, autoplay: true}
    ]"
            style="width: 40px; max-width: 40px; height: 40px; background-size: cover; padding: 0; max-height: 200px;"
        >
        </video-background>
      </div>
      <div class="rocket">
        <video-background
            :src="require(`@/assets/rocket.mp4`)"
            style="width: 50px; max-width: 50px; height: 50px; background-size: cover; padding: 0; max-height: 200px;"
        >
        </video-background>
      </div>




      <mapbox
          :access-token="accessToken"
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
      <div class="d-flex align-items-center justify-content-between">
        <v-col
          sm="12"
          md="4"
        >
          <v-img
            src="../assets/join.png"
            
          >
          
          </v-img>
        </v-col>
        <v-col
          cols="6"
          class="flex-column d-none d-md-block"
        >
            <div class="wrapper d-md-block">
              <div class="static-txt">I'm a</div>
              <ul class="dynamic-txts">
                <li><span>Full Stack</span></li>
                <li><span>Frontend</span></li>
                <li><span>Back-end</span></li>
                <li><span>Freelancer</span></li>
              </ul>
            </div>
            <h1 class="static-txt d-flex align-items-center justify-content-center">Developer</h1>
        </v-col>
      </div>
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

/* section {
  background: #343F4F;
} */

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
  max-width: 980px;
  width: 100%;
}

.planet {
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

.wrapper {
  display: inline-flex;
}

 .static-txt {
  font-size: 60px;
  color: #000;
  font-weight: 400;
}

.wrapper .dynamic-txts {
  margin-left: 15px;
  line-height: 90px;
  height: 90px;
  /* background: red; */
  overflow: hidden;
}

.dynamic-txts li {
  list-style: none;
  font-size: 60px;
  font-weight: 500;
  color: #FC6D6D;
  position: relative;
  top: 0;
  animation: slide 6s steps(4) infinite;
}

@keyframes slide {
  100% {
    top: -360px;
  }
}

.dynamic-txts li span {
  position: relative;
}

.dynamic-txts li span::after {
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  background: #fff;
  border-left: 2px solid #FC6D6D;
  animation: typing 1.5s steps(10) infinite;
}

@keyframes typing {
  100% {
    left: 100%;
    margin: 0 -35px 0 35px;
  }
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

  .bottom-gradient {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
  }

  .repeating-gradient {
    background-image: repeating-linear-gradient(-45deg,
                        rgba(255,0,0,.25),
                        rgba(255,0,0,.25) 5px,
                        rgba(0,0,255,.25) 5px,
                        rgba(0,0,255,.25) 10px
                      );
  }
</style>
