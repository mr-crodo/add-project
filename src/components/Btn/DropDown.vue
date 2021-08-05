<template>
  <v-toolbar-items>
    <v-menu
        offset-y
        v-if="user.loggedIn"
    >
      <template v-if="user.admin" v-slot:activator="{ attrs, on }">
        <v-btn
            color="grey darken-3 blue-grey--text-lighten-5 text--accent-4"
            class="white--text ml-1 mr-1"
            v-bind="attrs"
            v-on="on"
        >
          <v-icon left>mdi-google-ads</v-icon>
          Store
        </v-btn>
      </template>

      <v-list>
        <v-list-item
            v-for="link in links"
            :key="link"
            link
            :to="link.url"
        >
          <v-icon left>
            {{ link.icon }}
          </v-icon>
          <v-list-item-title v-text="link.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

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
          <v-icon left>mdi-account-supervisor</v-icon>
          Users
        </v-btn>
      </template>

      <v-list>
        <v-list-item
            v-for="user in users"
            :key="user"
            link
            :to="user.url"
        >
          <v-icon left>
            {{ user.icon }}
          </v-icon>
          <v-list-item-title v-text="user.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>


  </v-toolbar-items>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "DropDown",
  data: () => ({
    btns: [
      ['Store', '0', 'mdi-bookmark'],
      ['Users', '0', 'mdi-file-plus'],
      ['Custom', '0', 'mdi-format-list-bulleted'],
    ],
    colors: ['grey darken-3 blue-grey--text-lighten-5 text--accent-4', 'error', 'teal darken-1'],
    items: ['Orders', 'New ad', 'My ads', 'Admin', 'Users'].map(x => `${x}`),
    links: [
      {title: 'Orders', icon: 'mdi-bookmark', url: '/orders'},
      {title: 'New ad', icon: 'mdi-file-plus', url: '/new'},
      {title: 'My ads', icon: 'mdi-format-list-bulleted', url: '/list'},
    ],
    users: [
      {title: 'Rooms', icon: 'mdi-human-capacity-decrease', url: '/rooms'},
      {title: 'Chat', icon: 'mdi-chat', url: '/chat'},
      {title: 'Video chat', icon: 'mdi-message-video', url: '/video'},
      {title: 'Contacts', icon: 'mdi-star-circle', url: '/contact'},
    ],
    drawer: false,
    // links: [
    //   {icon: 'dashboard', text: 'Dashboard', route: '/'},
    //   {icon: 'folder', text: 'My Projects', route: '/projects'},
    //   {icon: 'person', text: 'Team', route: '/team'},
    // ]
  }),
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
}
</script>

<style scoped>
</style>