<template>
  <div class="d-flex align-items-center justify-center">
    <v-btn
        color="red darken-1"
        class="d-flex align-items-center justify-center ml-2"
        @click.prevent="signOut"
        block
    >
      <v-icon left>mdi-logout</v-icon>
      Sign out
    </v-btn>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import firebase from "firebase";
export default {
  name: "LogoutBtn",
  data: () => ({
    drawer: false,
    group: null,
    value: 1,
    links: [
      {title: 'Login', icon: 'mdi-lock', url: '/login'},
      {title: 'Registration', icon: 'mdi-face', url: '/registration'},
    ]
  }),
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.replace({name: ""});
          });
    }
  }
}
</script>

<style scoped>
</style>