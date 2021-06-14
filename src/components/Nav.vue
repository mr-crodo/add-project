<template>
  <v-menu
      bottom
      min-width="200px"
      rounded
      offset-y
      v-if="user.loggedIn"
  >
    <template v-slot:activator="{ on }">
      <v-btn
          icon
          x-large
          v-on="on"
      >
        <v-avatar color="grey" v-if="!src">
          <v-icon dark>
            mdi-account-circle
          </v-icon>
        </v-avatar>

        <v-avatar v-else>
          <img
              :src="src"
              alt="nas"
          >
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-list-item-content class="justify-center">
        <div class="mx-auto text-center">
          <v-avatar color="grey" v-if="!src">
            <v-icon dark>
              mdi-account-circle
            </v-icon>
          </v-avatar>

          <v-avatar v-else>
            <img
                :src="src"
                alt="nas"
            >
          </v-avatar>
          <h3>{{ user.data.displayName }}</h3>
          <p class="text-caption mt-1">
            {{ user.data.email }}
          </p>
          <v-divider class="my-3"></v-divider>
          <v-btn
              depressed
              rounded
              text
              to="/user"
          >
            Edit Account
          </v-btn>
          <v-divider class="my-3"></v-divider>
          <v-btn
              depressed
              rounded
              text
              @click.prevent="signOut"
              color="red darken-1"
          >
            Disconnect
          </v-btn>
        </div>
      </v-list-item-content>
    </v-card>
  </v-menu>

</template>

<script>
// import Avatar from './Auth/Avatar.vue'
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  // components: { Avatar },
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  props: { src: { type: String, default: '' } },
  methods: {
    signOut() {
      firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.replace({name: "home"});
          });
    }
  }
}
</script>