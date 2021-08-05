<template>
  <v-row>

    <v-card class="portrait">
<!--      <section>-->
<!--        <video src="@/assets/smoke.mp4" autoplay muted></video>-->
<!--        <h1 class="main-text">-->
<!--          <span>N</span>-->
<!--          <span>a</span>-->
<!--          <span>s</span>-->
<!--          <span>i</span>-->
<!--          <span>b</span>-->
<!--          <span> </span>-->
<!--          <span>M</span>-->
<!--          <span>a</span>-->
<!--          <span>m</span>-->
<!--          <span>m</span>-->
<!--          <span>a</span>-->
<!--          <span>d</span>-->
<!--          <span>o</span>-->
<!--          <span>v</span>-->
<!--        </h1>-->
<!--      </section>-->

      <section>
        <img src="@/assets/bg.jpg" id="bg" alt="">
        <h2 id="text">Full Stack</h2>
        <img src="@/assets/man.png" id="man" alt="">
        <img src="@/assets/clouds_1.png" id="clouds_1" alt="">
        <img src="@/assets/clouds_2.png" id="clouds_2" alt="">
        <img src="@/assets/mountain_left.png" id="mountain_left" alt="">
        <img src="@/assets/mountain_right.png" id="mountain_right" alt="">
      </section>

      <div class="sec">
        <h2>ScrollingTrigger is Awesome</h2>
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
      </div>

    </v-card>


    <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Send Me a Message
        </v-btn>
      </template>
      <v-card>
       <v-card-title class="text-h5 grey lighten-2">
          Send Me a Message
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Name*"
                  type="text"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                  type="email"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  outlined
                  name="input-7-4"
                  label="Outlined textarea"
                  type="text"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Send
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>




  </v-row>
</template>

<script>
import axios from 'axios'
import { gsap } from "gsap";
export default {
  name: 'Contact',
  data() {
    return {
      dialog: false,
      name: '',
      email: '',
      text: '',
    }
  },
  methods: { 
    submitSecondForm() {
      axios
      // .get(`https://site.com/API/read.php?name=${this.name}&email=${this.email}`)
      .post('https://site.com/..', {
                name: this.modalSecond.name,
                email: this.modalSecond.emal,
                textarea: this.modalSecond.textarea
      })

      //Reset
      this.modalSecond.name = ''
      this.modalSecond.emal = ''
      this.modalSecond.show = false
      
    }
  },
  // components: { Mapbox },
  mounted() {
    // let map = this.$refs.map.map
    // map.on('load', () => {
    //   map.addLayer()
    // })

    gsap.to('#bg', {
      scrollTrigger: {
        scrub: 1
      },
      scale: 1.5
    });

    gsap.to('#man', {
      scrollTrigger: {
        scrub: 1
      },
      scale: 0.5
    });

    gsap.to('#mountain_left', {
      scrollTrigger: {
        scrub: 1
      },
      x: -500,
    });

    gsap.to('#mountain_right', {
      scrollTrigger: {
        scrub: 1
      },
      x: 500,
    });

    gsap.to('#clouds_1', {
      scrollTrigger: {
        scrub: 1
      },
      x: 200,
    });

    gsap.to('#clouds_2', {
      scrollTrigger: {
        scrub: 1
      },
      x: -200,
    });

    gsap.to('#text', {
      scrollTrigger: {
        scrub: 1
      },
      y: -500,
    });

  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    // this.mapbox = Mapbox;
  }
}
</script>

<style scoped>
/*parallax*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
}

section:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background: linear-gradient(to top, #fff, transparent);
  z-index: 1000;
}

section img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /*pointer-events: none;*/
}

section img#man {
  transform-origin: bottom;
}
#text {
  position: relative;
  color: #ffffff;
  font-size: 10vw;
}

.sec {
  position: relative;
  padding: 100px;
}

.sec h2 {
  font-size: 3.5em;
  margin-bottom: 10px;
  color: #20496a;
}
.sec p {
  font-size: 1.2em;
  color: #20496a;
}
/*parallax*/
/*.portrait {*/
/*  position: absolute;*/
/*  top: 0;*/
/*  left: 0;*/
/*  width: 100%;*/
/*  height: 100vh;*/
/*  background-color: #000000 !important;*/
/*}*/
/*section {*/
/*  height: 100vh;*/
/*  background: #000000;*/
/*}*/
.hello {
  /*position: absolute;*/
  /*bottom: 100vh;*/
  /*left: 0;*/
  /*width: 100%;*/
  /*height: 100vh;*/
}
/*section:before {*/
/*  content: '';*/
/*  position: absolute;*/
/*  top: 0;*/
/*  left: 0;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  background: linear-gradient(to right, #f00,#f00,#0f0,#0ff,#ff0,#0ff);*/
/*  mix-blend-mode: color;*/
/*  pointer-events: none;*/
/*}*/
/*video {*/
/*  object-fit: cover;*/
/*  width: 100%;*/
/*  height: 100vh;*/
/*}*/
/*h1 {*/
/*  margin: 0;*/
/*  padding: 0;*/
/*  position: absolute;*/
/*  top: 50%;*/
/*  transform: translateY(-50%);*/
/*  width: 100%;*/
/*  text-align: center;*/
/*  color: #ddd;*/
/*  font-size: 5em;*/
/*  font-family: sans-serif;*/
/*  letter-spacing: .2em;*/
/*}*/
/*h1 span {*/
/*  opacity: 0;*/
/*  display: inline-block;*/
/*  animation: animate 1s linear forwards;*/
/*}*/
/*@keyframes animate {*/
/*  0% {*/
/*    opacity: 0;*/
/*    transform: rotateY(90deg);*/
/*    filter: blur(10px);*/
/*  }*/
/*  100% {*/
/*    opacity: 1;*/
/*    transform: rotateY(0deg);*/
/*    filter: blur(0);*/
/*  }*/
/*}*/
/*h1 span:nth-child(1) {*/
/*  animation-delay: .5s;*/
/*}*/
/*h1 span:nth-child(2) {*/
/*  animation-delay: 1s;*/
/*}*/
/*h1 span:nth-child(3) {*/
/*  animation-delay: 1.5s;*/
/*}*/
/*h1 span:nth-child(4) {*/
/*  animation-delay: 1.75s;*/
/*}*/
/*h1 span:nth-child(5) {*/
/*  animation-delay: 2s;*/
/*}*/
/*h1 span:nth-child(6) {*/
/*  animation-delay: 2.5s;*/
/*}*/
/*h1 span:nth-child(7) {*/
/*  animation-delay: 2.75s;*/
/*}*/
/*h1 span:nth-child(8) {*/
/*  animation-delay: 3s;*/
/*}*/
/*h1 span:nth-child(9) {*/
/*  animation-delay: 3.5s;*/
/*}*/
/*h1 span:nth-child(10) {*/
/*  animation-delay: 3.75s;*/
/*}*/
/*h1 span:nth-child(11) {*/
/*  animation-delay: 4s;*/
/*}*/
/*h1 span:nth-child(12) {*/
/*  animation-delay: 4.5s;*/
/*}*/
/*h1 span:nth-child(13) {*/
/*  animation-delay: 4.75s;*/
/*}*/
/*h1 span:nth-child(14) {*/
/*  animation-delay: 5s;*/
/*}*/
/*#map {*/
/*  width: 100%;*/
/*  height: 500px;*/
/*}*/
</style>