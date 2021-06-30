import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase';
import router from './router/index'
import store from './store'
import { firestorePlugin } from 'vuefire'
import VueCompositionApi from "@vue/composition-api"
import 'firebase/firestore'

import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from "vuetify";
import LogRocket from "logrocket";

LogRocket.init('1uo5lb/add-spa');
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


firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});


// facebook


new Vue({
  router,
  vuetify,
  store,


  render: h => h(App)
}).$mount('#app')



