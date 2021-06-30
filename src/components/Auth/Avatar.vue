<template>
    <v-row justify="space-around">
      <v-img
          v-if="user.data.photoURL"
          :lazy-src="src"
          :src="src"
          :alt="user.data.displayName"
          size="164"
          max-height="150"
          max-width="150"
      ></v-img>

      <v-avatar color="blue darken-3" v-else>
        <v-icon dark>
          mdi-account-circle
        </v-icon>
      </v-avatar>
  </v-row>
</template>

<script>
import firebase from 'firebase'
import {mapGetters} from "vuex";
export default {
  data() {
    return {
      firebase
    }
  },
  props: {
    name: { type: String, default: '' },
    photoURL: { type: String, default: '' },
    sender: { type: Boolean, default: false },
    src: { type: String, default: '' }
  },
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
}
</script>

