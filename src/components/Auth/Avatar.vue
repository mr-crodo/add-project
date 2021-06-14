<template>
    <v-row justify="space-around">
      <v-avatar v-if="photoUrl">
        <img
            :src="src"
            alt="John"
        >
      </v-avatar>

      <v-avatar color="blue darken-3" v-else>
        <v-icon dark>
          mdi-account-circle
        </v-icon>
      </v-avatar>




    <!-- <v-avatar color="red">
      <span class="white--text text-h5">{{ name }}</span>
    </v-avatar> -->
     <!-- <img class="avatar" :src="src" /> -->
  </v-row>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      firebase
    }
  },
  props: {
    name: { type: String, default: '' },
    photoUrl: { type: String, default: '' },
    sender: { type: Boolean, default: false }
  }
}
</script>

