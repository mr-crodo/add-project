import Vue from 'vue';
import Vuex from 'vuex';
import ads from './ads';
// import user from "./user";
import shared from "./shared";

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    ads,
    shared
  },
  state: {
    user: {
      loggedIn: false,
      data: null
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    }
  },
  actions: {
    fetchUser({
      commit
    }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          uid: user.uid,
          email: user.email,
          photoURL: user.photoURL,
          providerId: user.providerId,
          phoneNumber: user.phoneNumber,
          creationTime: user.creationTime,
          lastSignInTime: user.lastSignInTime
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
})
