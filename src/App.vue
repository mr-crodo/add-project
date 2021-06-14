<template>

  <div id="app">
    <v-app id="inspire">
      <v-card
          class="mx-auto overflow-hidden"
          width="100%"
          height="100%"
          color="grey lighten-5"
      >
        <v-system-bar color="blue-grey lighten-5"></v-system-bar>

        <v-app-bar
            color="grey darken-3"
            dark
        >
          <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
              class="d-flex d-md-none d-print-flex"
              color="blue-grey lighten-5"
          >
          </v-app-bar-nav-icon>

          <v-toolbar-title>
            <router-link to="/home" tag="span" class="pointer">
              <v-icon color="green">mdi-triangle-outline</v-icon>
              <v-icon color="indigo lighten-3">mdi-alpha-d-box</v-icon>
              <v-spacer></v-spacer>
              <v-icon color="light-blue lighten-1">mdi-alpha-a-box-outline</v-icon>
              <v-icon color="grey">mdi-alpha-p-circle</v-icon>
              <v-icon color="red">mdi-alpha-p</v-icon>
              </router-link>
          </v-toolbar-title>

          <v-spacer></v-spacer>
          <v-toolbar-items class="d-none d-md-flex d-print-flex" >
            <template v-if="user.loggedIn" color="cyan darken-1" class="d-flex align-items-center justify-center">
              <router-link
                  to="/user"
                  class="d-flex align-items-center justify-center mr-2 white--text"
              >
                {{ user.data.displayName }}
              </router-link>
            </template>
            <Logout/>
            <v-btn
                color="grey darken-3 blue-grey--text-lighten-5 text--accent-4"
                class="ml-2"
                v-for="link in links"
                :key="link.title"
                :to="link.url"
            >
              <v-icon left>{{ link.icon }}</v-icon>
              {{ link.title }}
            </v-btn>
          </v-toolbar-items>
          <v-toolbar-items>
            <Nav />

          </v-toolbar-items>
        </v-app-bar>

            <v-navigation-drawer
                v-model="drawer"
                absolute
                left
                temporary
            >
              <v-btn
                  v-if="user.loggedIn"
                  outlined
                  color="indigo"
                  block
              >
                <router-link to="/user" color="cyan darken-1" class="d-flex align-items-center justify-center blue-grey--text">
                  {{ user.data.displayName }}
                </router-link>
              </v-btn>

              <v-list
                  nav
                  dense
              >
                <v-list-item-group
                    v-model="group"
                    active-class="blue-grey lighten-4 blue-grey--text-lighten-5 text--accent-4"
                >
                  <v-list-item
                      v-for="link of links"
                      :key="link.title"
                      :to="link.url"
                  >
                    <v-icon left>
                      {{ link.icon }}
                    </v-icon>
                    <v-list-item-title v-text="link.title"></v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
              <Logout/>
            </v-navigation-drawer>


        <v-main>
          <v-container>
            <router-view></router-view>
          </v-container>
        </v-main>

      </v-card>
    </v-app>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Logout from "./components/Auth/Logout";
import {mapGetters} from "vuex";


export default {
  components: { Nav, Logout },
  data: () => ({
    drawer: false,
    group: null,
    value: 1,
    links: [
      // {title: 'Login', icon: 'mdi-lock', url: '/login'},
      // {title: 'Registration', icon: 'mdi-face', url: '/registration'},
      {title: 'Orders', icon: 'mdi-bookmark', url: '/orders'},
      {title: 'New ad', icon: 'mdi-file-plus', url: '/new'},
      {title: 'My ads', icon: 'mdi-format-list-bulleted', url: '/list'}
    ]
  }),
  props: {
    title: {
      type: String,
      // required: true,
    },
  },
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },



  // watch: {
  //   group () {
  //     this.drawer = false
  //   },
  // },

}
</script>

<style>
a, a:hover,a:visited, a:focus {
  text-decoration:none;
}
.v-toolbar__title {
  color: #ECEFF1;
}

.pointer {
  cursor: pointer;
}
</style>


