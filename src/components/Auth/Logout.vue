<template>
  <v-bottom-navigation class="mt-1">
    <v-btn
        color="grey blue-grey--text-lighten-5 text--accent-4"
        class="ml-2 info"
        v-for="link in links"
        :key="link.title"
        :to="link.url"
    >
      <v-icon left>{{ link.icon }}</v-icon>
      {{ link.title }}
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
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
};
</script>