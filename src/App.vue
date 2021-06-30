<template>

  <div id="app">
    <v-app id="inspire">
      <v-card
          class="mx-auto overflow-hidden"
          width="100%"
          height="100%"
          color="grey lighten-5"
      >
        <v-system-bar color="blue-grey lighten-2"></v-system-bar>

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
            <router-link to="/" tag="span" class="pointer">
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
            <Logout v-if="!user.loggedIn"/>
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
<!--            dropdow-->
            <v-menu
                v-for="([text, rounded, icon], index) in btns"
                :key="text"
                :rounded="rounded"
                :icon="icon"
                offset-y
            >
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                    :color="colors[index]"
                    class="white--text ml-1 mr-1"
                    v-bind="attrs"
                    v-on="on"
                >
                  <v-icon left>{{ icon }}</v-icon>
                  {{ text }} Radius
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                    v-for="item in items"
                    :key="item"
                    link
                >

                  <v-list-item-title v-text="item"></v-list-item-title>
                  <v-icon right>
                    {{ icon }}
                  </v-icon>
                </v-list-item>
              </v-list>
            </v-menu>
<!--            dropdow-->
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
              <LogoutBtn v-if="user.loggedIn"/>
              <Logout v-else/>
            </v-navigation-drawer>


        <v-main class="mt-10 mb-10">
          <v-container>
            <router-view></router-view>
          </v-container>
        </v-main>

        <!-- <v-card height="100px">
          <v-footer
              v-bind="localAttrs"
              :padless="padless"
          >
            <v-card
                flat
                tile
                width="100%"
                color="grey darken-3 text-center"
            >
              <v-card-text>
                <v-btn
                    v-for="ico in icons"
                    :key="ico"
                    :color="ico.color"
                    class="mx-4"
                    :to="ico.url"
                    icon
                    dark
                >
                  <v-icon size="24px">
                    {{ ico.icon }}
                  </v-icon>
                </v-btn>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
              </v-card-text>
            </v-card>
          </v-footer>
        </v-card> -->
      </v-card>
    </v-app>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Logout from "./components/Auth/Logout";
import LogoutBtn from "./components/Btn/LogoutBtn";
import {mapGetters} from "vuex";


export default {
  components: { Nav, Logout, LogoutBtn },
  data: () => ({
    drawer: false,
    group: null,
    value: 1,
    btns: [
      ['Removed', '0', 'mdi-bookmark'],
      ['Large', '0', 'mdi-file-plus'],
      ['Custom', '0', 'mdi-format-list-bulleted'],
    ],
    colors: ['grey darken-3 blue-grey--text-lighten-5 text--accent-4', 'error', 'teal darken-1'],
    items: ['Orders', 'New ad', 'My ads', 'Admin', 'Users'].map(x => `${x}`),
    links: [
      {title: 'Orders', icon: 'mdi-bookmark', url: '/orders'},
      {title: 'New ad', icon: 'mdi-file-plus', url: '/new'},
      {title: 'My ads', icon: 'mdi-format-list-bulleted', url: '/list'},
      {title: 'Admin', icon: 'mdi-account-tie', url: '/main'},
      // {title: 'Users', icon: 'mdi-account-supervisor', url: '/manID'}
    ],
    icons: [
      {color: 'indigo darken-4', icon: 'mdi-facebook', url: 'https://facebook.com/mr-crodo'},
      {color: 'blue', icon: 'mdi-twitter', url: 'https://twitter.com/mr-croro'},
      {color: 'indigo', icon: 'mdi-linkedin', url: 'https://www.linkedin.com/in/mr-crodo/'},
      {color: 'pink darken-3', icon: 'mdi-instagram', url: 'https://www.instagram.com/mr-crodo/'},
      {color: 'green darken-2', icon: 'mdi-whatsapp', url: 'https://'},
      {color: 'blue-grey lighten-1', icon: 'mdi-github', url: 'https://'},
      {color: 'amber accent-2', icon: 'mdi-slack', url: 'https://'},
    ],
    padless: true,
    variant: 'default',
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
    }),
    localAttrs () {
      const attrs = {}

      if (this.variant === 'default') {
        // attrs.absolute = false
        attrs.fixed = true
      }
      return attrs
    },
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


