import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase';
import router from './router/index'
import store from './store/index'
import { firestorePlugin } from 'vuefire'
import VueCompositionApi from "@vue/composition-api"
import 'firebase/firestore'
import WebRTC from 'vue-webrtc'
import * as io from 'socket.io-client'
import {i18n} from "./plugins/i18n";
import FlagIcon from "vue-flag-icon";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Draggable from "gsap/Draggable";
// import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable);
import MapBox from 'mapbox-gl'
//MapBox
import Vue2MapboxGL from 'vue2mapbox-gl';
// You might want to import the relevant css, for example:
import 'mapbox-gl/dist/mapbox-gl.css';
// for the v-mapbox-geocoder
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
//video-bg
import VideoBg from 'vue-videobg'

//video bg -nov
import VideoBackground from 'vue-responsive-video-background-player'

Vue.component('video-background', VideoBackground);


//MapBoxGL
// Use the plugin
Vue.use(Vue2MapboxGL);

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faPodcast, faVideo, faUser } from '@fortawesome/free-solid-svg-icons'

import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from "vuetify";
import LogRocket from "logrocket";

library.add(faTrash, faPodcast, faVideo, faUser)
window.io = io

Vue.config.productionTip = false
Vue.use(WebRTC)
Vue.component('video-bg', VideoBg)
LogRocket.init('1uo5lb/add-spa');
Vue.use(FlagIcon)
Vue.use(Vuetify)
Vue.use(VueCompositionApi)
Vue.use(firestorePlugin)
Vue.config.productionTip = false


const configOptions = {
  apiKey: "AIzaSyBiBU_HKyP-4tOnaUn7vmpgnE5nMjIII_U",
  authDomain: "add-spa.firebaseapp.com",
  databaseURL: "https://add-spa-default-rtdb.firebaseio.com",
  projectId: "add-spa",
  storageBucket: "add-spa.appspot.com",
  messagingSenderId: "270335739499",
  appId: "1:270335739499:web:9f3586dbbeb155e873d32e"
};

router.beforeEach((to, from, next) => {
  const authenticatedUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !authenticatedUser) next('user')
  else next()
})



// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
//
// mapboxgl.accessToken = 'pk.eyJ1IjoibXJjcm9kbyIsImEiOiJjazY5cDBnYnowZ2prM2RwbXZjOG1zMTBwIn0.OXhUF1nfFLIWWxCpweanaA';
// var map = new mapboxgl.Map({
//   container: 'maps',
//   style: 'mapbox://styles/mapbox/streets-v11'
// });


// firebase.initializeApp(configOptions);
//vmesto verneqo napisal eto dla svazi videochata
const firebaseApp = firebase.initializeApp(configOptions);
export default firebaseApp.firestore()


firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});




// facebook


new Vue({
  router,
  vuetify,
  store,
  WebRTC,
  i18n,
  gsap,
  MapBox,


  render: h => h(App)
}).$mount('#app')



