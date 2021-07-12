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

        <v-avatar color="grey" v-if="!user.data.photoURL">
          <v-icon dark>
            mdi-account-circle
          </v-icon>
        </v-avatar>

        <v-avatar v-else>
          <Avatar :src="user.data.photoURL"/>
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-list-item-content class="justify-center">
        <div class="mx-auto text-center">
          <v-avatar
              color="grey"
              v-if="!user.data.photoURL"
              class="mx-auto text-center"
          >
            <v-icon dark>
              mdi-account-circle
            </v-icon>
          </v-avatar>

          <v-avatar v-else>
            <Avatar :src="user.data.photoURL"/>
          </v-avatar>
          <h3>{{ user.data.displayName }}</h3>
          <p class="text-caption mt-1">
            {{ user.data.email }}
          </p>
          <v-divider class="my-3"></v-divider>
          <v-list>
            <v-list-item-group>
              <v-list-item
                  depressed
                  rounded
                  text
                  v-for="link of links"
                  :key="link.title"
                  :to="link.url"
              >
                <v-icon left>
                  {{ link.icon }}
                </v-icon>
                <v-list-item-title>{{ link.title }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-divider class="my-3"></v-divider>
          <v-list-item
              depressed
              rounded
              text
              class="logout"
              @click.prevent="signOut"
          >
            <v-icon left>
              mdi-exit-to-app
            </v-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </div>
      </v-list-item-content>
    </v-card>
  </v-menu>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
import Avatar from './User/Avatar.vue'
export default {
  components: { Avatar },
  data: () => ({
    links: [
      {title: 'My Profile', icon: 'mdi-account-circle-outline', url: '/user'},
      {title: 'Edit Profile', icon: 'mdi-account-edit-outline', url: '/profile'},
      {title: 'Inbox', icon: 'mdi-email-outline', url: '/chats'},
      {title: 'Setting', icon: 'mdi-cog-outline', url: '/user'},
      {title: 'Help', icon: 'mdi-help-circle-outline', url: '/user'},
      // {title: 'Users', icon: 'mdi-account-supervisor', url: '/manID'}
    ],
  }),
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

<style>
.v-list-item:hover {
  background-color: #80CBC4;
  transition: all .5s;
}
.logout:hover {
  background-color: #EF9A9A;
  transition: all .5s;
}
</style>
