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
          </v-toolbar-items>
          <v-toolbar-items class="d-flex d-md-none d-print-flex">
            <DotsBtn/>
          </v-toolbar-items>
          <DropDown class="d-none d-md-flex d-print-flex"/>
          <v-toolbar-items>
            <v-menu
                offset-y
            >
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                    color="grey darken-3 blue-grey--text-lighten-5 text--accent-4"
                    class="white--text ml-1 mr-1"
                    v-bind="attrs"
                    v-on="on"
                >
                  <v-icon large>mdi-translate</v-icon>
                  <v-icon right>mdi-menu-down</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                    @click="setLocale('en')"
                >
                  <v-list-item-title><flag iso="us"></flag></v-list-item-title>
                </v-list-item>
                <v-list-item
                    @click="setLocale('ru')"
                >
                  <v-list-item-title><flag iso="ru"></flag></v-list-item-title>
                </v-list-item>
                <v-list-item
                    @click="setLocale('az')"
                >
                  <v-list-item-title><flag iso="az"></flag></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
<!--            <v-btn>-->
<!--              <a href="#" @click="setLocale('en')"><flag iso="us"></flag></a>-->
<!--              <a href="#" @click="setLocale('ru')"><flag iso="ru"></flag></a>-->
<!--              <a href="#" @click="setLocale('az')"><flag iso="az"></flag></a>-->
<!--            </v-btn>-->
          </v-toolbar-items>
          <v-toolbar-items>
            <v-badge
                avatar
                bordered
                overlap
                color="red lighten-1"
                :content="messages"
                :value="messages"
                width="20"
            >
              <Nav />
            </v-badge>

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
                  to="/user"
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
                  <v-list-group
                      :value="true"
                      prepend-icon="mdi-account-circle"
                  >
                    <template v-slot:activator>
                      <v-list-item-title>Users</v-list-item-title>
                    </template>

                    <v-list-group
                        :value="true"
                        no-action
                        sub-group
                    >
                      <template v-slot:activator>
                        <v-list-item-content>
                          <v-list-item-title>Admin</v-list-item-title>
                        </v-list-item-content>
                      </template>

                      <v-list-item
                          v-for="([title, icon], i) in admins"
                          :key="i"
                          link
                      >
                        <v-list-item-title v-text="title"></v-list-item-title>

                        <v-list-item-icon>
                          <v-icon v-text="icon"></v-icon>
                        </v-list-item-icon>
                      </v-list-item>
                    </v-list-group>

                    <v-list-group
                        no-action
                        sub-group
                    >
                      <template v-slot:activator>
                        <v-list-item-content>
                          <v-list-item-title>Actions</v-list-item-title>
                        </v-list-item-content>
                      </template>

                      <v-list-item
                          v-for="([title, icon], i) in cruds"
                          :key="i"
                          link
                      >
                        <v-list-item-title v-text="title"></v-list-item-title>

                        <v-list-item-icon>
                          <v-icon v-text="icon"></v-icon>
                        </v-list-item-icon>
                      </v-list-item>
                    </v-list-group>
                  </v-list-group>
                </v-list-item-group>
              </v-list>
              <v-col class="d-flex flex-column flex-wrap flex-grow-1" width="100%" block>
              </v-col>
              <LogoutBtn v-if="user.loggedIn"/>
              <Logout v-else/>
            </v-navigation-drawer>


        <v-main class="mt-10 mb-10">
          <v-container>
            <router-view
                :user="user"
                :rooms="rooms"
                @addRoom="addRoom"
                @deleteRoom="deleteRoom"
                @checkIn="checkIn"
            ></router-view>
          </v-container>
        </v-main>
        <vue-webrtc width="100%" roomId="roomId">
        </vue-webrtc>

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
import Logout from "@/components/Auth/Logout";
import LogoutBtn from "@/components/Btn/LogoutBtn";
import DropDown from "@/components/Btn/DropDown";
import DotsBtn from "@/components/Btn/DotsBtn";
import {mapGetters} from "vuex";
import db from './main.js'
import Firebase from 'firebase'
export default {
  components: { Nav, Logout, LogoutBtn, DropDown, DotsBtn },
  data: () => ({
    drawer: false,
    group: null,
    value: 1,
    messages: 0,
    show: false,
    // user: null,
    rooms: [],
    // btns: [
    //   ['Removed', '0', 'mdi-bookmark'],
    //   ['Large', '0', 'mdi-file-plus'],
    //   ['Custom', '0', 'mdi-format-list-bulleted'],
    // ],
    // colors: ['grey darken-3 blue-grey--text-lighten-5 text--accent-4', 'error', 'teal darken-1'],
    // items: ['Orders', 'New ad', 'My ads', 'Admin', 'Users'].map(x => `${x}`),
    links: [
      // {title: 'Orders', icon: 'mdi-bookmark', url: '/orders'},
      // {title: 'New ad', icon: 'mdi-file-plus', url: '/new'},
      // {title: 'My ads', icon: 'mdi-format-list-bulleted', url: '/list'},
      {title: 'Admin', icon: 'mdi-account-tie', url: '/main'},
      // {title: 'Users', icon: 'mdi-account-supervisor', url: '/manID'}
    ],
    admins: [
      ['Management', 'mdi-account-multiple-outline'],
      ['Settings', 'mdi-cog-outline'],
    ],
    cruds: [
      ['Create', 'mdi-plus-outline'],
      ['Read', 'mdi-file-outline'],
      ['Update', 'mdi-update'],
      ['Delete', 'mdi-delete'],
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
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
    },
    logout: function() {
      Firebase.auth()
          .signOut()
          .then(() => {
            this.user = null
            this.$router.push('login')
          })
    },
    addRoom: function(payload) {
      db.collection('users')
          .doc(this.user.uid)
          .collection('rooms')
          .add({
            name: payload,
            createdAt: Firebase.firestore.FieldValue.serverTimestamp()
          })
    },
    deleteRoom: function(payload) {
      db.collection('users')
          .doc(this.user.uid)
          .collection('rooms')
          .doc(payload)
          .delete()
    },
    checkIn: function(payload) {
      const roomRef = db
          .collection('users')
          .doc(payload.hostID)
          .collection('rooms')
          .doc(payload.roomID)
      roomRef.get().then(doc => {
        if (doc.exists) {
          roomRef
              .collection('attendees')
              .doc(this.user.uid)
              .set({
                displayName: payload.displayName,
                createdAt: Firebase.firestore.FieldValue.serverTimestamp()
              })
              .then(() => this.$router.push(`/chat/${payload.hostID}/${payload.roomID}`))
        }
      })
    }
  },
  mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
        db.collection('users')
            .doc(this.user.uid)
            .collection('rooms')
            .onSnapshot(snapshot => {
              const snapData = []
              snapshot.forEach(doc => {
                snapData.push({
                  id: doc.id,
                  name: doc.data().name
                })
              })
              this.rooms = snapData.sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                  return -1
                } else {
                  return 1
                }
              })
            })
      }
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
.v-image__image--cover {
  /*max-width: 1200px;*/
  object-fit: contain;
  background-size: contain !important;
}
.v-main__wrap {
  /*background-color: #000000;*/
}
.pointer {
  cursor: pointer;
}
.flag-icon-us.flag-icon-squared,
.flag-icon-ru.flag-icon-squared,
.flag-icon-az.flag-icon-squared{
  background-size: cover;
  width: 100%;
  height: 36px;
  border: 1px solid #1e1e24;
}
.flag-icon.flag-icon-squared {
  width: 100% !important;
}
</style>